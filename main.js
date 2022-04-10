let btn = document.querySelector(".draw");

const segments = [
    document.querySelectorAll(`div[data-segment="1"]`),
    document.querySelectorAll(`div[data-segment="2"]`),
    document.querySelectorAll(`div[data-segment="3"]`),
];

let square = document.querySelectorAll(".square");

function reload() {
    segments.forEach(segment => {
        segment.forEach(square => {
            square.classList.remove("green");
        });
    });
}

btn.addEventListener("click", () => {
    reload();
    const number = Math.floor(Math.random() * 6 + 1);

    const random = document.createElement("p");
    random.classList.add("even")
    const randomlyNumber = document.querySelector(".randomlyNumber");
    random.appendChild(document.createTextNode(number.toString()));
    randomlyNumber.prepend(random);


    switch (number) {
        case 1:
            segments[1][1].classList.add("green");
            break;
        case 2:
            segments[0][2].classList.add("green");
            segments[2][0].classList.add("green");
            break;
        case 3:
            segments[1][1].classList.add("green");
            segments[2][0].classList.add("green");
            segments[0][2].classList.add("green");
            break;
        case 4:
            segments[0][0].classList.add("green");
            segments[2][0].classList.add("green");
            segments[0][2].classList.add("green");
            segments[2][2].classList.add("green");
            break;
        case 5:
            segments[0][0].classList.add("green");
            segments[2][0].classList.add("green");
            segments[0][2].classList.add("green");
            segments[2][2].classList.add("green");
            break;
        case 6:
            segments[0][0].classList.add("green");
            segments[1][0].classList.add("green");
            segments[2][0].classList.add("green");
            segments[0][2].classList.add("green");
            segments[1][2].classList.add("green");
            segments[2][2].classList.add("green");
            break;
    }

})

