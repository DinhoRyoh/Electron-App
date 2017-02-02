const $ = require('jquery')
$(document).ready(function() {
  f404 = function() {
    alert( "Ressource not found" );
  }

  //GET
  function init(){
  var $ = require('jquery');
  $.ajax({
    method: "GET",
    url: "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=all&api_key=RGAPI-0880278c-1402-4583-af24-614cd20d15c3",
    statusCode: {
        404: f404,
        200: function(data) {
          var i = 0;
            $.each(data.data, function(key, value) {
              if (i == 0) {
                $(".select #list").append("<tr>&shy;");
              }
              $(".select #list").append('<td><a href="#" data-id="'+value.id+'" class="champion"><img src="http://ddragon.leagueoflegends.com/cdn/7.2.1/img/champion/'+ value.image.full +'"></a></span></td>');
              i += 1;
              if (i == 9) {
                $(".select #list").append("&shy;</tr>");
                i = 0;
              }
            })
        }
      }
  });
  }
  init();
  $("#back").click(function(){
    $(location).attr('href',"menu.html");
  });
  $("body").on("click",".champion",function(){
    var champion_id = $(this).attr("data-id");
    $('.dialogClose').show();
    $("#confirm").click(function(){
      localStorage.setItem("champion_id",champion_id);
      var id = localStorage.getItem("champion_id");
      $.ajax({
        method: "GET",
        async: false,
        url: "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/"+id+"?champData=all&api_key=RGAPI-0880278c-1402-4583-af24-614cd20d15c3",
        statusCode: {
            404: f404,
            200: function(data) {
              console.log(data);
              var dat = JSON.stringify(data);
              localStorage.setItem("champion", dat);
            }
          }
      });
      $(location).attr('href',"selected.html");
    });
    $("#cancel").click(function(){
      $('.dialogClose').hide();
    });
  });
});
