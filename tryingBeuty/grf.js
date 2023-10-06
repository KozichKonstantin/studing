function buidGraf(){
    let place = document.getElementsByClassName('leftGr')[0].childNodes[1];
    console.log(place);
    create_canv(place);
}
function create_canv(place){
    
    let canvas = document.createElement('canvas');
    canvas.className = 'canvasBlock';    
    canvas.style.aspectRatio= '1.25/1';
    canvas.style.height = '360px'
    place.append(canvas);
    create_graph(canvas);
}

function create_graph(canvas){
  let colorLines = 'rgb(251, 148, 148)';
  let colorNums = 'rgb(0,0,0)';
    new Chart(canvas, {
        type: 'line',
        data: {
          labels: objMass.map((obj)=>obj.date),
          
          datasets: [{
            label: '' ,
            data: objMass.map((obj)=>obj.weight),
            borderWidth: 1,
            tension: 0.5,
            backgroundColor : colorLines,
            borderColor: colorLines,
          }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
          scales: {
            y: {
              ticks: {
                color: colorNums,
              },
              beginAtZero: true,
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
          }
        }
      });
}
function delCanvas (){
    try{
        document.getElementsByClassName('canvasBlock')[0].remove();
    }
    catch(error){
        // console.error('error:228 Polzovatel dolboeb')
    }
}