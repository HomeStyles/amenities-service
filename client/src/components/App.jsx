import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import {AppContainer} from '../style.js';
import Rules from './Rules.jsx';
import Sleeping from './Sleeping.jsx';
import Amenities from './Amenities.jsx';
import Heading from './Heading.jsx';
import Description from './Description.jsx';

class DescriptionApp extends React.Component {
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
      hide: true, 
      rulesHidden: true
    };
  }

  fetchHomes(id) {
    axios.get(`http://ec2-54-153-33-219.us-west-1.compute.amazonaws.com/amenities/${id}`)
      .then((response) => {
        this.setState({
          home: response.data,
          amenities: response.data.amenities,
          rooms: response.data.rooms,
          host: response.data.host,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  openModal1() {
    this.setState({modal1IsOpen: true});
  }
  
  closeModal1() {
    this.setState({modal1IsOpen: false});
  }
  
  openModal2() {
    this.setState({modal2IsOpen: true});
  }

  closeModal2() {
    this.setState({modal2IsOpen: false});
  }

  showText(event) {
    event.preventDefault();
    this.setState({hide: !this.state.hide});
  }

  showRules(event) {
    event.preventDefault();
    this.setState({rulesHidden: !this.state.rulesHidden});
  }

  componentDidMount() {
    let parsed = queryString.parse(location.search);
    let currentId = Number(parsed.id);
    if (currentId) {
      this.fetchHomes(currentId);
      this.setState({homeId: currentId});
    } else {
      this.fetchHomes(this.state.homeId);
    }
  }

  render() {
    return (
      <AppContainer>
        <Heading home={this.state.home} host={this.state.host} rooms={this.state.rooms} />
        <Description
          home={this.state.home} 
          host={this.state.host}
          isOpen1={this.state.modal1IsOpen}
          openModal1={() => this.openModal1.bind(this)} 
          closeModal1={() => this.closeModal1.bind(this)} 
          hide={this.state.hide}
          toggleText={(e) => this.showText.bind(this)}
        />
        <Amenities 
          amenities={this.state.amenities}
          isOpen2={this.state.modal2IsOpen}
          openModal2={() => this.openModal2.bind(this)} 
          closeModal2={() => this.closeModal2.bind(this)} 
        />
        <Sleeping />
        <Rules 
          rules={this.state.home} 
          hide={this.state.rulesHidden}
          showRules={(e) => this.showRules.bind(this)}
        />
      </AppContainer>
    );
  }
}

export default DescriptionApp;