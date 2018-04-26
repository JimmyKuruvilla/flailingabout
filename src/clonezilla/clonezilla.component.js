import html from './clonezilla.component.html';
import css from './clonezilla.component.scss';
import('./+progress-component/progress.component');
import {
  $,
  $$,
  onClick,
  click,
  toggleClass,
  hidden,
  removeClass,
  addClass,
  forEvery,
  show,
  hide,
  constructComponent
} from 'core';

export class ClonezillaComponent extends HTMLElement {
  constructor() {
    super();

    this.el = constructComponent(this, html, css);
    this.detailWindow = $('.detail.window', this.el);
    const whyMenuItem = $('.why.menu-item', this.el);
    const whyMenuDetail = $('.why.menu-detail', this.el);

    onClick(whyMenuItem, () => {
      this._setup();
      show(whyMenuDetail);
    });

    const savediskMenuItem = $('.savedisk.menu-item', this.el);
    const savediskMenuDetail = $('.savedisk.menu-detail', this.el);

    onClick(savediskMenuItem, () => {
      this._setup();
      show(savediskMenuDetail);
    });

    const progressComponent = $('progress-component', savediskMenuDetail);
    onClick($('.ok', savediskMenuDetail), () => {
      show(progressComponent);
      progressComponent.start(30).then(() => {
        hide(progressComponent);
        hide($('.buttons', savediskMenuDetail));
        forEvery(300, 8)
          .do(() => {
            toggleClass($('.backup-complete', savediskMenuDetail), hidden);
          })
          .then(() => {
            this._tearDown();
          });
      });
    });

    onClick($('.cancel', savediskMenuDetail), () => {
      this._tearDown();
    });

    onClick($('.restoredisk.menu-item', this.el), () => {
      this._setup();
    });

    onClick($('.recoverisozip.menu-item', this.el), () => {
      this._setup();
    });

    onClick($('.exit.menu-item', this.el), () => {
      this._setup();
    });
  }

  _setup() {
    show(this.detailWindow);
    $$('.menu-detail', this.el).forEach(detail => hide(detail));
  }

  _tearDown() {
    show($('.buttons', this.el));
    hide(this.detailWindow);
  }
}

window.customElements.define('clonezilla-component', ClonezillaComponent);
