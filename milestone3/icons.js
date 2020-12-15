$(document).ready(function() {
  // icone come da milestone 1
  class Icon {
    constructor(name, prefix, type, family) {
      this.name = name,
        this.prefix = prefix,
        this.type = type,
        this.family = family
    }
  }

  const icons = [
    new Icon(`cat`, `fas`, `fa`, `animals`),
    new Icon(`crow`, `fas`, `fa`, `animals`),
    new Icon(`horse`, `fas`, `fa`, `animals`),
    new Icon(`hippo`, `fas`, `fa`, `animals`),
    new Icon(`crow`, `fas`, `fa`, `animals`),
    new Icon(`fish`, `fas`, `fa`, `animals`),
    new Icon(`dog`, `fas`, `fa`, `animals`),
    new Icon(`dragon`, `fas`, `fa`, `animals`),
    new Icon(`dove`, `fas`, `fa`, `animals`),
    new Icon(`apple-alt`, `fas`, `fa`, `fruits`),
    new Icon(`carrot`, `fas`, `fa`, `fruits`),
    new Icon(`lemon`, `fas`, `fa`, `fruits`),
    new Icon(`pepper-hot`, `fas`, `fa`, `fruits`),
    new Icon(`user-graduate`, `fas`, `fa`, `users`),
    new Icon(`snowboarding`, `fas`, `fa`, `users`),
    new Icon(`user-astronaut`, `fas`, `fa`, `users`),
    new Icon(`user-ninja`, `fas`, `fa`, `users`)
  ]

  const containerIcons = document.querySelector(`.icons`);

  // colori come da milestone 2


  //aggiungiamo dei colori come da milestone 2
  const newArray = icons.map(element => {
    if (element.family === `animals`) {
      var color = `blue`;
    } else if (element.family === `fruits`) {
      var color = `orange`;
    } else {
      var color = `purple`;
    }
    let newobj = {
      ...element,
      color: color
    };
    return newobj
  });

  //inseriamo le icone nel container come da milestone 2
  print(newArray, containerIcons)

  //estrapoliamo i tipi di icone
  const select = $(`#type`);
  //aggiungiamo i tipi alla select
  select.append('<option value="all">All</option>');
  select.append('<option value="animals">Animals</option>');
  select.append('<option value="fruits">Fruits</option>');
  select.append('<option value="users">Users</option>');

  const elSelect = document.getElementById('type');

  //al change mostriamo solo le icone filtrate
  elSelect.addEventListener(`change`, event => {
    const choose = $(`#type option:selected`).val();
    const arrayFilter = newArray.filter(icons => icons.family == choose);
    containerIcons.innerHTML = " ";

    print(arrayFilter, containerIcons);
  })


  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo



});
/* ---- FUNCTIONS ----*/
const print = (array, selector) => {
  array.forEach(element => {
    const {
      name,
      prefix,
      type,
      color
    } = element; // Destructuring
    selector.innerHTML += `<div>
    <i class="${prefix} ${type}-${name}" style="color:${color}"></i>
    <div class="title">${name.toUpperCase()}</div>
  </div>`;
  });
}
