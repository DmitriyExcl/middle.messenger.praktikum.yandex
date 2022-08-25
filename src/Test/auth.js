/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const tsNode = require('ts-node');
const { JSDOM } = require('jsdom');

global.document = new JSDOM('<div id="app"></div>', {
  url: 'http://localhost:3000',
});
global.window = global.document.window;

global.window = {
  history: {
    pushState() {},
  },
};

tsNode.register({
  files: true,
  transpileOnly: true,
  project: './tsconfig.json',
});
