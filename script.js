var slider = document.createElement("DIV");
slider.setAttribute("class","slider");
document.body.appendChild(slider);

var buttonLeft = document.createElement("BUTTON");
buttonLeft.setAttribute("class","leftButton");
slider.appendChild(buttonLeft);
var image = document.createElement("IMG");
image.setAttribute("class", "image");
slider.appendChild(image);

var buttonRight = document.createElement("BUTTON");
buttonRight.setAttribute("class","rightButton");
slider.appendChild(buttonRight);

var images = ["img/slayer.jpg", "img/acdc.jpg","img/muse.jpg"];
image.src=images[0];
var counter=1;
buttonRight.onclick = function(){
  image.src=images[counter];
  counter++;
  if(counter==images.length)
    counter=0;
}

buttonLeft.onclick = function(){
  image.src=images[counter];
  counter--;
  if(counter<0)
    counter=images.length-1;
}
