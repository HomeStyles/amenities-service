import React from 'react';
import {UppercaseText, RoundPhoto, Header, Stats, Box, Text, BlueLink, BoxText} from '../style.js';
import People from 'react-icons/lib/md/people';
import Bed from 'react-icons/lib/fa/bed';
import Tub from 'react-icons/lib/md/hot-tub';
import Room from 'react-icons/lib/md/room';
import Light from 'react-icons/lib/ti/lightbulb';

const imageStyle = {
  borderRadius: '50%',
  width: '45px', 
  zIndex: '1', 
  textAlign: 'center',
};

const Heading = (props) => {
  return (  
    <div>
      <UppercaseText>ENTIRE APARTMENT</UppercaseText>
      <Header><h2>{props.home.homeName}</h2></Header>
      <RoundPhoto><img style={imageStyle} src={props.host.image}/>
      </RoundPhoto>
      <Text>{props.home.location}<br></br>
        <br></br>
      </Text>
      <Stats>
        <BoxText>
          <People />  2 guests,  <Room />  {props.rooms.totalBedrooms} bedrooms,  <Bed />  {props.rooms.totalBeds} beds,  <Tub />  {props.rooms.totalBaths} bath
        </BoxText>
      </Stats>
      <Box>
        <BoxText><strong>This home is on people’s minds.</strong><br></br>It's been viewed {props.home.viewsThisWeek}+ times in the past week. <Light />
        </BoxText>
      </Box>
    </div>
  );
};

export default Heading;