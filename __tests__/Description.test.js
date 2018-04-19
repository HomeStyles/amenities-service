import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import Description from '../client/src/components/Description.jsx';
import Modal from 'react-modal';
import {UppercaseText, Header, RoundPhoto, Text, BlueLink, Box, Stats} from '../client/src/style.js';
import 'jest-styled-components';
import axios from 'axios';

describe('app rendered', () => { 
  it('Description should render without crashing', () => {
    expect(shallow(<Description />)
    );
  });
});

it('renders amenities header', () => {
  const wrapper = shallow(<Description />);
  const amenities = <h4>Amenities</h4>;
  expect(wrapper.contains(amenities)).toEqual(true);
});

test('links render in blue', () => {
  const link = renderer.create(<BlueLink />).toJSON();
  expect(link).toMatchSnapshot();
  expect(link).toHaveStyleRule('color', '#008489');
});

describe('<Modal /> component', () => {
  it('should change state when modal is closed', () => {
    const wrapper = shallow(<Description />);
    const modal1 = wrapper.find('button').at(0);
    const modal2 = wrapper.find('button').at(1);

    modal1.simulate('click');
    expect(wrapper.state('modal1IsOpen')).toEqual(false);

    modal2.simulate('click');
    expect(wrapper.state('modal1IsOpen')).toEqual(false);
  });
  it('should open modal when a blue link is clicked', () => {
    const openModal1 = jest.fn();
    const wrapper = shallow(<Description />);
    const link = shallow(<BlueLink onClick={openModal1}>Contact host</BlueLink>);
    expect(link).toMatchSnapshot();
    link.simulate('click');
    expect(openModal1).toHaveBeenCalled();
  });
});

test('makes an API call', () => {
  const spy = jest.spyOn(Description.prototype, 'createHome');
  const description = shallow(<Description />);
  description.instance().createHome();

  expect(spy).toHaveBeenCalled();

  spy.mockReset();
  spy.mockRestore();
});