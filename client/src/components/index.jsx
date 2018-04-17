import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal';
import {UppercaseText, Header, RoundPhoto, Text, BlueLink, Box, Stats} from '../style.js';

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
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  

  fetchHomes() {
    let app = this;
    axios.get(`http://127.0.0.1:3002/amenities/${app.state.homeId}`)
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

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    this.fetchHomes();
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
        <BlueLink onClick={this.openModal}>Read more about the space ^</BlueLink>
        <Modal 
          isOpen={this.state.modalIsOpen}
        >
            this is my modal test
          <button onClick={this.closeModal}>close</button>
        </Modal>
        <br></br>
        <br></br>
        <BlueLink onClick={this.openModal}>
          Contact host
        </BlueLink>
        <Text>
          <h4>Amenities</h4>
          Kitchen, wifi, iron
        </Text>
        <br></br>
        <BlueLink>
          Show all 7 amenities
        </BlueLink>
        <Text>
          <h4>Sleeping arrangements</h4>
          <Box>1 double bed, 1 sofa bed</Box>
          <h4>House Rules</h4>Not suitable for pets<br></br>No parties or events<br></br>Check-in is anytime after {this.state.home.checkIn}<br></br>Check out by {this.state.home.checkOut}
        </Text>
        <br></br>
        <BlueLink>
          Read all Rules ^
        </BlueLink>
      </div>
    );
  }
}

  
ReactDOM.render(<Description />, document.getElementById('description'));