import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {Header, BlueLink, GrayDivider, Text} from '../style.js';

Modal.setAppElement('body');

const Description = (props) => {
  return (  
    <div>
      <Text>
        {props.home.description}<br></br>
      </Text>
      <br></br>
      <BlueLink>Read more about the space ^</BlueLink>
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

export default Description;