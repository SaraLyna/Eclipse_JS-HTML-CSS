// script exo5.js pour exercice "Boutons et click"
var setupListeners = function() {
    var plus = document.getElementById("plus");
    plus.addEventListener("click",zoom);
    var moins = document.getElementById("moins");
    moins.addEventListener("click",dezoom);
    var img = document.getElementById("sun");
    img.addEventListener("click",changesoleil);

}
window.addEventListener("load", setupListeners);

var zoom = function() {

    var sol = document.getElementById("sun");
    var prop = window.getComputedStyle(sol);
    var w = parseFloat(prop.width);
    if (w < 500) {
        w = w + 20;
    }
    sol.style.width = w.toString() + "px" ;
}
var dezoom = function () {
var sol = document.getElementById("sun");
  var prop = window.getComputedStyle(sol);
  var w = parseFloat(prop.width);
  if (w > 250) {
      w = w - 20;
  }
  sol.style.width = w.toString() + "px" ;
}


//remplacer le soleil par l'eclipse


var changesoleil = function () {
  var img = document.getElementById("sun");
  this.src = "images/eclipse.jpg";
img.removeEventListener("click",changesoleil);
img.addEventListener("click",changeeclipse);
}

var changeeclipse = function() {
    this.src = "images/soleil.jpg";
    this.removeEventListener("click",changeeclipse);
    this.addEventListener("click",changesoleil);
}
