// script for handling dropdowns, modals, and other visual elements

// portfolio page

// do stuff on dropdown click
function dropdown_section(section_name) {
    // get the div
    const div = document.getElementById("dropdown_content_" + section_name);
    const arrow = document.getElementById("portfolio_dropdown_arrow_" + section_name);

    //console.log(div.style.display);
    // check if div is hidden
    if (div.style.display == "none" || div.style.display == "") {
        // open
        div.style.display = "block";
        div.style.height = "0px";  // animation fix

        // set height to content height
        div.style.height = div.scrollHeight + "px";

        setTimeout(() => {
            div.style.opacity = 1;
        }, 100);

        // flip arrow
        arrow.style.transform = "rotate(180deg)";
    } else {
        // close
        
        div.style.opacity = 0;
        div.style.height = "0px";

        setTimeout(() => {
            div.style.display = "none";
        }, 200);

        // flip arrow
        arrow.style.transform = "rotate(0deg)";
    }
}