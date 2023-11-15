const colors = [
  'green', 
  'blue', 
  'red',
  'yellow',
  'black',
  'pink',
  'white'
]
function addElemet(type, place, className, background){
  let element = document.createElement(type)
  element.className = className;
  element.style.backgroundColor = background 
  place.append(element)
  return element
}
function createLine(fromElement, toElement){
  let line = document.createElement('hr')
  let place = document.getElementsByClassName('graph')[0]
  line.style.height = coordinates[toElement][1] - coordinates[fromElement][1] -20
  line.style.transform = `translateY(${(coordinates[toElement][1] + coordinates[fromElement][1])/2 -90}px)`
  console.log((coordinates[toElement][1] - coordinates[fromElement][1])/2)
  place.append(line)
}
let coordinates = [];
let graph = document.getElementsByClassName('graph')[0]
for(let i = 0; i< colors.length; i++){
  let element = addElemet('div', graph, 'graphElement', colors[i])
  coordinates.push([element.getBoundingClientRect().x, element.getBoundingClientRect().y])
}
createLine(0, 1)
createLine(1, 2)
console.log(coordinates)