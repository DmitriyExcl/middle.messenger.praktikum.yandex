import renderDOM from './renderDOM';

type PlainObject<T = unknown> = {
    [k in string]: T;
};
function isEqual(lhs: PlainObject, rhs: PlainObject) {
  return lhs === rhs;
}

class Route {
  constructor(pathname : string, view, props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      renderDOM(this._block);
      return;
    }
    this._block.show();
  }
}

export class BrowserRouter {
  constructor() {
    if (BrowserRouter.__instance) {
      return BrowserRouter.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;

    BrowserRouter.__instance = this;
  }

  use(pathname: string, block, props) {
    const route = new Route(pathname, block, props);

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    route.render(route, pathname);
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname) {
    const route = this.routes.find((route) => route.match(pathname));
    return route || this.routes.find((route) => route.match('*'));
  }
}
