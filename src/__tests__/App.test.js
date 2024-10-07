import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import App from '../components/App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render a Quote', () => {
  act(() => {
    render(<App />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"calContainer\\">
      <h3>Let's do some math!</h3>
      <div class=\\"calculator\\">
        <div class=\\"display\\">0</div>
        <div class=\\"row\\"><button type=\\"button\\" class=\\"btn\\">AC</button><button type=\\"button\\" class=\\"btn\\">+/-</button><button type=\\"button\\" class=\\"btn\\">%</button><button type=\\"button\\" class=\\"btnOperators\\">÷</button></div>
        <div class=\\"row\\"><button type=\\"button\\" class=\\"btn\\">7</button><button type=\\"button\\" class=\\"btn\\">8</button><button type=\\"button\\" class=\\"btn\\">9</button><button type=\\"button\\" class=\\"btnOperators\\">X</button></div>
        <div class=\\"row\\"><button type=\\"button\\" class=\\"btn\\">4</button><button type=\\"button\\" class=\\"btn\\">5</button><button type=\\"button\\" class=\\"btn\\">6</button><button type=\\"button\\" class=\\"btnOperators\\">-</button></div>
        <div class=\\"row\\"><button type=\\"button\\" class=\\"btn\\">1</button><button type=\\"button\\" class=\\"btn\\">2</button><button type=\\"button\\" class=\\"btn\\">3</button><button type=\\"button\\" class=\\"btnOperators\\">+</button></div>
        <div class=\\"row\\"><button type=\\"button\\" class=\\"btnZero\\">0</button><button type=\\"button\\" class=\\"btn\\">.</button><button type=\\"button\\" class=\\"btnOperators\\">=</button></div>
      </div>
    </div>"
  `);
});
