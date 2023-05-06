const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

let actualYear = new Date().getFullYear();

function render() {
  let output = '';

  const getMonth = new Date().getMonth();
  const actualMonth = months[getMonth];

  for (let month of months) {
    const active = actualMonth == month ? 'active' : '';
    output += `<div class="${active}">${month}</div>`;
  }

  return output;
}

function addYear() {
  app.querySelector('header span').innerHTML = ++actualYear;
}

function subYear() {
  app.querySelector('header span').innerHTML = --actualYear;
}
app.querySelector('main').innerHTML = render();
app.querySelector('header span').innerHTML = actualYear;
