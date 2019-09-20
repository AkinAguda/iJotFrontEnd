import React from 'react';
import Category from '.';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

let container: any;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});
describe('<Category />', () => {
    it('Should Render Correctly', () => {
    ReactDOM.render(<Category type="personal" />, container);
    const div = container.getElementsByTagName('div')[2];
    expect(div.textContent).toBe('personal');
    });
});
