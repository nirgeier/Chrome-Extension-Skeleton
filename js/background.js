// Load the current saved data
var data = JSON.parse(localStorage.getItem("data") || "{}");

/**
 * Listen for messages and reply accordinaly
 */
//chrome.runtime.onConnect.addListener( function ( port ) {
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    var msg = JSON.parse(request);

    switch (msg.type) {
      case "add":
        sendResponse(data);
        break;
      case "get":
        sendResponse(data);
        break;
    } // switch
  } //functions
); // runtime
