// modal popups - ecoInfo

var modal = document.getElementById("ecoInfo");
var btn = document.getElementById("btn_ecoInfo");
var span = document.getElementsByClassName("close1")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// modal popups - ecoInfo

var modal2 = document.getElementById("how_to_main");
var btn2 = document.getElementById("how_to");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}