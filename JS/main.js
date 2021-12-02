<<<<<<< HEAD
var inp_as = document.getElementById("a_size"),array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");
var inp_target = document.getElementById("s_target"),
  array_target = inp_target.value;
=======
var inp_as = document.getElementById("a_size"),
  array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

>>>>>>> 230101c93ffb651edba91a3d846172b6649ef540

var butts_algos = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var margin_size;
var search_target;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);
<<<<<<< HEAD
inp_target.addEventListener("input", update_target_value);
=======
>>>>>>> 230101c93ffb651edba91a3d846172b6649ef540

function generate_array() {
  cont.innerHTML = "";

  for (var i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      " margin:0% " +
      margin_size +
      "%; background-color:blue; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
  search_target = div_sizes[Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10];
}

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

<<<<<<< HEAD
function update_target_value() {
  array_target = inp_target.value;
}

=======
>>>>>>> 230101c93ffb651edba91a3d846172b6649ef540
window.onload = update_array_size();

for (var i = 0; i < butts_algos.length; i++) {
  butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
  for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].classList = [];
    butts_algos[i].classList.add("butt_locked");
<<<<<<< HEAD

=======
    butts_algos[i].classList.add(`b${i+1}`);
>>>>>>> 230101c93ffb651edba91a3d846172b6649ef540
    butts_algos[i].disabled = true;
    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
<<<<<<< HEAD
    inp_target.disabled = true;
=======
>>>>>>> 230101c93ffb651edba91a3d846172b6649ef540
  }
}

function runalgo() {
  disable_buttons();

  this.classList.add("butt_selected");
  switch (this.innerHTML) {
    case "Bubble":
      Bubble();
      break;
    case "Selection":
      Selection_sort();
      break;
    case "Insertion":
      Insertion();
      break;
    case "Merge":
      Merge();
      break;
    case "Quick":
      Quick();
      break;
<<<<<<< HEAD
    case "Heap":
      Heap();
      break;
    case "LS":
      Linear_search();
      break;
    case "BS":
      Binary_search();
      break;
  }
}
=======
    case "Linear":
      Linear_search();
      break;
    case "Binary":
      Binary_search();
      break;
  }
}
>>>>>>> 230101c93ffb651edba91a3d846172b6649ef540
