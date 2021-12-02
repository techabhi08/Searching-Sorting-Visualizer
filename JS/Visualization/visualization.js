var speed = 1000;

inp_aspeed.addEventListener("input", vis_speed);

function vis_speed() {
  var array_speed = inp_aspeed.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }

  delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed);
var c_delay = 0; 
function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}
function div_update_fast(cont, height, color, speed) {
  cont.style =
    " margin:0% " +
    margin_size +
    "%; width:" +
    (100 / array_size - 2 * margin_size) +
    "%; height:" +
    height +
    "%; background-color:" +
    color +
    ";";
}

function enable_buttons() {
  window.setTimeout(function () {
    for (var i = 0; i < butts_algos.length; i++) {
      butts_algos[i].classList = [];
<<<<<<< HEAD
      butts_algos[i].classList.add("butt_unselected");
=======
      // butts_algos[i].classList.add("butt_unselected");
      butts_algos[i].classList.add(`b${i+1}`);
>>>>>>> 230101c93ffb651edba91a3d846172b6649ef540

      butts_algos[i].disabled = false;
      inp_as.disabled = false;
      inp_gen.disabled = false;
      inp_aspeed.disabled = false;
<<<<<<< HEAD
      inp_target.disabled = false;
    }
  }, (c_delay += delay_time));
}
=======
    }
  }, (c_delay += delay_time));
}
>>>>>>> 230101c93ffb651edba91a3d846172b6649ef540
