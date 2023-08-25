// This file contains the functions that are used to load the pages
// Also a small transition to make the page look better

function load_page(page_name) {  // page_name is a string
    var xhttp = new XMLHttpRequest();
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
            document.querySelector(".white_line_1_name_title_header").style.width = (page_name.length * 12) + 420 + "px";
            document.getElementById("ajax_body").innerHTML = temp_storage;
            document.getElementById("title_title").innerHTML = page_title;
            update_audio_player_div_position();
        }, 500);  // 500ms
        }
    };
    var file_name = "pages/" + page_name + ".html";
    xhttp.open("GET", file_name, true);
    xhttp.send();  // does whatever ajax does
}