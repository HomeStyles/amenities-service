import React from 'react';
import Truncate from 'react-truncate';
import {Text, BlueLink, GrayDivider, BoldText, List} from '../style.js';

const Rules = (props) => {
  return (  
    <div>
      <BoldText>House Rules</BoldText>
      <Text>
        {/* <Truncate 
          lines={!props.expanded && 2} 
          ellipsis={(<BlueLink onClick={props.toggleText()}>{props.more}</BlueLink>)}
          onTruncate={props.handleTruncate()}
        >
          {/* <List>Not suitable for pets</List><br></br>
          <List>No parties or events</List><br></br>
          <List>Check-in is anytime after {props.rules.checkIn}</List><br></br>
          <List>Check out by {props.rules.checkOut}</List><br></br> */}
        {/* </Truncate>
        {!props.truncated && props.expanded && (
          <BlueLink onClick={props.toggleText()}>{props.less}</BlueLink>
        )} */}
      </Text>
      <GrayDivider></GrayDivider>
    </div>
  );
};

Rules.defaultProps = {
  lines: 2,
  more: 'Read all rules ^',
  less: 'Hide ^'
};

export default Rules;