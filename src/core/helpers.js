import { hidden, invisible, string, click } from './constants';
export const $ = ($selector, el) => el.querySelector($selector);
export const $$ = ($selector, el) => el.querySelectorAll($selector);

export const onClick = (el, fn) => {
  el.addEventListener(click, fn);
};

export const forEvery = (period, repeat) => {
  return {
    do: callback => {
      return new Promise(resolve => {
        let i = 0;
        const interval = setInterval(() => {
          if (i === repeat) {
            clearInterval(interval);
            resolve();
          } else {
            callback();
          }
          i += 1;
        }, period);
      });
    }
  };
};

export const exists = $selector => !!$($selector);

export const hasClass = (el, className) => el.classList.contains(className);

export const addClass = (el, className) => el.classList.add(className);

export const removeClass = (el, className) => el.classList.remove(className);

export const toggleClass = (el, className) => el.classList.toggle(className);

export const hide = el => el.classList.add(hidden);

export const show = el => el.classList.remove(hidden);

export const destroy = oldEl => {
  const newEl = oldEl.cloneNode(true);
  oldEl.parentNode.replaceChild(newEl, oldEl);
};

export const constructComponent = (component, html, css) => {
  const el = component.attachShadow({ mode: 'open' });
  el.appendChild(htmlStrToEl(html));
  el.appendChild(cssStrToEl(css));
  return el;
};

/* Returns only the first node because .appendChild requires 1 node */
export const htmlStrToEl = htmlStr => {
  const template = document.createElement('template');
  htmlStr = htmlStr.trim();
  template.innerHTML = htmlStr;
  return template.content.firstChild;
};

export const cssStrToEl = cssStr => {
  const style = document.createElement('style');
  cssStr = cssStr.trim();
  style.textContent = cssStr;
  return style;
};

// const getEl = (unknownSelector, el) =>
//   typeof unknownSelector === string ? $(unknownSelector, el) : unknownSelector;
