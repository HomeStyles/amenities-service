import React from 'react';
import {Text, Box, GrayDivider, BoldText} from '../style.js';
import FaBed from 'react-icons/lib/fa/bed';

const float = {
  float: 'left', 
  marginRight: '50px'
};

const Sleeping = () => {
  return (  
    <div>
      <BoldText>Sleeping arrangements</BoldText>
      <Box> 
        <FaBed/><FaBed style={float}/>
        <BoldText>Bedrooms</BoldText>
        <Text>1 double bed, 1 sofa bed</Text>
      </Box>
      <GrayDivider></GrayDivider>
    </div>
  );
};

export default Sleeping;