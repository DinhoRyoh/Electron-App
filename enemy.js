var enemy = function(name, attack, hp) {
      this.name = name;
      this.attack = attack;
      this.hp = hp;
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
});

var enemy = new enemy("Katarina", 50, 500);
alert(enemy.name + ' -> ' + enemy.attack+ ' -> ' + enemy.hp);
