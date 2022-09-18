const addEventListeners = () => {
    const keyNumber = document.querySelectorAll(".num");
    keyNumber.forEach((key) => {
        key.addEventListener("click", (event) => {
            document.querySelector(".screen").innerText +=
                event.target.innerText;
        });
    });
};
const calc = () => {
    addEventListeners();
    console.log("HI! You're playing ISDI LOGIC 8-)");
};

calc();