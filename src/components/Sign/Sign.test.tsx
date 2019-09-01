import React from 'react';
import Sign from '.';
import reducer from '../../reducer';
import Ibutton from '../elements/Ibutton';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { SignType } from '../../interfaces';
configure({ adapter: new Adapter() });

describe('<Sign />', () => {
  const store = createStore(reducer);
  it('should render correctly', () => {
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    const wrapper = shallow(
      <Provider store={store}>
        <Sign />
      </Provider>,
    );
  });
});
