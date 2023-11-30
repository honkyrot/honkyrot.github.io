// This file contains the functions that are used to load the pages
// Also a small transition to make the page look better

function load_page(page_name) {  // page_name is a string
    var xhttp = new XMLHttpRequest();
    const ajax_body = document.getElementById("ajax_body");
    const title_title = document.getElementById("title_title");  // title_title is the title of the page (e.g. Home, About, etc.)
    const capitalized = page_name.charAt(0).toUpperCase() + page_name.slice(1);  // Capitalize the first letter of the page name
    var page_title = "<h1>" + capitalized + "</h1>";
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var temp_storage = this.responseText
        document.querySelector(".ajax_body_span").style.opacity = "0";
        document.querySelector(".title_title").style.opacity = "0";
        setTimeout(function() {  // I AAAa TRANSITIONS
            document.querySelector(".ajax_body_span").style.opacity = "1";
            document.querySelector(".title_title").style.opacity = "1";
            //document.querySelector(".white_line_1_name_title_header").style.width = (page_name.length * 12) + 520 + "px";
            ajax_body.innerHTML = temp_storage;
            title_title.innerHTML = page_title;
            update_audio_player_div_position();
        }, 300);  // 300ms
        }
    };
    var file_name = "pages/" + page_name + ".html";
    xhttp.open("GET", file_name, true);
    xhttp.send();  // does whatever ajax does
}
const debug = false;

// load home page on page load
window.onload = function() {
    if (!debug) {
        load_page("home");
        update_audio_player();
    } else {
        console.log("Debug mode is on, not loading page");
    }
}

// force load page (debug for testing)
//window.onload = function() {
//    load_page("skills");
//}