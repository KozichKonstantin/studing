function buidGraf() {
  let place = document.getElementsByClassName("leftGr")[0].childNodes[1];
  create_canv(place);
}
function create_canv(place) {
  let canvas = document.createElement("canvas");
  canvas.className = "canvasBlock";
  canvas.style.aspectRatio = "1.25/1";
  canvas.style.height = "360px";
  place.append(canvas);
  create_graph(canvas);
}

function create_graph(canvas) {
  let colorLines = "rgb(251, 148, 148)";
  let colorFill = "rgb(251, 148, 148, 0.3)";
  let colorNums = "rgb(0,0,0)";
  new Chart(canvas, {
    type: "line",
    data: {
      labels: allObjMass.map((obj) => obj.date),

      datasets: [
        {
          label: "",
          data: allObjMass.map((obj) => obj.weight),
          borderWidth: 1,
          tension: 0.5,
          fill: true,
          backgroundColor: colorFill,
          borderColor: colorLines,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: colorNums,
          },
          grid: {
            display: false,
          },
        },
        x: {
          ticks: {
            color: colorNums,
          },
          grid: {
            display: false,
          },
        },
      },
      anination: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
  });
}
function delCanvas() {
  try {
    document.getElementsByClassName("canvasBlock")[0].remove();
  } catch (error) {
    // console.error('error:228 Polzovatel dolboeb')
  }
}
