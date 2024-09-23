const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener("keydown", function () {
    jump();
});

function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove('jump')
        }, 700)
    }
}
setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 105) {
        alert("GEME OWER!!")
    }
}, 10)