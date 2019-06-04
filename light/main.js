let vroad = document.querySelector('.vertRoad');
let hroad = document.querySelector('.horRoad');
let hRoadRed1 = document.querySelector('.horRoadRed1');
let hRoadRed2 = document.querySelector('.horRoadRed2');
let hRoadGreen2 = document.querySelector('.horRoadGreen2');
let hRoadGreen1 = document.querySelector('.horRoadGreen1');
let vRoadRed2 = document.querySelector('.vertRoadRed2');
let vRoadRed1 = document.querySelector('.vertRoadRed1');
let vRoadGreen2 = document.querySelector('.vertRoadGreen2');
let vRoadGreen1 = document.querySelector('.vertRoadGreen1');
let input = document.querySelector('.but');
input.addEventListener('click', function() {
    vroad.style.backgroundColor = "red";
    hroad.style.backgroundColor = 'green';
    hRoadRed1.style.backgroundColor = '#D7D7D7';
    hRoadGreen1.style.backgroundColor = 'green';
    hRoadRed2.style.backgroundColor = '#D7D7D7';
    hRoadGreen2.style.backgroundColor = 'green';
    vRoadRed1.style.backgroundColor = 'red';
    vRoadRed2.style.backgroundColor = 'red';
    vRoadGreen1.style.backgroundColor = '#8FBC8F';
    vRoadGreen2.style.backgroundColor = '#8FBC8F';


});