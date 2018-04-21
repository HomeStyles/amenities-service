import React from 'react';
import styled from 'styled-components';
import {Text, BlueLink} from '../style.js';

const Rules = (props) => {
  return (  
    <div>
      <Text>
        <h4>House Rules</h4>Not suitable for pets<br></br>No parties or events<br></br>Check-in is anytime after {props.rules.checkIn}<br></br>Check out by {props.rules.checkOut}
      </Text>
      <br></br>
      <BlueLink>
        Read all Rules ^
      </BlueLink>
    </div>
  );
};

export default Rules;