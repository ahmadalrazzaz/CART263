window.onload = function () {

  let garden = {
    flowers: [],
    numFlowers: 40,

    grass: {
      grassColor: { r: 120, g: 180, b: 120 },
      grassDiv: document.createElement("div"),
    },

    sky: {
      skyColor: { r: 83, g: 154, b: 240 },
      skyDiv: document.createElement("div"),
    },

    birds: [] // TEAM E BIRDS
  };

  let sun = new Sun(10, 10, { r: 240, g: 206, b: 83 });

  function createAndRenderTheGarden() {

    garden.sky.skyDiv.classList.add("sky");
    garden.sky.skyDiv.style.position = "relative";
    garden.sky.skyDiv.style.background =
      `rgb(${garden.sky.skyColor.r},${garden.sky.skyColor.g},${garden.sky.skyColor.b})`;
    document.querySelector("main").appendChild(garden.sky.skyDiv);

    sun.renderSun();

    garden.grass.grassDiv.classList.add("grass");
    garden.grass.grassDiv.style.background =
      `rgb(${garden.grass.grassColor.r},${garden.grass.grassColor.g},${garden.grass.grassColor.b})`;
    document.querySelector("main").appendChild(garden.grass.grassDiv);

    for (let i = 0; i < garden.numFlowers; i++) {

      let x = Math.random() * window.innerWidth;
      let y = Math.random() * 120;
      let size = Math.random() * 30 + 10;
      let stemLength = Math.random() * 50 + 20;

      let petalColor = {
        r: parseInt(Math.random() * 155) + 100,
        g: parseInt(Math.random() * 155) + 100,
        b: parseInt(Math.random() * 155) + 100,
      };

      let flower = new Flower(x, y, size, stemLength, petalColor);
      garden.flowers.push(flower);
    }

    for (let i = 0; i < garden.flowers.length; i++) {
      garden.flowers[i].renderFlower();
    }
  }

  createAndRenderTheGarden();

  // TEAM E BIRD SPAWN
  garden.sky.skyDiv.addEventListener("click", function (e) {

    let rect = garden.sky.skyDiv.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let size = Math.random() * 40 + 20;

    let bird = new Bird(x, y, size);

    garden.birds.push(bird);

    bird.renderBird();
    bird.animateBird();
  });

// TEAM F WEATHER SYSTEM

// Change the weather state and temperature every 5 seconds
let weatherStates = ["sunny", "rainy", "cloudy"];
// Start with sunny weather and 25 degrees
let currentWeather = new Weather(weatherStates[0], 25);

setInterval(() => {

  // Randomly change weather state
  currentWeather.state =
    weatherStates[Math.floor(Math.random() * weatherStates.length)];

  // Randomly change temperature between 15 and 35 degrees
  currentWeather.temp =
    Math.floor(Math.random() * 20) + 15;

  // Render the new weather
  currentWeather.renderWeather();

  const isRaining = currentWeather.state === "rainy";

  for (let i = 0; i < garden.birds.length; i++) {

    if (isRaining) {
      garden.birds[i].hideBehindNearestFlower(garden.flowers);
    } else {
      garden.birds[i].returnToSky();
    }
}
}, 5000);
};