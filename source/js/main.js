const prev = document.querySelector('.btn-prev'),
  next = document.querySelector('.btn-next'),
  slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
}
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const btn = document.querySelectorAll('.services__menu');
let i;

for (i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    this.classList.toggle('services__menu--active');
    this.nextElementSibling.classList.toggle('services__subtitle--active');
    this.prevElementSibling.classList.toggle('services__title--active');
  }
}

const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;
      let newValue;
      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
      }
      inp.value = newValue;
    })
  })
}
counter();
