const $ = require('jquery')
$(document).ready(function() {


   champname = "";
   title = "";
   img ="";
   tags="";
   armor="";
   attackdamage = "";
   hp="";
   mp="";
   spellName="";
   spellDescription="";
   spellImage="";

  var dat = JSON.parse(localStorage.getItem("champion"));
  $.each(dat, function(key,value){
    console.log(key);
  switch (key) {
    case "name": champname = value;

      break;
    case "title": title = value;

      break;
    case "image": img = "<img src='http://ddragon.leagueoflegends.com/cdn/7.2.1/img/champion/"+value.full +"'>";

      break;
    case "lore": lore = $("<p>").html(value);

      break;
    case "tags": tags = value.toString();
      break;

    default:

  }
  // stats
  $.each(dat.stats, function(key,value){
    switch (key) {
      case "armor": armor = value;
        break;
      case "attackdamage": attackdamage = value;
        break;
      case "hp": hp = value;
        break;
      case "mp": mp = value;
        break;
    }
  });
  // spells:name,description,image,cost
  $.each(dat.spells, function(key,value){
    switch (key) {
      case "name": spellName = $("<span>").html(value);
        break;
      default:
      case "description": spellDescription = $("<span>").html(value);
        break;
      case "image": spellImage = "<img src='http://ddragon.leagueoflegends.com/cdn/7.2.1/img/spell/"+value+"'";
        break;
    }
  });

  });

var info =JSON.parse(localStorage.getItem('gameStorage'));
var difficulty = info[0].value;
var name = info[1].value;
var color = info[2].value;

var titre = $("<h3>").html("<span style='color:rgb(249, 228, 148)'>Welcome</span> "+name).attr({
  style:"color:"+color
});
console.log(champname);
$(".info").append(titre);
var introdution = $("<p>").html(champname+"  : "+title);
$(".info").append(introdution);
$(".info").append(tags+"<br>");
$(".info").append(img+"<br><br>");
$(".info").append(lore);
console.log(attackdamage);
$(".info").append("description :<br>");
$(".info").append(lore);
$(".info").append("stats :<br>");
$(".info").append("HP : "+hp+"    MP : "+mp+"<br>");
$(".info").append("Attack damage : "+attackdamage+"    Armor : "+armor+"<br>");
$("#play").click(function(){
  $(location).attr('href',"game.html");
});
$("#back").click(function(){
  $(location).attr('href',"pick.html");
});

});
