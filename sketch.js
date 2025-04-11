let vh = window.innerHeight;
let vw = window.innerWidth;

let brand = document.getElementById("brand");
let mini = document.getElementById("mini");
let color = document.getElementById("color");
let diameter = document.getElementById("diameter");
let bg = document.getElementById("bg");

let speed = 0.05;

function preload() {
  space = loadFont('space.ttf');
  special = loadFont('special.ttf');
}

/* - - Setup - - */
function setup() {
  createCanvas(window.innerWidth, window.innerHeight, SVG);
}

/* - - Draw - - */
function draw() {

  clear();

  // Logo Type
  textSize(100);
  textFont(special);
  fill('#181818');
  text('NEW', vw / 3, vh / 2);


  // Sub Logo
  strokeWeight(4);
  textSize(100);
  textFont(space);
  fill(color.value);
  text(brand.value, vw / 3 + 300, vh / 2);

  // TM

  let brandWidth = textWidth(brand.value);
  noStroke();
  textSize(30);
  fill('#181818');
  text(mini.value, vw / 3 + 310 + brandWidth, vh / 2 - 45);


  // Icon

  let diameterValue = 0.02 * diameter.value;

  strokeWeight(2);
  stroke('#181818');
  fill(color.value)

  let logoX = vw / 3 - 50
  let logoY = vh / 2 - 35
  // Bottom-right.
  arc(logoX, logoY, 20, 20, 0, HALF_PI * 5 * diameterValue);

  noFill();

  // Bottom-left.
  arc(logoX, logoY, 40 * diameterValue, 40 * diameterValue, HALF_PI, PI + diameterValue * sin(frameCount * 2 * speed));

  // Top-left.
  arc(logoX, logoY, 70 * diameterValue, 70 * diameterValue, PI, PI + QUARTER_PI + diameterValue);

  // Top-right.
  arc(logoX, logoY, 80, 80, PI + QUARTER_PI, TWO_PI + diameterValue * 2 * sin(frameCount * speed));


}


// function: export image
function exportImage() {
  console.log("export image");

  save(
    "nb_logo_" +
    year() +
    nf(month(), 2) +
    nf(day(), 2) +
    ".svg"
  );
}