// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const $ = require('jquery')

$(document).ready(function() {
    $(this).keypress(function(){
      console.log('key pressed')
      $(location).attr('href',"menu.html");
    });
    $(this).click(function(){
      console.log('clicked')
      $(location).attr('href',"menu.html");
    });
    $('.press').append('press any button to start');
    // function faded(){
    //   while (window) {
    //     $( '.press' ).fadeIn();
    //     $( '.press' ).fadeOut();
    //   }
    // }
    // faded();
    for (var i = 0; i < 500; i++) {
      $( '.press' ).delay( 200 ).fadeIn( 1200 );
      $( '.press' ).delay( 200 ).fadeOut( 1400 );
      $( '.press' ).delay( 200 ).fadeIn( 1200 );
      $( '.press' ).delay( 200 ).fadeOut( 1400 );
      $( '.press' ).delay( 200 ).fadeIn( 1200 );
      $( '.press' ).delay( 200 ).fadeOut( 1400 );
    }

});
4
