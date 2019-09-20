import React from 'react';
import {create} from 'react-test-renderer';
import Ibutton from '.';
import { ReactComponent as Loader } from '../../svgs/Roll.svg';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('<Ibutton />', () => {
  const wrapper = shallow(<Ibutton>Login</Ibutton>);
  it('should render button correctly when loading is false', () => {
    expect(wrapper.find(Loader)).toHaveLength(0);
  });
  it('should ensure button renders correctly when loading is true', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
