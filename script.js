const setTheme= theme=>
document.documentElement.className = theme;

let ante = document.getElementById("antelope");
window.addEventListener('scroll', function(){
var value = window.scrollY;
antelope.style.top =  value * 0.01 + 'px';
console.log(antelope.style.top)
})