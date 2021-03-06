const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: 0,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 0,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: 0,
};

const battleMembers = { mage, warrior, dragon };

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getMonsterDamage(minDmg, strength) {
  return getRandomInt(minDmg, strength);
}

function getWeaponDamage(weaponDmg, strength) {
  return getRandomInt(strength, weaponDmg * strength);
}

function getSpellDamage(spellCaster) {
  if (spellCaster.mana < 15) {
    return 'Not enough mana!';
  }

  spellCaster.mana -= 15;

  return getRandomInt(spellCaster.intelligence, spellCaster.intelligence * 2);
}

module.exports = {
  mage,
  warrior,
  dragon,
  battleMembers,
  getMonsterDamage,
  getWeaponDamage,
  getSpellDamage,
};
