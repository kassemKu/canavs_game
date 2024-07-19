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
    // 35 - draw projectiles before update
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}
// 17 - create Enemy class
class Enemy {
  // 42 - start work with enemy class
  constructor(x, y, radius, color, velocity) {
    // 19 - projectile properties
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}

const enemies = [];

// 43 - create enemy generator function
function enemyGenerator() {
  // setInterval(() => {
  // 44 - create enemy
  // 47 - random x, y
  // const x = Math.random() * canvas.width;
  // const y = Math.random() * canvas.height;
  // 48 - get enemy from left right side from out out of screen
  // const x =  0.5 ? 0 - radius;
  // const y =  0 - radius;
  // 49
  // const x = Math.random() > 0.5 ? 0 - radius : radius + canvas.width;
  // const y = Math.random() > 0.5 ? 0 - radius : radius + canvas.height;
  // 50 - random x, y
  // 51 - random radius between 0/30
  // const radius = Math.random() * 30;
  // 52 - avoid the 4 number and under 4
  const radius = Math.random() * (30 - 4) + 4;
  let x;
  let y;
  if (Math.random() < 0.5) {
    x = Math.random() > 0.5 ? 0 - radius : radius + canvas.width;
    y = Math.random() * canvas.height;
  } else {
    x = Math.random() * canvas.width;
    y = Math.random() > 0.5 ? 0 - radius : radius + canvas.height;
  }
  const color = "green";
  // 45 - update the velocity
  // const angle = Math.atan2(y - canvas.height / 2, x - canvas.width / 2);
  // 46 - update the direction
  const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
  // 39 - crate velocity variable
  const velocity = {
    x: Math.cos(angle), // -1/1
    y: Math.sin(angle), // -1/1
  };
  enemies.push(new Enemy(x, y, radius, color, velocity));
  // }, 1000);
}

// 31 - comment out the project clone
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

// 33 - create projectiles array to push in every project clone when user click on screen
const projectiles = [];

// 23 - create animate function
function animate() {
  requestAnimationFrame(animate);
  // console.log(111);
  // 30 - explain var scop, move projectile variable to outside addEventListener
  // 32 - delete the tow functions
  // projectile.draw();
  // projectile.update();
  // 34 - loop through projectiles array
  // 40 - clear the canvas every click event
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 41 - move player draw function right after clearRect
  player.draw();
  projectiles.forEach((projectile) => {
    projectile.update();
  });
  enemies.forEach((enemy, index) => {
    enemy.update();

    // 53 - matching projectile and enemy case
    projectiles.forEach((projectile, projectileIndex) => {
      const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
      // console.log(dist);
      // 54 - objects touch
      if (dist - enemy.radius - projectile.radius < 1) {
        console.log("hit");
        enemies.splice(index, 1);
        projectiles.splice(projectileIndex, 1);
      }
    });
  });
}

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
  // 36 - create new Projectile clone on every click
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
  // const projectile2 = new Projectile(
  //   canvas.width / 2,
  //   canvas.height / 2,
  //   10,
  //   "green",
  //   {
  //     x: -1,
  //     y: -1,
  //   }
  // );
  // 37 - push the new clone into projectiles array
  // create angle variable using atan2 math function
  // 38 - const angle = Math.atan2(y, x)
  const angle = Math.atan2(
    event.clientY - canvas.height / 2,
    event.clientX - canvas.width / 2
  );
  // 39 - crate velocity variable
  const velocity = {
    x: Math.cos(angle), // -1/1
    y: Math.sin(angle), // -1/1
  };
  // console.log(angle);
  projectiles.push(
    new Projectile(canvas.width / 2, canvas.height / 2, 5, "red", velocity)
  );
});

animate();
enemyGenerator();
