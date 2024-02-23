let sliders = document.querySelectorAll(".styled-slider");
let displayElement = document.querySelector('.range-input__value');
const valueIndicator = document.getElementById('valueIndicator');
displayElement.innerHTML =   sliders.value + "%"
sliders.forEach((slider) => {
  let displayElement = slider.parentElement.querySelector('.range-input__value');
  displayElement.innerHTML =   slider.value + "%"

  slider.addEventListener('input', () => {
    let slide1 = parseFloat( slider.value );

    displayElement.classList.toggle('active');
    displayElement.innerHTML =   slide1 + " % ";
    
  })
})

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}
