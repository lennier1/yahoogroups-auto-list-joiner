var SERVER_URL = 'https://df58.host.cs.st-andrews.ac.uk/yahoogroups/'
var YAHOO_URL = 'https://groups.yahoo.com/neo/groups/<GROUP>/info'
var YAHOO_SEARCH_URL = 'https://groups.yahoo.com/neo/search?query=<GROUP>'
// Time in milliseconds to wait before opening another tab.
var TAB_DELAY = 2500
// Maximum number of tabs to keep open at once.
var MAX_TABS = 30
// Full path to group file. Format is one group name per line.
var GROUP_FILE = "file:///C:/yahoo-groups-list.txt"

// on install, set enabled to false
chrome.runtime.onInstalled.addListener(function (details) {
	if (details.reason === 'install') {
		chrome.storage.sync.set({ enabled: 0 })
	}
})


// listen to messages from popup and content scripts
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse()

  // handler for starting it
  if (request.type === 'start') {

	// Refresh crashed tabs.
	setInterval(() => {
		chrome.tabs.query({ currentWindow: true }, function (tabs) {
			if (tabs.length > 0) {
				chrome.tabs.sendMessage(tabs[0].id, { action: "page_check" }, function (response) {
					if (!response) {
						chrome.tabs.reload(tabs[0].id);
					}
				});
			}
		});
	}, 60000); //every minute
	
	// Read groups names from file.
	var groupNames;
	var groupListReady = false;	
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", GROUP_FILE, true);        
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                groupNames = rawFile.responseText.split('\n');
				groupListReady = true;
            }
        }
    };
    rawFile.send(null);
	
	var groupNum = 0;
	
	// Periodically try to open a new tab.
	var openTabInterval = setInterval(function () {
		
		chrome.storage.sync.get({ enabled: 0 }, function (items) {
			if (items.enabled) {
				chrome.tabs.query({windowType:'normal'}, function(tabs) {
					if (groupListReady && (tabs.length < MAX_TABS)) {
						var group = groupNames[groupNum].trim();
						var groupUrl = YAHOO_URL.replace('<GROUP>', group);
						chrome.tabs.create({ url: groupUrl });
						groupNum++;
						if (groupNum >= groupNames.length) {
							clearInterval(openTabInterval);
						}
					}
				});
			}
		})
		
	}, TAB_DELAY)
	
  }

  // handler for group archived
  if ((request.type === 'joined') || (request.type === 'joinfailed')) {
	
	// Close tab when group completed.
    chrome.tabs.remove(sender.tab.id);	

  }
})
