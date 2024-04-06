// This file does functions on page load and transitions

// consts

// Initialize the skills page
function entry_skills() {
    // empty for now
}

function exit_skills() {
    skill_python_bar_fill.style.width = "0%";
}

// Switch case for page name
function switch_case_page(page_name) {
    switch (page_name) {
        case "skills":
            
            entry_skills();
            break;
        default:
            break;
    }
}