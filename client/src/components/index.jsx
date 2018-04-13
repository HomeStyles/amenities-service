import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';

const Box = styled.div`
  float: left;
  padding: 5px 10px 5px 10px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-right: 500px;
  width: 300px;
  border: 1px solid #c4c4c4;
  border-radius: 2px;
`;

const BoldText = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 16px;
  text-transform: uppercase;
  color: #a02f18;
`;

const Name = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0.2px;
  line-height: 22px;
  text-transform: none;
  color: #484848;
`;

const Text = styled.div`
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.2px;
  line-height: 1.43;
  color: #484848;
`;

class Description extends React.Component {
  constructor() {
    super();

    this.state = {
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
        image: '',
        email: 'jacksparrow@123.com',
      },
    };
  }

  render() {
    return (
      <div>
        <BoldText>
          <div className="houseType">ENTIRE APARTMENT</div>
        </BoldText>
        <Name>
          <div className="homeName"><h2>{this.state.homeName}</h2></div>
        </Name>
        <Text>
          <div className="location">{this.state.location}</div>
          <div className="stats">{this.state.rooms.totalBedrooms} bedrooms, {this.state.rooms.totalBeds} beds, {this.state.rooms.totalBaths} baths</div>
        </Text>
        <Box>
          <Text>
            <div className="views">This home is top of mind. Over {this.state.viewsThisWeek} people have viewed it in the past week.</div>
          </Text>
        </Box>
        <Text>
          <div className="description">{this.state.description}</div>
          <div className="amenities"><h4>Amenities</h4>Kitchen, wifi, iron</div>
          <div className="sleepingArrangements"><h4>Sleeping arrangements</h4>
            <Box>
            1 double bed, 1 sofa bed
            </Box>
          </div>
          <div className="houseRules"><h4>House Rules</h4>Pets are not allowed. Check in time is {this.state.checkIn}. Check out by {this.state.checkOut}.</div>
        </Text>
      </div>
    );
  }
}

  
ReactDOM.render(<Description />, document.getElementById('description'));