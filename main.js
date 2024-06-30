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
