
// Add active class to the current button (highlight it)
var header = document.getElementById("w3-bar w3-black");
var btns = header.getElementsByClassName("w3-btn w3-black");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
