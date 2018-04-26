import css from './app.component.scss';
import html from './app.component.html';
import { SidebarComponent } from './sidebar/sidebar.component';

import { $, $$, Router, constructComponent } from 'core';
const $feature = '#feature';
export class AppComponent extends HTMLElement {
  constructor() {
    super();
    this.el = constructComponent(this, html, css);
    const injector = window.__injector;
    const [router] = injector.get([Router]);

    router.addRoutes([
      {
        hash: '',
        action: () => {
          router.go('about');
        }
      },
      {
        hash: '404',
        action: () => {
          import(`./404.html`).then(exports => {
            $($feature, this.el).innerHTML = exports.default;
          });
        }
      },
      {
        hash: 'about',
        action: () => {
          import('./about/about.component').then(exports => {
            $($feature, this.el).innerHTML =
              '<about-component></about-component>';
          });
        }
      },
      {
        hash: 'clonezilla',
        action: () => {
          import('./clonezilla/clonezilla.component').then(exports => {
            $($feature, this.el).innerHTML =
              '<clonezilla-component></clonezilla-component>';
          });
        }
      },
      {
        hash: 'speedreader',
        action: () => {
          console.log('speedreader goes here');
        }
      }
    ]);

    if (true && module.hot) {
      module.hot.accept('./clonezilla/clonezilla.component', () => {
        import('./clonezilla/clonezilla.component').then(exports => {
          router.go('clonezilla');
        });
      });
    }
  }
}
