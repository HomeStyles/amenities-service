import React from 'react';
import Modal from 'react-modal';
import {LargeHeader, BlueLink, GrayDivider, Text, List, HiddenText, LargeText} from '../style.js';

Modal.setAppElement('body');

const textStyle = {
  height: '7em',
  overflow: 'hidden'
};

const fullStyle = {
  height: '14em'
};

const roundButton = {
  borderRadius: '50%'
};

const center = {
  textAlign: 'center', 
  marginTop: '2.5px'
};

const Description = (props) => {
  let paragraphStyle = props.hide ? textStyle : fullStyle;
  let linkText = props.hide ? props.more : props.less;

  return (  
    <div>
      <HiddenText style={paragraphStyle}>{props.home.description}</HiddenText>
      <BlueLink onClick={props.toggleText()}>{linkText}</BlueLink>
      <BlueLink onClick={props.openModal1()}>
          Contact host
      </BlueLink>
      <GrayDivider></GrayDivider>
      <Modal isOpen={props.isOpen1}>
        <button onClick={props.closeModal1()} style={roundButton}><Text style={center}>X</Text></button>
        <LargeHeader>Contact {props.host.firstName}</LargeHeader>
        <LargeText>Once you send a message, {props.host.firstName} can invite you to book their home.</LargeText>
        <LargeText>Make sure you share the following:</LargeText>
        <LargeText>
          <List>Tell {props.host.firstName} a little about yourself</List>
          <List>What brings you to {props.home.location}? Who’s joining you?</List>
          <List>What do you love about this listing? Mention it!</List>
        </LargeText>
      </Modal>
    </div>
  );
};

Description.defaultProps = {
  more: 'Read more about the space ^',
  less: 'Hide ^'
};

export default Description;