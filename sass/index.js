// var element;
// document.getElementById("header").onclick = "abc";
// function abc(jas) {
//     document.getElementById("header").style.background = "green";
// }

// console.log(jas);
var a= document.getElementById("ID1").children[0];
var copyElement= a.cloneNode(true);

document.getElementById("ID2").appendChild(copyElement) 
