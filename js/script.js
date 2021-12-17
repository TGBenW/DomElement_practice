'use strict';

let axisX = 0;
let axisY = 0;

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    if (this.selector[0] === '.') {
      const div = document.createElement('div');

      div.className = this.selector.slice(1);
      div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
      div.textContent = 'Text in div with a class!';
      document.body.append(div);
    } else if (this.selector[0] === '#') {
      const p = document.createElement('p');

      p.id = this.selector.slice(1);
      p.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
      p.textContent = 'Text in paragraph with an ID!';
      document.body.append(p);
    }
  };
};

let squareElement = new DomElement('.square', '100px', '100px', '#F7CAC9', '16px');

document.addEventListener('DOMContentLoaded', () => {
  squareElement.createElement();
});

const move = (arr) => {
  const square = document.querySelector('.square');
  square.style.position = 'absolute';
  if (arr === 'ArrowRight' && window.innerWidth - 100 - axisX > 10) {
    axisX += 10;
    square.style.left = `${axisX}px`;
  } else if (arr === 'ArrowLeft' && axisX > 0) {
    axisX -= 10;
    square.style.left = `${axisX}px`;
  } else if (arr === 'ArrowUp' && axisY > 0) {
    axisY -= 10;
    square.style.top = `${axisY}px`;
  } else if (arr === 'ArrowDown' && window.innerHeight - 100 - axisY > 10) {
    axisY += 10;
    square.style.top = `${axisY}px`;
  }
};

document.addEventListener('keydown', (event) => {
  move(event.key);
});
