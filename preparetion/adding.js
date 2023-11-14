function appendElement(
    type,
    place,
    elemClass = "",
    name = "",
    value = "",
    ret = 0
  ) {
    let element = document.createElement(type);
    let appendPlace = document.getElementsByClassName(place)[0];
    element.className = elemClass;
    if (name != "") {
      element.setAttribute("name", name);
    }
    if (value != "") {
      element.value = value;
    }
    if ((ret == 0)) {
      appendPlace.append(element);
    }
    return element;
  }
appendElement('div', 'graph', 'elem')