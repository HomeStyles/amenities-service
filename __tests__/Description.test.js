import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import Description from '../client/src/components/Description.jsx';
import Modal from 'react-modal';
import {UppercaseText, Header, RoundPhoto, Text, BlueLink, Box, Stats} from '../client/src/style.js';
import 'jest-styled-components';

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
  it('should render a modal when blue link is clicked', () => {
    const openModal1 = jest.fn();
    const wrapper = shallow(<BlueLink onClick={openModal1}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});