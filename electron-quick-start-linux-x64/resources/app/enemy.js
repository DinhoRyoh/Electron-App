
var champion = function(name, attack, hp,mp, armor,spell) {
      this.name = name;
      this.attack = attack;
      this.hp = hp;
      this.mp = mp;
      this.armor =armor;
      this.spell = spell;
}

$.extend(champion.prototype, {
      getName: function() {
            return this.name;
      },
      setName: function(name) {
            this.name = name;
      },
      getAttack: function() {
            return this.attack;
      },
      setAttack: function(attack) {
            this.attack = attack;
      },
      getHp: function() {
            return this.hp;
      },
      setHp: function(hp) {
            this.hp = hp;
      },
      getMp: function() {
            return this.mp;
      },
      setMp: function(mp) {
            this.mp = mp;
      },
      getArmor: function() {
            return this.armor;
      },
      setArmor: function(armor) {
            this.armor = armor;
      },
      attack: function(target) {
        if (target.instanceof 'enemy') {
          target.hp = target.hp - this.attack;
        }

      },
      spell: function(enemy target, id) {
            target.hp = target.hp - spell[id][0];
      }
});

var enemy = function(name, attack, hp,image) {
      this.name = name;
      this.attack = attack;
      this.hp = hp;
      this.image ="public/img/"+image;
}

$.extend(enemy.prototype, {
      getName: function() {
            return this.name;
      },
      setName: function(name) {
            this.name = name;
      },
      getAttack: function() {
            return this.attack;
      },
      setAttack: function(attack) {
            this.attack = attack;
      },
      getHp: function() {
            return this.hp;
      },
      setHp: function(hp) {
            this.hp = hp;
      },
      getImage: function() {
            return this.image;
      },
      setImage: function(image) {
            this.image ="public/img/"+ image;
      },
      attack: function(champion target) {
            target.hp = target.hp - this.attack;
      }
});
