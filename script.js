function changeAspirations() {
    let aspNumber = Math.floor(Math.random()*6)+1;

    let randomNum1 = 0;
    let randomNum2 = 0;
    let randomNum3 = 0;

    while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3 ) {
        randomNum1 = Math.floor(Math.random()*20)+1;
        randomNum2 = Math.floor(Math.random()*20)+1;
        randomNum3 = Math.floor(Math.random()*20)+1;
    }

    let preNumber1 = randomNum1;
    let preNumber2 = randomNum2;
    let preNumber3 = randomNum3;

    document.querySelector('.asp-img').src = `./assets/asp-img/${aspNumber}.png`;
    document.querySelector('.asp-img').classList.add('blue-border');
    document.querySelector('.asp-img').classList.add('asp-height');

    document.querySelector('.pre-img-1').src = `./assets/pre-img/${preNumber1}.png`;
    document.querySelector('.pre-img-1').classList.add('green-border');

    document.querySelector('.pre-img-2').src = `./assets/pre-img/${preNumber2}.png`;
    document.querySelector('.pre-img-2').classList.add('green-border');

    document.querySelector('.anti-img').src = `./assets/pre-img/${preNumber3}.png`;
    document.querySelector('.anti-img').classList.add('red-border');
}

document.querySelector('button').addEventListener('click', changeAspirations);

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    },700);
};

document.querySelector("button").addEventListener('click', animateButton)