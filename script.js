const setTheme= theme=>
document.documentElement.className = theme;

//This function moves the background of the Neuro Section:
window.addEventListener('scroll', function(){
let ante = document.getElementById("antelope")
var value = window.scrollY * 0.01;
ante.style.transform = 'translate(0px , '+value+'px)'
})


// // This function changes the scale of the background of the Neuro Section:
// window.addEventListener('scroll', function(){
//     let ante = document.getElementById("antelope")
//     var value = window.scrollY * 0.0008;
//     ante.style.transform = 'scale( '+value+')';
//     console.log(value * 0.1)
//     })


// This function returns all css styles properties:
// window.addEventListener('scroll', function(){
//     const target = document.querySelector('.back');
//     console.log(target.style)
// })