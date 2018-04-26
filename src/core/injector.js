/*
Future Features
- throw on circular dependencies, currently will probably crash the browser
- IE11 does not support Function.name
*/

export class Injector {
  constructor() {
    this.list = {};
  }

  get(classObjs) {
    if (Array.isArray(classObjs)) {
      return classObjs.map(_ => this._createOrGet(_));
    } else {
      return this._createOrGet(classObjs);
    }
  }

  _createOrGet(classObj) {
    if (classObj && classObj.name) {
      const token = classObj.name;
      if (this.list[token]) {
        return this.list[token];
      } else {
        let deps = [];
        if (classObj.__dependencies) {
          deps = classObj.__dependencies.map(_ => this._createOrGet(_));
        }
        this.list[token] = new classObj(...deps);
        return this.list[token];
      }
    } else {
      throw `Is this IE11 ? No .constructor.name on: ${classObj}`;
    }
  }
}

window.__injector = new Injector();
