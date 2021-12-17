'use strict';

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

const newElement = new DomElement('.block', '120px', '160px', 'red', '24px');
const newElement2 = new DomElement('#best', '240px', '100px', 'green', '16px');

document.addEventListener('DOMContentLoaded', () => {
  newElement.createElement();
  newElement2.createElement();
});
