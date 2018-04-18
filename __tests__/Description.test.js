import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import Description from '../client/src/components/Description.jsx';

describe('app rendered', () => { 
  it('Description should render without crashing', () => {
    expect(shallow(<Description />)
    );
  });
});

it('renders amenities module', () => {
  const wrapper = shallow(<Description />);
  const amenities = <h4>Amenities</h4>;
  expect(wrapper.contains(amenities)).toEqual(true);
});