import React from 'react';
import Modal from 'react-modal';
import Truncate from 'react-truncate';
import {Header, BlueLink, GrayDivider, Text, PaddedText, List} from '../style.js';

Modal.setAppElement('body');

const Description = (props) => {
  return (  
    <div>
      <Text>
        {/* <Truncate 
          lines={!props.expanded && 7} 
          ellipsis={(<BlueLink onClick={props.toggleText()}>{props.more}</BlueLink>)}
          onTruncate={props.handleTruncate()}
        >
          {props.home.description}
        </Truncate>
        {!props.truncated && props.expanded && (
          <BlueLink onClick={props.toggleText()}>{props.less}</BlueLink>
        )} */}
      </Text>
      <BlueLink onClick={props.openModal1()}>
          Contact host
      </BlueLink>
      <GrayDivider></GrayDivider>
      <Modal isOpen={props.isOpen1}>
        <button onClick={props.closeModal1()}>close</button>
        <Header>Contact {props.host.firstName}</Header>
        <PaddedText>Once you send a message, {props.host.firstName} can invite you to book their home.</PaddedText>
        <PaddedText>Make sure you share the following:</PaddedText>
        <Text>
          <List>Tell {props.host.firstName} a little about yourself</List>
          <List>What brings you to {props.home.location}? Who’s joining you?</List>
          <List>What do you love about this listing? Mention it!</List>
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