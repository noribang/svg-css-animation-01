let btns = document.querySelectorAll(".buttons button");
let cat = document.getElementsByClassName("cat")[0];

// Loop thru buttons to add event listener method.
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", manageCatClasses);
}

function manageCatClasses() {
    // Only if btn element has attribute data-add.
    if (this.getAttribute("data-add")) {
        // Add class name to svg element of the same value
        // as btn element attribute data-add value. 
        cat.classList.add(this.getAttribute("data-add"));
    }
    // Only if btn element has attribute data-remove.
    if (this.getAttribute("data-remove")) {
        // Remove class name of svg element of the same value
        // as btn element attribute data-remove value. 
        cat.classList.remove(this.getAttribute("data-remove"));
    }
    
}