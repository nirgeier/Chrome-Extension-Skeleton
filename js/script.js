var ContentScript = ( function () {

  var data, links;

  console.log( 'Thank you for installing this extension.' );

  // Send message to the backgorund page
  chrome.runtime.sendMessage(
    localStorage.getItem( 'chrome.runtime.id' ),
    JSON.stringify( {
      type: 'getAll'
    } ),
    function ( reply ) {
      data = reply || {};
    } );


  // Captue all the key down events on the body.
  document.body.onkeydown = function ( e ) {
    // Print the key which was typed
    console.log( String.fromCharCode( e.keyCode ) + " --> " + e.keyCode );
  };

  // Get all the links in teh page
  links = document.querySelectorAll( 'a' );

  // Loop over the links and set the font-size to 20px
  links.forEach( function ( item ) {
    item.style.fontSize = "20px";
  } );


} )();
