'use strict';

// import Gallery from './gallery';
import UserCarousel from './gallery/index';
import {Random} from './gallery'

// let gallery = new Gallery({
//   elem: document.querySelector('.gallery')
// });

let carousel = new UserCarousel(USER_OPTIONS);
let rand = new Random();

document.body.appendChild(carousel.getElem());

console.log('123');