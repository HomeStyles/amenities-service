import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

const UppercaseText = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 16px;
  text-transform: uppercase;
  color: #a02f18;
`;

const Header = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.2px;
  line-height: 22px;
  text-transform: none;
  color: #484848;
`;

const Text = Header.extend`
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.43;
`;

const BlueLink = Text.extend`
  font-weight: 400;
  color: #008489;
`;

const Box = styled.div`
  float: left;
  padding: 5px 10px 5px 10px;
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-right: 1000px;
  width: 300px;
  border: 1px solid #c4c4c4;
  border-radius: 2px;
`;

const Stats = Box.extend`
  border: none;
  margin-bottom: 10px;
`;

const RoundPhoto = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 50%;
  height: 50%;
  border-radius: 50%;
`;


class Description extends React.Component {
  constructor() {
    super();

    this.state = {
      homeId: 1,
      home: {},
      amenities: {},
      rooms: {},
      host: {},
    };
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
    //const data = new FormData(event.target);
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
        <BlueLink>
          Read more about the space ^
          <br></br>
          <br></br>
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