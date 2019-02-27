var images = document.getElementsByClassName('image-wrapper');

for(var i = 0; i < images.length; i++) {
    var image = images[i];
    image.onclick = function() {
        if(this.className.indexOf('selected') > 0) {
            this.className = 'image-wrapper';
        }
        else {
            this.className = 'image-wrapper' + ' selected';
        }
    };
}

var stepOne = document.getElementById('stepOne');
var stepOneSection = document.getElementById('stepOneSection');
stepOne.onclick = function() {
    stepOneSection.className = 'hidden';
}