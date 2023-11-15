// Spawns random sets of stars across the screen.
// More on the top half of the screen, less on the bottom half.

const star_png = "media/1x1.svg";
const star_storage = document.getElementById("star_storage");

//vw = viewport width
//vh = viewport height

let star_amount_min = 128;
let star_amount = Math.random() * 128;

let total_star_amount = Math.floor(star_amount + star_amount_min);


let current_star_amount = 0;
// spawn stars
function spawn_stars() {
    // create star
    var star = document.createElement("img");
    star.setAttribute("id", "star_" + current_star_amount);
    star.src = star_png;
    star.classList.add("star");
    star.style.zIndex = "-1";
    star.style.position = "fixed";

    // randomize its position and size
    var random_size = Math.random() * 3;
    var random_width = Math.random() * 100;
    var random_height = Math.random() * 100;

    // then go set them
    star.style.left = random_width + "vw";
    star.style.top = random_height + "vh";
    star.style.width = random_size + "px";
    star.style.height = random_size + "px";
    
    // randomize opacity
    star.style.transition = "opacity 1s";
    star.style.opacity = Math.random() - (random_height / 100) + 0.2;

    star_storage.appendChild(star);
}

for (let i = 0; i < (total_star_amount); i++) {
    spawn_stars();
    current_star_amount++;
}

console.log("Spawned " + (total_star_amount) + " stars.");

// gets a random star and randomize its opacity every 100ms
function randomize_star_style() {
    let random_star = Math.floor(Math.random() * total_star_amount);
    let star = document.getElementById("star_" + random_star);

    // math relative to it's position, brighter stars are near top of screen
    let stars_height = star.style.top.replace("vh", "");
    let random_opacity = (Math.random()/10) + Math.random() - (stars_height / 100) + 0.2;

    star.style.opacity = random_opacity;
}

// randomize a star's opacity every 100ms
setInterval(randomize_star_style, 100);