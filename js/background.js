// Load the current saved data
var data = JSON.parse( localStorage.getItem( "data" ) || "{}" );

/**
 * Listen for messages and reply accordinaly
 */
//chrome.runtime.onConnect.addListener( function ( port ) {
chrome.runtime.onMessageExternal.addListener(
  function ( request, sender, sendResponse ) {
    var msg = JSON.parse( request );

    switch ( msg.type ) {
    case "add":
      sendResponse( data );
      break;
    case "get":
      sendResponse( data );
      break;
    } // switch
  } //functions
); // runtime

// for performing a task after installation
chrome.runtime.onInstalled.addListener( function ( object ) {
  chrome.storage.local.get( 'installed', function ( a ) {
    chrome.tabs.create( {
      url: chrome.runtime.getURL( "pages/releaseNotes.html" )
    }, function ( tab ) {} );
  } );
} );
