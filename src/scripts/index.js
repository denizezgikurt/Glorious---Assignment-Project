import '../styles/index.scss';

var button = document.getElementById('button');
var greencolor = '#77f442';
var pinkcolor = '#ba4181';
var bluecolor = '#3a65af';
var redcolor = '#961029';

button.onclick= function () {

var randomNumber = Math.floor(Math.random()*10);

if(randomNumber % 2 == 0) {
    document.body.style.backgroundColor = greencolor;
}
else if(randomNumber %3 ==0) {
    document.body.style.backgroundColor = pinkcolor;
}
else if(randomNumber %5 == 0) {
    document.body.style.backgroundColor = bluecolor;
}
else {
    document.body.style.backgroundColor = redcolor;

}
}
