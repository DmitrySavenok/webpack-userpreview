'use strict';

import template from './template.jade';
import carousel from './carousel.jade';

import './gallery.css';




export class UserCarousel {

  constructor ( {initialUsers} ) {

    this._users = initialUsers;
    this._render();

  }

  _render() {

    let temp = document.createElement('div');

    temp.innerHTML = carousel({
      users: this._users
    });

    this._elem = temp.firstElementChild;
  }


  getElem() {
    return this._elem;
  }

}
export class Random {


}






// export default class Gallery {

//   constructor( {images} ) {
    
//     this._images = images;
//     this._render();
//     this._imageElem = this._elem.querySelector('img');
//     this._elem.onclick = event => {

//       if ( event.target.src ) {
//         let largeImage = document.querySelector('.largeImg');

//         let imageDiv = document.createElement('img');
//             imageDiv.src = event.target.src;

//         largeImage.innerHTML = '';
//         largeImage.appendChild(imageDiv);
//       }

//     }

//   };

//   _render() {
//     let temp = document.createElement('div');
//     temp.innerHTML = template({
//       images: this._images
//     });
//     this._elem = temp.firstElementChild;
//   }

//   getElem() {
//     return this._elem;
//   }
// }