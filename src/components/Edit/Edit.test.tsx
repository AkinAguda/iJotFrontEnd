import React from 'react';
import Edit from '.';
import ReactDOM from 'react-dom';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('<Edit />', () => {
  it('should work', () => {});
});
