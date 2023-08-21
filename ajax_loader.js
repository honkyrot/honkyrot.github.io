// Description: This file contains the functions that are used to load the pages
function load_page(page_name) {  // page_name is a string
    var xhttp = new XMLHttpRequest();
    const capitalized = page_name.charAt(0).toUpperCase() + page_name.slice(1);  // Capitalize the first letter of the page name
    var page_title = "<h1>" + capitalized + "</h1>";
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("body_body").innerHTML = this.responseText;
        document.getElementById("title_title").innerHTML = page_title;
        }
    };
    var file_name = page_name + ".txt";
    xhttp.open("GET", file_name, true);
    xhttp.send();
}