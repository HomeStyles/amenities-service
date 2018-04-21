import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal';
import {UppercaseText, Header, RoundPhoto, Text, BlueLink, Box, Stats, GrayDivider} from '../style.js';
import Rules from './Rules.jsx';
import Sleeping from './Sleeping.jsx';
import Amenities from './Amenities.jsx';
import Heading from './Heading.jsx';
import Description from './Description.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      homeId: 1,
      home: {},
      amenities: {},
      rooms: {},
      host: {},
      modalIsOpen: false
    };
  }

  fetchHomes(id) {
    axios.get(`http://127.0.0.1:3002/amenities/${id}`)
      .then((response) => {
        this.setState({
          home: response.data,
          amenities: response.data.amenities,
          rooms: response.data.rooms,
          host: response.data.host,
        });
        console.log('state set correctly', this.state.host);
      })
      .catch((err) => {
        throw err;
      });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    let app = this;
    this.fetchHomes(app.state.homeId);
  }

  render() {
    return (
      <div>
        <Heading home={this.state.home} host={this.state.host} rooms={this.state.rooms} />
        <Text>
          {this.state.home.description}<br></br>
        </Text>
        <br></br>
        <BlueLink>Read more about the space ^</BlueLink>
        <br></br>
        <br></br>
        <BlueLink onClick={this.openModal1}>
          Contact host
        </BlueLink>
        <GrayDivider></GrayDivider>
        <Modal isOpen={this.state.modal1IsOpen}>
          <button onClick={this.closeModal1}>close</button>
          <Header><h2>Contact {this.state.host.firstName}</h2></Header>
          <Text>
          Once you send a message, {this.state.host.firstName} can invite you to book their home.<br></br><br></br>
            Make sure you share the following:<br></br><br></br>
            <li>Tell {this.state.host.firstName} a little about yourself</li>
            <li>What brings you to {this.state.home.location}? Who’s joining you?</li>
            <li>What do you love about this listing? Mention it!</li>
          </Text>
        </Modal>
        <Amenities 
          amenities={this.state.amenities} 
          isOpen={this.state.modalIsOpen}
          openModal={() => this.openModal.bind(this)} 
          closeModal={() => this.closeModal.bind(this)} 
        />
        <Sleeping />
        <GrayDivider></GrayDivider>
        <Rules rules={this.state.home} />
        <GrayDivider></GrayDivider>
      </div>
    );
  }
}

export default App;