import React from 'react';
import Truncate from 'react-truncate';
import {Text, BlueLink, GrayDivider} from '../style.js';

const Rules = (props) => {
  return (  
    <div>
      <Text>
        <h4>House Rules</h4>
        <Truncate 
          lines={!props.expanded && 2} 
          ellipsis={(<BlueLink onClick={props.toggleText()}><br></br>{props.more}</BlueLink>)}
          onTruncate={props.handleTruncate()}
        >
          Not suitable for pets<br></br>No parties or events<br></br>Check-in is anytime after {props.rules.checkIn}<br></br>Check out by {props.rules.checkOut}
          <br></br>
        </Truncate>
        {!props.truncated && props.expanded && (
          <BlueLink onClick={props.toggleText()}>{props.less}</BlueLink>
        )}
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