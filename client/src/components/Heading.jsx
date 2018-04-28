import React from 'react';
import {UppercaseText, RoundPhoto, Header, Stats, Box, Text, BlueLink, BoxText, BoldText} from '../style.js';
import People from 'react-icons/lib/md/people';
import Bed from 'react-icons/lib/fa/bed';
import Tub from 'react-icons/lib/md/hot-tub';
import Room from 'react-icons/lib/md/room';
import Light from 'react-icons/lib/ti/lightbulb';

const imageStyle = {
  borderRadius: '50%',
  width: '45px', 
  textAlign: 'center',
  marginRight: '25px',
  float: 'top'
};

const Heading = (props) => {
  return (  
    <div>
      <UppercaseText>ENTIRE APARTMENT</UppercaseText>
      <RoundPhoto><img style={imageStyle} src={props.host.image}/>
        <Text>{props.host.firstName}</Text>
      </RoundPhoto>
      <Header>{props.home.homeName}</Header>
      <Text>{props.home.location}</Text>
      <Stats>
        <BoxText>
          <People />  2 guests  <Room />  {props.rooms.totalBedrooms} bedrooms  <Bed />  {props.rooms.totalBeds} beds  <Tub />  {props.rooms.totalBaths} bath
        </BoxText>
      </Stats>
      <Box>
        <BoldText>This home is on people’s minds.</BoldText>
        <BoxText>It's been viewed {props.home.viewsThisWeek}+ times in the past week. <Light />
        </BoxText>
      </Box>
    </div>
  );
};

export default Heading;