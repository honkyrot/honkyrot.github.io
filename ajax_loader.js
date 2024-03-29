// This file contains the functions that are used to load the pages
// Also a small transition to make the page look better\

const ajax_body = document.getElementById("ajax_body");
const ajax_title = document.getElementById("page_title_text");  // title_title is the title of the page (e.g. Home, About, etc.)
const main_title = document.getElementById("main_title");  // div containing the title
const title_decor = document.getElementById("title_decor");  // bg of title
let current_page = null;  // current page is home by default

function load_page(page_name) {  // page_name is a string
    if (page_name == current_page) {
        // skip loading the page if it's already loaded
        return;
    }

    current_page = page_name;
    var xhttp = new XMLHttpRequest();
    const capitalized = page_name.charAt(0).toUpperCase() + page_name.slice(1);  // Capitalize the first letter of the page name
    var page_title = capitalized
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var temp_storage = this.responseText
        document.querySelector(".ajax_body_span").style.opacity = "0";
        document.querySelector(".page_title_text").style.opacity = "0";

        setTimeout(function() {  // I AAAa TRANSITIONS
            document.querySelector(".ajax_body_span").style.opacity = "1";
            document.querySelector(".page_title_text").style.opacity = "1";
            //document.querySelector(".white_line_1_name_title_header").style.width = (page_name.length * 12) + 520 + "px";
            ajax_body.innerHTML = temp_storage;
            ajax_title.innerHTML = page_title;

            title_decor.style.width = main_title.offsetWidth + 40 + "px";
        }, 200);  // 200ms
        }
    };
    var file_name = "pages/" + page_name + ".html";
    xhttp.open("GET", file_name, true);
    xhttp.send();  // does whatever ajax does
}
const debug = false;
var website_loaded = false;

const main_title_text = document.getElementById("main_title_text");

// load home page on page load
window.onload = function() {
    if (!debug) {
        load_page("home");
        //load_page("home");
    } else {
        console.log("Debug mode is on, not loading page");
    }
}

// force load page (debug for testing)
//window.onload = function() {
//    load_page("skills");
//}