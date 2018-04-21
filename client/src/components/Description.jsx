import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal';
import {UppercaseText, Header, RoundPhoto, Text, BlueLink, Box, Stats, GrayDivider} from '../style.js';

Modal.setAppElement('body');

class Description extends React.Component {
  constructor() {
    super();

    this.state = {
      homeId: 1,
      home: {},
      amenities: {},
      rooms: {},
      host: {},
      modal1IsOpen: false,
      modal2IsOpen: false,
    };
    this.openModal1 = this.openModal1.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.createHome = this.createHome.bind(this);
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
  
  createHome() {
    axios.post('http://127.0.0.1:3002/amenities/form', {
      home: {},
      amenities: {},
      rooms: {},
      host: {},
    })
      .then((response) => {
        console.log('this is the response', response);
      })
      .catch((error) => {
        throw err;
      });
  }

  openModal1() {
    this.setState({modal1IsOpen: true});
  }

  openModal2() {
    this.setState({modal2IsOpen: true});
  }

  closeModal1() {
    this.setState({modal1IsOpen: false});
  }

  closeModal2() {
    this.setState({modal2IsOpen: false});
  }

  componentDidMount() {
    let app = this;
    this.fetchHomes(app.state.homeId);
  }

  render() {
    return (
      <div>
        <UppercaseText>ENTIRE APARTMENT</UppercaseText>
        <Header><h2>{this.state.home.homeName}</h2></Header>
        <RoundPhoto><img style={{borderRadius: '50%'}} src={this.state.host.image}/></RoundPhoto>
        <Text>{this.state.home.location}<br></br>
        </Text>
        <Stats>
          <Text>
            {this.state.rooms.totalBedrooms} bedrooms, {this.state.rooms.totalBeds} beds, {this.state.rooms.totalBaths} baths
          </Text>
        </Stats>
        <Box>
          <Text><strong>This home is on people’s minds.</strong><br></br>It's been viewed {this.state.home.viewsThisWeek}+ times in the past week.
          </Text>
        </Box>
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
        <Text>
          <h4>Amenities</h4>
          Kitchen, wifi, iron
        </Text>
        <br></br>
        <BlueLink onClick={this.openModal2}>
          Show all 7 amenities
        </BlueLink>
        <GrayDivider></GrayDivider>
        <Modal isOpen={this.state.modal2IsOpen}>
          <button onClick={this.closeModal2}>close</button>
          <Header><h2>Amenities</h2></Header>
          <Text>
            <strong>Basic</strong>
            <ul>Wifi</ul>
            <ul>Iron</ul>
            <ul>Washer</ul>
            <ul>Air conditioning</ul>
            <strong>Facilities</strong><br></br>
            <strong>Dining</strong><br></br>
            <strong>Guest access</strong><br></br>
            <strong>Not included</strong><br></br>
          </Text>
        </Modal>
        <Text>
          <h4>Sleeping arrangements</h4>
          <Box>1 double bed, 1 sofa bed</Box>
        </Text>
        <GrayDivider></GrayDivider>
        <Text>
          <h4>House Rules</h4>Not suitable for pets<br></br>No parties or events<br></br>Check-in is anytime after {this.state.home.checkIn}<br></br>Check out by {this.state.home.checkOut}
        </Text>
        <br></br>
        <BlueLink>
          Read all Rules ^
        </BlueLink>
        <GrayDivider></GrayDivider>
      </div>
    );
  }
}

export default Description;