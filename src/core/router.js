// Future Features
// - wild card support
// - routing context, so routes can match from one point onward, set a parent on route success
// - must specify a fallback route or 404 route, ideally both.

export class Router {
  constructor() {
    document.addEventListener('DOMContentLoaded', event => {
      this._matchRoutes();
    });
    this.hash = location.hash.replace('#', '');
    this.routes = [];
    this.oldURL = undefined;
    this.newURL = undefined;

    const locationHashChanged = e => {
      this.hash = location.hash.replace('#', '');
      this.oldURL = e.oldURL;
      this.newURL = e.newURL;
      this._matchRoutes();
    };

    window.onhashchange = locationHashChanged;
  }

  addRoutes(routes = []) {
    this.routes = this.routes.concat(routes);
  }

  go(hash) {
    location.hash = `#${hash}`;
  }

  _matchRoutes() {
    const matchedRoute = this.routes.find(route => route.hash === this.hash);
    if (matchedRoute) {
      matchedRoute.action();
    } else {
      const fallBackRoute = this.routes.find(route => route.hash === '');
      if (fallBackRoute) {
        fallBackRoute.action();
      } else {
        const notFoundRoute = this.routes.find(route => route.hash === '404');
        notFoundRoute.action();
      }
    }
  }
}

/*
interface Route {
  hash: string;
  action: Function
}
*/
