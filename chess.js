var slides = document.querySelector(".slideimg");
var imgs = ["images/2.jpg","images/3.jpg","images/4.png"];
var i=0;//current image index
function prev(){
    if(i<=0)
    i=imgs.length;
    i--;
    return setImg();
}
function setImg(){
    return slides.setAttribute('src', imgs[i]);
}
function next(){
    if(i>=imgs.length-1)
    i=-1;
    i++;
    return setImg();
}
