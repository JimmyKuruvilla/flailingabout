import html from './progress.component.html';
import css from './progress.component.scss';
import { $, constructComponent, removeClass, addClass } from 'core';

export class ProgressComponent extends HTMLElement {
  constructor() {
    super();
    this.el = constructComponent(this, html, css);
    this.container = $('#progress-component', this.el);
    this.progressBar = $('.progress-bar', this.el);
    this.spinner = $('.spinner', this.el);
    this.spinners = ['~', '/', '-', '%', '*', '\\'];
  }

  start(interval) {
    return new Promise(resolve => {
      let i = 0;
      let s = 0;
      const count = Math.floor(this.container.offsetWidth / 10) - 4;
      const spinnerInterval = setInterval(() => {
        if (s === this.spinners.length) {
          s = 0;
        }

        if (s % 2 === 0) {
          removeClass(this.spinner, 'orange');
          addClass(this.spinner, 'yellow');
        } else {
          removeClass(this.spinner, 'yellow');
          addClass(this.spinner, 'orange');
        }
        this.spinner.innerHTML = this.spinners[s];

        s += 1;
      }, 200);

      const barInterval = setInterval(() => {
        if (i === count) {
          clearInterval(barInterval);
          clearInterval(spinnerInterval);
          this.reset();
          resolve();
        } else {
          this.progressBar.innerHTML += '=';
        }

        i += 1;
      }, interval);
    });
  }

  reset() {
    this.progressBar.innerHTML = '';
  }
}

window.customElements.define('progress-component', ProgressComponent);
