console.clear();

const sliderProps = {
    fill = "#0B1EDF",
    background: "rgba(255, 255, 255, 0.214)",
};

const slider = documet.querySelector(".range__slider");

const sliderValue = document.querySelector(".length__title");

slider.querySelector('input').addEventListener("input", event => {
    sliderValue.setAttribute("data-length", event.target.value);
    applyFill(event.target);
});

applyFill(slider.querySelector("input"));

function applyFill () {
    
}