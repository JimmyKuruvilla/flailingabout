import html from './sidebar.component.html';
import css from './sidebar.component.scss';

import { $$, Router, constructComponent, click } from 'core';

export class SidebarComponent extends HTMLElement {
  constructor() {
    super();
    const injector = window.__injector;
    this.el = constructComponent(this, html, css);
    const [router] = injector.get([Router]);

    $$('ul li', this.el).forEach(element => {
      element.addEventListener(click, () => {
        router.go(element.getAttribute('hash'));
      });
    });
  }
}

window.customElements.define('sidebar-component', SidebarComponent);
