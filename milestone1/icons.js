$(document).ready(function() {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
  const icons = [{
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
  ]
  // Semezioniamo il container icons
  const containerIcons = document.getElementById(`icons`);

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  print(icons, containerIcons)
});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

const print = (array, selector) => {
  array.forEach((element) => {
    const markup = `<div>
    <i class="fas fa-${element.name}"></i>
    <div class="title">${element.name.toUpperCase()}</div>
  </div>`;
    console.log(markup);
    selector.innerHTML += markup;
  });
}
