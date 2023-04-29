let btns = document.querySelectorAll(".buttons button");
let cat = document.getElementsByClassName("cat")[0];
// console.log(btns);
// console.log(cat);

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", manageCatClasses);
}

function manageCatClasses() {
    alert("testing 123!!!");
}