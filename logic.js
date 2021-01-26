var n = 1250;
var counter = 0;
var stoop = false;
var color = "rgb(105, 105, 105)";
var cellColor = "rgb(66, 233, 255)";
var time = 11 - parseInt(document.getElementById("speed").textContent);
time = time * 100;
// var vi = 0;

var slider = (document.getElementById("myRange").oninput = function () {
  document.getElementById("speed").textContent = this.value;
  time = 11 - parseInt(document.getElementById("speed").textContent);
  time = time * 100;
  if (stoop) {
  } else {
    // start();
  }
  //   console.log(time);
});

for (var i = 0; i < n; i++) {
  var divo = document.createElement("div");
  divo.className = "cell";
  divo.id = String(i);
  divo.dataset["state"] = "dead";
  divo.dataset["shoulBe"] = "";
  document.getElementsByClassName("middle")[0].appendChild(divo);
}

for (var i = 0; i < n; i++) {
  var cells = document.getElementsByClassName("cell");
  if (i >= 0 && i <= 49) {
    cells[i].className += " dis";
  }
  if (i >= 1200 && i <= n) {
    cells[i].className += " dis";
  }
  if (i % 50 == 0 || i % 50 == 49) {
    cells[i].className += " dis";
  }
}

window.onclick = (e) => {
  var cell = e.target;
  if (cell.className === "cell") {
    if (cell.dataset["state"] == "dead") {
      cell.style.backgroundColor = `${cellColor}`;
      cell.dataset["state"] = "alive";
      //   console.log(cell);
    } else {
      cell.dataset["state"] = "dead";
      cell.style.backgroundColor = `${color}`;
    }
  }
};

// real shit
var cells = document.getElementsByClassName("cell");

function start() {
  stoop = false;
  var liveTime = setInterval(function () {
    if (stoop) {
      clearInterval(liveTime);
    } else {
      for (var vi = 0; vi < 1249; vi++) {
        if (vi >= 0 && vi <= 49) {
        } else if (vi >= 1200 && vi <= n) {
        } else if (vi % 50 == 0 || vi % 50 == 49) {
        } else {
          if (cells[vi + 1].dataset["state"] == "alive") {
            counter++;
          }
          if (cells[vi - 1].dataset["state"] == "alive") {
            counter++;
          }
          if (cells[vi + 50].dataset["state"] == "alive") {
            counter++;
          }
          if (cells[vi - 50].dataset["state"] == "alive") {
            counter++;
          }
          if (cells[vi + 51].dataset["state"] == "alive") {
            counter++;
          }
          if (cells[vi - 49].dataset["state"] == "alive") {
            counter++;
          }
          if (cells[vi + 49].dataset["state"] == "alive") {
            counter++;
          }
          if (cells[vi - 51].dataset["state"] == "alive") {
            counter++;
          }
        }
        // console.log(counter);
        if (counter == 3) {
          cells[vi].dataset["shoulBe"] = "alive";
        }
        if (counter == 2) {
          cells[vi].dataset["shoulBe"] = cells[vi].dataset["state"];
        }
        if (counter == 0 || counter == 1) {
          cells[vi].dataset["shoulBe"] = "dead";
        }
        if (counter >= 4) {
          cells[vi].dataset["shoulBe"] = "dead";
        }

        counter = 0;
      }

      for (var vvi = 0; vvi < 1249; vvi++) {
        if (vvi >= 0 && vvi <= 49) {
        } else if (vvi >= 1200 && vvi <= n) {
        } else if (vvi % 50 == 0 || vvi % 50 == 49) {
        } else {
          if (cells[vvi].dataset["shoulBe"] == "alive") {
            cells[vvi].dataset["state"] = "alive";
          }
          if (cells[vvi].dataset["shoulBe"] == "dead") {
            cells[vvi].dataset["state"] = "dead";
          }
        }
      }

      for (var vvvi = 0; vvvi < 1249; vvvi++) {
        if (vvvi >= 0 && vvvi <= 49) {
        } else if (vvvi >= 1200 && vvvi <= n) {
        } else if (vvvi % 50 == 0 || vvvi % 50 == 49) {
        } else {
          if (cells[vvvi].dataset["state"] == "alive") {
            cells[vvvi].style.backgroundColor = `${cellColor}`;
          }
          if (cells[vvvi].dataset["state"] == "dead") {
            cells[vvvi].style.backgroundColor = `${color}`;
          }
        }
      }

      // for (var vvi = 0; vvi < 1249; vvi++) {
      //   if (vvi >= 0 && vvi <= 49) {
      //   } else if (vvi >= 1200 && vvi <= n) {
      //   } else if (vvi % 50 == 0 || vvi % 50 == 49) {
      //   } else {
      //     cells[vvi].dataset["shoulBe"] == "";
      //   }
      // }
    }
  }, time);
}

function stop() {
  stoop = true;
}

function clearo() {
  stop();
  for (var vvi = 0; vvi < 1249; vvi++) {
    cells[vvi].dataset["shoulBe"] = "";
    cells[vvi].dataset["state"] = "dead";
  }

  for (var vvvi = 0; vvvi < 1249; vvvi++) {
    if (vvvi >= 0 && vvvi <= 49) {
    } else if (vvvi >= 1200 && vvvi <= n) {
    } else if (vvvi % 50 == 0 || vvvi % 50 == 49) {
    } else {
      if (cells[vvvi].dataset["state"] == "dead") {
        cells[vvvi].style.backgroundColor = `${color}`;
      }
    }
  }
}
