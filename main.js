// 1- select canvas element
const canvas = document.querySelector("#canvas");
// 2- check selector with console
// console.log(canvas);
// 3- explain innerWidth / innerHeight
// console.log(innerHeight);
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(innerWidth);
// 4- gave the canvas full screen width and height
canvas.height = innerHeight;
canvas.width = innerWidth;
// 5- fix the default screen margin, remove body margin
// 6- create canvas context api, read more about canvas context api
const ctx = canvas.getContext("2d");
// context can be 2d or 3d we need 2d in our project
// console.log(ctx);
// 7- create a class to draw a circle
class Player {
  // ask about player property
  // size
  // color
  // position
  // velocity
  // 8- create class constructor / explain what it is
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  // 11- draw the player function
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // 12- colorize the player
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// 9- create player clone
// const player = new Player(100, 100, 30, "blue");
// 10- check player in console
// console.log(player);
// call draw function
// player.draw();

// 13 - create x var and assign it to middle screen in x
const x = canvas.width / 2;
// 14 - create y var and assign it to middle screen in y
const y = canvas.height / 2;
// 15 - centered the player
const player = new Player(x, y, 30, "blue");
player.draw();

// 16 - create Projectile class
class Projectile {
  // 18 - create constructor
  constructor(x, y, radius, color, velocity) {
    // 19 - projectile properties
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  // 20 - draw projectile
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}
// 17 - create Enemy class
class Enemy {}

// 23 - create animate function
function animate() {
  requestAnimationFrame(animate);
  // console.log(111);
  // 30 - explain var scop, move projectile variable to outside addEventListener
  projectile.draw();
  projectile.update();
}

const projectile = new Projectile(
  canvas.width / 2,
  canvas.height / 2,
  10,
  "red",
  {
    x: 1,
    y: 1,
  }
);

// 21 - add click event listener
addEventListener("click", (event) => {
  // 22 - create projectile clones
  // check x, y
  // console.log(event);
  // const x = event.clientX;
  // const y = event.clientY;
  // const projectile = new Projectile(
  //   event.clientX,
  //   event.clientY,
  //   10,
  //   "red",
  //   null
  // );
  // const projectile = new Projectile(
  //   canvas.width / 2,
  //   canvas.height / 2,
  //   10,
  //   "red",
  //   null
  // );
  // 28 - update the velocity
  // const projectile = new Projectile(
  //   canvas.width / 2,
  //   canvas.height / 2,
  //   10,
  //   "red",
  //   {
  //     x: 1,
  //     y: 1,
  //   }
  // );
  // 29 - move draw, update function to inside animate function
  // 23 - show the angle between player and where we click, from center to projectile position draw the triangle
  // 24 - calc the triangle angle by using atan2 method
  // 25 - calc the projectile velocity by using the angle
  // 26 - update the projectile position
  // 27 - get the x by using sig() function, get projectile y by using cos() function
  // like so x = sig(angle), y = cos(angle)
});

animate();
