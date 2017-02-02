$(document).ready(function() {

   champname = "";
   title = "";
   img ="";
   tags="";
   armor="";
   attackdamage = "";
   hp="";
   mp="";
   spellName=[];
   spellDamage=[];
   spellMana=[];
   spellImage=[];
  var dat = JSON.parse(localStorage.getItem("champion"));
  $.each(dat, function(key,value){
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

  });
  for (var i = 0; i <= 3; i++) {
       spellName.push(dat.spells[i].name);
       $.each(dat.spells[i].effectBurn,function(key,value){
         spellDamage[i] = dat.spells[i].effectBurn[1].split('/');
       });
       spellMana.push(dat.spells[i].cost[0]);
       spellImage.push("<img src='http://ddragon.leagueoflegends.com/cdn/7.2.1/img/spell/"+dat.spells[i].image.full+"' alt='"+dat.spells[i].name+"' title='"+dat.spells[i].name+"'>");
  }
});
