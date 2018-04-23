import React from 'react';
import Modal from 'react-modal';
import Truncate from 'react-truncate';
import {Header, BlueLink, GrayDivider, Text} from '../style.js';

Modal.setAppElement('body');

const Description = (props) => {
  return (  
    <div>
      <Text>
        <Truncate 
          lines={!props.expanded && 7} 
          ellipsis={(<BlueLink onClick={props.toggleText()}><br></br>{props.more}</BlueLink>)}
          onTruncate={props.handleTruncate()}
        >
          {props.home.description}<br></br>
        </Truncate>
        {!props.truncated && props.expanded && (
          <BlueLink onClick={props.toggleText()}>{props.less}</BlueLink>
        )}
      </Text>
      <br></br>
      <br></br>
      <BlueLink onClick={props.openModal1()}>
          Contact host
      </BlueLink>
      <GrayDivider></GrayDivider>
      <Modal isOpen={props.isOpen1}>
        <button onClick={props.closeModal1()}>close</button>
        <Header><h2>Contact {props.host.firstName}</h2></Header>
        <Text>
          Once you send a message, {props.host.firstName} can invite you to book their home.<br></br><br></br>
            Make sure you share the following:<br></br><br></br>
          <li>Tell {props.host.firstName} a little about yourself</li>
          <li>What brings you to {props.home.location}? Who’s joining you?</li>
          <li>What do you love about this listing? Mention it!</li>
        </Text>
      </Modal>
    </div>
  );
};

Description.defaultProps = {
  lines: 7,
  more: 'Read more about the space ^',
  less: 'Hide ^'
};

export default Description;