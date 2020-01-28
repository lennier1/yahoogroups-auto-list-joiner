chrome.storage.sync.get({ enabled: 0 }, function (items) {
	if (items.enabled) {
		run()
	}
})

function run () {
  // get the group name from the search query
  var urlParams = new URLSearchParams(window.location.search)
  if (!urlParams.has('query')) {
    return
  }

  var requiredGroup = urlParams.get('query')
  var found = false;
  var clickDelay;

  // highlight the group red in the list
  var groupElementsCollection = document.getElementsByClassName('yg-grp-row')
  for (var i = 0; i < groupElementsCollection.length; i++) {
	var gname = groupElementsCollection[i].getAttribute('data-gname').toLowerCase()
	if (gname === requiredGroup.toLowerCase()) {
	  groupElementsCollection[i].style.border = '5px solid red';
	  var links = groupElementsCollection[i].getElementsByTagName('a');
			if (links.length > 0) {
				clickDelay = Math.round(Math.random() * 2000) + 500;
				setTimeout(function() {
					links[0].click();
					
					// If the page is displaying a loading message after 5 seconds, refresh and try again.
					setTimeout(function() {
						var loadingMessage = document.getElementsByClassName("page-loader yg-button-yellow rnd-crn-2");
						var hiddenLoadingMessage = document.getElementsByClassName("page-loader yg-button-yellow rnd-crn-2 hide");
						if ((loadingMessage.length > 0) && (hiddenLoadingMessage.length == 0)) {
							location.reload(true);
							return;
						}
					}, 5000);
					
				}, clickDelay);
			}
	  found = true;
	  break;
	}
  }

  if (found) return;
  
  // If there's an error message, it means the search results didn't load properly.
  // Pause, refresh, and try again.
  var queryError = document.getElementsByClassName("yg-inline-err-msg");
  if (queryError.length > 0) {
	clickDelay = Math.round(Math.random() * 2000) + 5000;
	setTimeout(function() {
		location.reload(true);
		return;
		}, clickDelay);							
	}
  
  // include a direct link for groups hidden from the directory
  var groupList = document.querySelector('#yg-srp-list > ul');
  var li = document.createElement('li')
  li.textContent = "Couldn't find group in directory--click here in case it's just hidden.";
  li.style.fontWeight = 'bold';
  li.style.color = 'red';
  li.style.cursor = 'pointer';
  li.onclick = function() { window.open('groups/' + requiredGroup + '/info'); };
  groupList.insertBefore(li, groupList.firstChild);
  
  clickDelay = Math.round(Math.random() * 2000) + 500;
  setTimeout(function() {
	li.click();
	
	// If the page is displaying a loading message after 5 seconds, refresh and try again.
	setTimeout(function() {
		var loadingMessage = document.getElementsByClassName("page-loader yg-button-yellow rnd-crn-2");
		var hiddenLoadingMessage = document.getElementsByClassName("page-loader yg-button-yellow rnd-crn-2 hide");
		if ((loadingMessage.length > 0) && (hiddenLoadingMessage.length == 0)) {
			location.reload(true);
			return;
			}
		}, 5000);
	}, clickDelay);
  
}
