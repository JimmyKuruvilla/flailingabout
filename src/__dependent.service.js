// import { OutletService } from './outlet.service';
import { Router } from './router';

export class DependentService {
  constructor(_outlet, _potato) {
    console.log(_outlet, _potato);
  }

  add(outlet) {
    this.outlets[outlet.name] = outlet.element;
  }

  get(name) {
    return this.outlets[name];
  }

  set(name, html) {
    this.get(name).innerHTML = html;
  }

  remove(outlet) {
    this.outlets[outlet.name] = undefined;
  }
}

class Potato {
  constructor() {
    console.log('potato created');
  }
}
// DependentService.__dependencies = [OutletService, Potato];

/*
interface Outlet{
  name: string;
  element: DOMElement;
}
*/
