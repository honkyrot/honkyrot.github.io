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
        div.style.display = "block";
        div.style.opacity = 1;
        div.style.height = "auto";

        // flip arrow
        arrow.style.transform = "rotate(180deg)";
    } else {
        div.style.display = "none";
        div.style.opacity = 0;
        div.style.height = "0px";

        // flip arrow
        arrow.style.transform = "rotate(0deg)";
    }
}