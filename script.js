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

function applyFill (slider) {
    const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
    const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage + 0,1}%)`;
    slider.style.background = bg;
    sliderValue.setAttribute("data-length", slider.value);
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

function secureMathRandom() {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const resultEl = document.getElementById('result');

const lengthEl = document.getElementById('slider');

const uppercaseEl = document.getElementById('uppercase');

const lowercaseEl = document.getElementById('lowercase');

const numberEl = document.getElementById('number');

const sysmbolEl = document.getElementById('symbol');

const generateBtn = document.getElementById('generate');

const copyBtn = document.getElementById('copy-btn');

const resultContainer = document.querySelector('.result');

const copyInfo = document.querySelector('.result__info.right');

const copiedInfo = document.querySelector('.result__info.left');

let generatedPassword = false;

let resultContainerBound = {
    left : resultContainer.getBoundingClientRect().left, 
    top : resultContainer.getBoundClientRect().top, 
};

resultContainer.addEventListener('mousemove', e => {
    resultContainerBound = {
        left : resultContainer.getBoundingClientRect().left, 
        top : resultContainer.getBoundClientRect().top, 
    };
    if (generatedPassword) {
        copyBtn.style.opacity = '1';
        copyBtn.style.pointerEvents = 'all';
        copyBtn.style.setProperty('--x', `${e.x - resultContainerBound.top}px`);
    }
    else {
        copyBtn.style.opacity = '0';
        copyBtn.style.pointerEvents = 'none';
    }
});  
window.addEventListener('resize', e => {
    resultContainerBound = {
        left : resultContainer.getBoundingClientRect().left, 
        top : resultContainer.getBoundClientRect().top, 
    };
});

copyBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password || password == "CLICK GENERATE") {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    copyInfo.style.transform = "translateY(200%)";
    copyInfo.style.opacity = "0";
    copiedInfo.style.transform = "translatey(0%)";
    copiedInfo.style.opacity = "0.75";
})
generateBtn.addEventListener('click')