var btn = document.getElementById("view-btn");
var btn_mob = document.getElementById("view-btn-mob");
var modal = document.getElementById('myModal');
var img = document.getElementById('arch');

btn.onclick = function() {
    modal.style.display = "block";
  }
  btn_mob.onclick = function() {
    modal.style.display = "block";
  }
  modal.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  img.onclick = function(event) {
    if (event.target == img) {
      modal.style.display = "none";
    }
  }