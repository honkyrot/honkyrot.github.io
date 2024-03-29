// creates stars on a canvas

const star_canvas = document.getElementById("star_canvas");
const ctx = star_canvas.getContext("2d", { antialias: false});

star_canvas.width = window.innerWidth;
star_canvas.height = window.innerHeight;

let stars = [];

// Function to draw a pixel as a star
function spawn_stars(x, y) {
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 1, 1);

    // Randomize opacity
    var star_opacity = Math.random() - (y / star_canvas.height) + 0.2;
    star_opacity = Math.abs(star_opacity);
    ctx.globalAlpha = star_opacity;

    stars.push({ x, y });
}

// Function to generate random stars within canvas boundaries
function generate_stars(numStars) {
    for (let i = 0; i < numStars; i++) {
        const x = Math.random() * star_canvas.width;
        const y = Math.random() * star_canvas.height;
        spawn_stars(x, y);
    }
}

// Generate and draw 256 stars
generate_stars(256);