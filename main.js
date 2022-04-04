let btn = document.querySelector(".draw");
let reset = document.querySelector(".reset");
let sq1 = document.querySelector(".sq1");
let sq2 = document.querySelector(".sq2");
let sq3 = document.querySelector(".sq3");
let sq4 = document.querySelector(".sq4");
let sq5 = document.querySelector(".sq5");
let sq6 = document.querySelector(".sq6");
let sq7 = document.querySelector(".sq7");
let sq8 = document.querySelector(".sq8");
let sq9 = document.querySelector(".sq9");

btn.addEventListener("click", () => {
    const number = Math.floor(Math.random() * 6 + 1);

    if (number === 1) {
        sq5.classList.add("green");
    } else if (number === 2) {
        sq7.classList.add("green");
        sq3.classList.add("green");
    } else if (number === 3) {
        sq5.classList.add("green");
        sq7.classList.add("green");
        sq3.classList.add("green");
    } else if (number === 4) {
        sq1.classList.add("green");
        sq3.classList.add("green");
        sq7.classList.add("green");
        sq9.classList.add("green");
    } else if (number === 5) {
        sq1.classList.add("green");
        sq3.classList.add("green");
        sq5.classList.add("green");
        sq7.classList.add("green");
        sq9.classList.add("green");
    } else {
        sq1.classList.add("green");
        sq3.classList.add("green");
        sq4.classList.add("green");
        sq6.classList.add("green");
        sq7.classList.add("green");
        sq9.classList.add("green");
    }

})

reset.addEventListener("click", () => {
    function reload() {
        location.reload();
    }
    reload();
})