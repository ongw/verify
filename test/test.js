var siteUrl;
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  siteUrl = tabs[0].url;
  var currentUrl = document.getElementById("currentUrl");

  


  currentUrl.innerHTML = siteUrl;
});
