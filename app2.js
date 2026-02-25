// ==========================
// POKEMON GAME OBJECT
// ==========================
const pokemon = require("./pokemon");
const game = {
  party: [],
  collection: [],
  difficulty: "Medium",

  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 }
  ],

  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 }
  ]
};

// ==========================
// EXERCISE 4 – ADD STARTER
// ==========================

const starter = pokemon.find(p => p.starter === true);
game.party.push(starter);

// ==========================
// EXERCISE 5 – ADD 3 MORE
// ==========================

const extraPokemon = pokemon.filter(p => p.hp > 60).slice(0, 3);
extraPokemon.forEach(p => game.party.push(p));

// ==========================
// EXERCISE 6 – COMPLETE GYMS < 3
// ==========================

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) gym.completed = true;
});

// ==========================
// EXERCISE 7 – EVOLVE STARTER
// ==========================

const evolutionMap = {
  1: 2,
  4: 5,
  7: 8,
  25: 26
};

game.party = game.party.map(p => {
  if (evolutionMap[p.number]) {
    return pokemon.find(pk => pk.number === evolutionMap[p.number]);
  }
  return p;
});

// ==========================
// EXERCISE 8 – PRINT PARTY
// ==========================

game.party.forEach(p => console.log(p.name));

// ==========================
// EXERCISE 9 – PRINT STARTERS
// ==========================

pokemon
  .filter(p => p.starter === true)
  .forEach(p => console.log(p.name));

// ==========================
// EXERCISE 10–20 – FINAL CATCH METHOD
// ==========================

game.catchPokemon = function(name) {

  // find pokemon by name (case insensitive)
  const selectedPokemon = pokemon.find(
    p => p.name.toLowerCase() === name.toLowerCase()
  );

  if (!selectedPokemon) {
    return "Pokemon does not exist!";
  }

  const pokeball = this.items.find(item => item.name === "pokeball");

  if (pokeball.quantity <= 0) {
    console.log("Not enough pokeballs!");
    return;
  }

  pokeball.quantity -= 1;

  if (this.party.length < 6) {
    this.party.push(selectedPokemon);
  } else {
    this.collection.push(selectedPokemon);
  }
};

// Test catching
game.catchPokemon("pikachu");

// ==========================
// EXERCISE 12 – COMPLETE GYMS < 6
// ==========================

game.gyms.forEach(gym => {
  if (gym.difficulty < 6) gym.completed = true;
});

// ==========================
// EXERCISE 13 – GYM STATUS
// ==========================

game.gymStatus = function() {

  const gymTally = { completed: 0, incomplete: 0 };

  this.gyms.forEach(gym => {
    gym.completed
      ? gymTally.completed++
      : gymTally.incomplete++;
  });

  console.log(gymTally);
};

game.gymStatus();

// ==========================
// EXERCISE 14 – PARTY COUNT
// ==========================

game.partyCount = function() {
  return this.party.length;
};

console.log("Party Count:", game.partyCount());

// ==========================
// EXERCISE 15 – COMPLETE GYMS < 8
// ==========================

game.gyms.forEach(gym => {
  if (gym.difficulty < 8) gym.completed = true;
});

// ==========================
// EXERCISE 16 – LOG GAME
// ==========================

console.log(game);

// ==========================
// EXERCISE 17 – SORT BY HP
// ==========================

game.party.sort((a, b) => b.hp - a.hp);

// ==========================
// EXERCISE 21 – GROUP BY TYPE
// ==========================

const pokemonByType = {};

pokemon.forEach(p => {
  if (!pokemonByType[p.type]) {
    pokemonByType[p.type] = [];
  }
  pokemonByType[p.type].push(p);
});

console.log(pokemonByType);