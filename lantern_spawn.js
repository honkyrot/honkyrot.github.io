// Spawns lanterns from the bottom of the screen
// Lanterns slowly rise up and fly across the screen
// Like the Terraria lantern event, I find that very relaxing, plus the music with the mod really helps!

const lantern_png = "media/lantern.png";

//vw = viewport width
//vh = viewport height

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// spawn lanterns
function lantern_spawn() {
    // create lantern
    var lantern = document.createElement("img");
    lantern.src = lantern_png;
    lantern.classList.add("lantern");
    lantern.style.zIndex = "-1";
    lantern.style.position = "fixed";

    var random_left_number = ((Math.random() * 200) - 100)
    lantern.style.left = random_left_number + "vw";
    lantern.style.rotate = clamp(Math.random() * 30, 15, 30) + "deg";

    document.getElementById("lantern_storage").appendChild(lantern);

    // after 60s, remove lantern
    setTimeout(function() {
        lantern.remove();
    }, 90000);

    // animate lantern and loop it again
    setTimeout(function() {
        var move_top = lantern.style.top + -100 + "vh";
        var move_left = random_left_number + 100 + "vw";
        console.log(lantern.style.left, move_left)

        //animate lantern
        lantern.animate([
            {top: move_top, left: move_left},
        ], {
            duration: 90000,
            iterations: 1
        });

        //loop
        lantern_spawn();
    }, clamp(Math.random() * 1000, 400, 1000));
}

lantern_spawn();