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
      home: {},
      homeName: 'The best house',
      description: 'Really, the greatest house',
      location: 'Norway',
      viewsThisWeek: 200,
      petsAllowed: false,
      checkOut: '11AM',
      checkIn: '2PM',
      amenities: {
        wifi: true,
        hotWater: false,
        shampoo: false,
        towels: true,
        sheets: true,
        kitchen: false,
      },
      rooms: {
        totalBedrooms: 4,
        totalBeds: 4,
        totalBaths: 2,
      },
      host: {
        hostId: 123,
        firstName: 'Jack',
        lastName: 'Sparrow',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/nastya_mane/128.jpg',
        email: 'jacksparrow@123.com',
      },
    };
  }

  fetchHomes() {
    axios.get('http://127.0.0.1:3002/_id/:_id')
      .then((response) => {
        console.log(response);
        this.setState({
          home: response,
        });
        console.log('home after set state', this.state.home);
      })
      .catch((err) => {
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
        <Header><h2>{this.state.homeName}</h2></Header>
        <RoundPhoto><img style={{borderRadius: '50%'}} src={this.state.host.image}/></RoundPhoto>
        <Text>{this.state.location}<br></br>
        </Text>
        <Stats>
          <Text>
            {this.state.rooms.totalBedrooms} bedrooms, {this.state.rooms.totalBeds} beds, {this.state.rooms.totalBaths} baths
          </Text>
        </Stats>
        <Box>
          <Text><strong>This home is on people’s minds.</strong><br></br>It's been viewed {this.state.viewsThisWeek}+ times in the past week.
          </Text>
        </Box>
        <Text>
          {this.state.description}<br></br>
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
          <h4>House Rules</h4>Not suitable for pets<br></br>No parties or events<br></br>Check-in is anytime after {this.state.checkIn}<br></br>Check out by {this.state.checkOut}
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