import React from 'react';
import styled from 'styled-components';
import {UppercaseText, RoundPhoto, Header, Stats, Box, Text, BlueLink} from '../style.js';

const Heading = (props) => {
  return (  
    <div>
      <UppercaseText>ENTIRE APARTMENT</UppercaseText>
      <Header><h2>{props.home.homeName}</h2></Header>
      <RoundPhoto><img style={{borderRadius: '50%'}} src={props.host.image}/></RoundPhoto>
      <Text>{props.home.location}<br></br>
      </Text>
      <Stats>
        <Text>
          {props.rooms.totalBedrooms} bedrooms, {props.rooms.totalBeds} beds, {props.rooms.totalBaths} baths
        </Text>
      </Stats>
      <Box>
        <Text><strong>This home is on people’s minds.</strong><br></br>It's been viewed {props.home.viewsThisWeek}+ times in the past week.
        </Text>
      </Box>
    </div>
  );
};

export default Heading;