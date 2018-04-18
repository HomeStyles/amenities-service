import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import Description from '../client/src/components/Description.jsx';
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