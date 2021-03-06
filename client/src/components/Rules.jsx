import React from 'react';
import {Text, BlueLink, GrayDivider, BoldText, List, HiddenText} from '../style.js';

const hiddenStyle = {
  height: '2em',
  paddingTop: '5px',
  overflow: 'hidden'
};

const fullStyle = {
  paddingTop: '5px',
  height: '6em'
};

const spacing = {
  lineHeight: '2px',
};

const Rules = (props) => {
  let rulesStyle = props.hide ? hiddenStyle : fullStyle;
  let linkText = props.hide ? props.more : props.less;

  return (  
    <div>
      <BoldText>House Rules</BoldText>
      <HiddenText style={rulesStyle}>
        <List style={spacing}>Not suitable for pets</List><br></br>
        <List style={spacing}>No parties or events</List><br></br>
        <List style={spacing}>Check-in is anytime after {props.rules.checkIn}</List><br></br>
        <List style={spacing}>Check out by {props.rules.checkOut}</List><br></br>
      </HiddenText>
      <BlueLink onClick={props.showRules()}>{linkText}</BlueLink>
      <GrayDivider></GrayDivider>
    </div>
  );
};

Rules.defaultProps = {
  more: 'Read all rules ^',
  less: 'Hide ^'
};

export default Rules;