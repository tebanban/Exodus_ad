const setTheme= theme=>
document.documentElement.className = theme;

// //This function moves the background of the Neuro Section:
// window.addEventListener('scroll', function(){
// let ante = document.getElementById("antelope")
// var value = window.scrollY -2300;
// ante.style.transform = 'translate(0px, '+value+'px )'
// })


// // This function changes the scale of the background of the Neuro Section:
// window.addEventListener('scroll', function(){
//     let ante = document.getElementById("antelope")
//     var value = window.scrollY * 0.0002 +1.3;
//     ante.style.transform = 'scale( '+value+')';
//     console.log(value * 0.1)
//     })


// This function returns all css styles properties:
// window.addEventListener('scroll', function(){
//     const target = document.querySelector('.back');
//     console.log(target.style)
// })

//this function adds slide show to square1
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("first_square");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
<<<<<<< HEAD
  if (myIndex > x.length) {myIndex = 1};
  console.log(x)
  x[myIndex-1].style.display ="block";  
=======
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display ="block"
>>>>>>> 64030bf4c74ee1e8d1527864d7c29d554941d663
  setTimeout(carousel, 2000); // Change image every 2 seconds
}