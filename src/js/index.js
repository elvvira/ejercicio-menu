// El styles lo importamos aquí, ya se carga después al compilar todo
// import catIMage from '../assets/images/cat.jpeg'
// const img = document.createElement('img');
// img.src = catImage;
// document.body.append(img);
// import { sayHello } from './demo.js';
// sayHello();
import '../scss/styles.scss';

const menu = document.getElementById('menu');
const info = document.getElementById('info');
const image = [...document.querySelectorAll('.menu__image')];
const texts = document.querySelectorAll('.info__text');
const rootStyles = document.documentElement.style;

const moveBall = distance => {
  rootStyles.setProperty('--ball-position', distance + 'px');
};

menu.addEventListener('click', e => {
  if (e.target === menu) {
    return;
  }
  moveBall(e.target.offsetLeft);

  image.forEach(icon => {
    icon.classList.remove('icon-selected');
  });
  e.target.classList.add('icon-selected');

  texts.forEach(text => {
    text.classList.remove('info__text--show');
  });

  texts[image.indexOf(e.target)].classList.add('info__text--show');
});
