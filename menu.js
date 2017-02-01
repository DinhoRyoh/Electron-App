// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
$(document).ready(function() {


  $('#play').click(function(){
    if ((localStorage.getItem('gameStorage') == null)) {
      var data = JSON.stringify( $(".record").serializeArray() );
      console.log( data );
      localStorage.setItem('gameStorage', data);
    }

      $(location).attr('href',"pick.html");
  });
  if(localStorage.getItem('gameStorage') != null){
   var info = JSON.parse(localStorage.getItem('gameStorage'));
   $(".record .choose option[value="+info[0].value+"]").prop('selected', true);
   $('.record #name').attr('value', info[1].value);
   $(".record input[name='color']").attr('checked',false);
   switch (info[2].value) {
     case "blue": $(".record input[name=color]:nth(0)").attr('checked',true);
       break;
     case "red": $(".record input[name=color]:nth(1)").attr('checked',true);
       break;
     case "yellow": $(".record input[name=color]:nth(2)").attr('checked',true);
       break;
     case "green": $(".record input[name=color]:nth(3)").attr('checked',true);
       break;
     case "pink": $(".record input[name=color]:nth(4)").attr('checked',true);
       break;
     case "orange":$(".record input[name=color]:nth(5)").attr('checked',true);
       break;
     default: $(".record input[name=color]:nth(0)").attr('checked',true);
   }
 }

  $( "#option" ).click(function(){
    $('.options').show();
    $('#submit').click(function() {
      var data = JSON.stringify( $(".record").serializeArray() );
      console.log( data );
      localStorage.setItem('gameStorage', data);
    });
    $("#cancel").click(function(){
      $('.options').hide();
    });
  });
$( "#exit" ).click(function(){
  $('.dialogClose').show();
  $("#quit").click(function(){
    window.close();
  });
  $("#stay").click(function(){
    $('.dialogClose').hide();
  });
});
});
