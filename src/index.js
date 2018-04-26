import 'normalize.css/normalize.css?global';

import 'styles/main.scss?global';
import Injector from 'core';
import { AppComponent } from './app.component';
window.customElements.define('app-component', AppComponent);
