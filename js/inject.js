var ContentScript = ( function () {

  // Store the required information for messaging
  localStorage.setItem( 'chrome.runtime.url', chrome.runtime.getURL( '' ) );
  localStorage.setItem( 'chrome.runtime.id', '' + chrome.runtime.id );

  // Inject the script into the page 
  var script = document.createElement( 'script' );
  script.src = chrome.runtime.getURL( 'script.js' );
  ( document.body || document.head || document.documentElement ).appendChild( script );

} )();
