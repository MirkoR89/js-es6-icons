$(document).ready(function() {
  // Qui le icone che abbiamo definito nella milestone 1
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

  // definiamo dei colori per le icone (blue, orange, purple)
  //aggiungiamo dei colori usando una funzione
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

  //inseriamo le icone colorate nel container
  print(newArray, containerIcons)

});

/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1
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

//Alternative selection HTML
/*const markup = `<div>
  <i class="fas fa-${element.name}"></i>
  <div class="title">${element.name.toUpperCase()}</div>
</div>`;
  console.log(markup);
  selector.innerHTML += markup;*/

//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.

//Functions



/* Exemple */

/*test = {
  name: `cat`,
  prefix: `fas`,
  type: `fa`,
  family: `animals`
};

const {name, prefix type} = test;
console.log(test);*/


/*const icons = [{
    name: `cat`,
    prefix: `fas`,
    type: `fa`,
    family: `animals`
  },
  {
    name: `crow`,
    prefix: `fas`,
    type: `fa`,
    family: `animals`
  },
  {
    name: `horse`,
    prefix: `fas`,
    type: `fa`,
    family: `animals`
  },
  {
    name: `hippo`,
    prefix: `fas`,
    type: `fa`,
    family: `animals`
  },
  {
    name: `fish`,
    prefix: `fas`,
    type: `fa`,
    family: `animals`
  },
  {
    name: `dog`,
    prefix: `fas`,
    type: `fa`,
    family: `animals`
  },
  {
    name: `dragon`,
    prefix: `fas`,
    type: `fa`,
    family: `animals`
  },
  {
    name: `dove`,
    prefix: `fas`,
    type: `fa`,
    family: `animals`
  },
  {
    name: `apple-alt`,
    prefix: `fas`,
    type: `fa`,
    family: `fruits`
  },
  {
    name: `carrot`,
    prefix: `fas`,
    type: `fa`,
    family: `fruits`
  },
  {
    name: `lemon`,
    prefix: `fas`,
    type: `fa`,
    family: `fruits`
  },
  {
    name: `pepper-hot`,
    prefix: `fas`,
    type: `fa`,
    family: `fruits`
  },
  {
    name: `user-graduate`,
    prefix: `fas`,
    type: `fa`,
    family: `users`
  },
  {
    name: `snowboarding`,
    prefix: `fas`,
    type: `fa`,
    family: `users`
  },
  {
    name: `user-astronaut`,
    prefix: `fas`,
    type: `fa`,
    family: `users`
  },
  {
    name: `user-ninja`,
    prefix: `fas`,
    type: `fa`,
    family: `users`
  }
]*/
