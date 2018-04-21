import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {Header, GrayDivider, Text, BlueLink} from '../style.js';

Modal.setAppElement('body');

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(props) {
    return (  
      <div>
        <Text>
          {props.home.description}<br></br>
        </Text>
        <br></br>
        <BlueLink>Read more about the space ^</BlueLink>
        <br></br>
        <br></br>
        <BlueLink onClick={this.openModal}>
          Contact host
        </BlueLink>
        <GrayDivider></GrayDivider>
        <Modal isOpen={this.state.modalIsOpen}>
          <button onClick={this.closeModal}>close</button>
          <Header><h2>Contact {this.state.host.firstName}</h2></Header>
          <Text>
          Once you send a message, {this.state.host.firstName} can invite you to book their home.<br></br><br></br>
            Make sure you share the following:<br></br><br></br>
            <li>Tell {this.state.host.firstName} a little about yourself</li>
            <li>What brings you to {this.state.home.location}? Who’s joining you?</li>
            <li>What do you love about this listing? Mention it!</li>
          </Text>
        </Modal>
      </div>
    );  
  }
}

export default Description;