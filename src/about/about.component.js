import html from './about.component.html';
import css from './about.component.scss';

import { Router, constructComponent } from 'core';

export class AboutComponent extends HTMLElement {
  constructor() {
    super();
    this.el = constructComponent(this, html, css);
  }
}

window.customElements.define('about-component', AboutComponent);
