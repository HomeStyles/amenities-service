import React from 'react';
import {Text, Box, GrayDivider} from '../style.js';
import FaBed from 'react-icons/lib/fa/bed';

const Sleeping = () => {
  return (  
    <div>
      <Text>
        <h4>Sleeping arrangements</h4>
        <Box> 
          <FaBed />  <FaBed /> 
          <br></br><strong>Bedrooms</strong>
          <br></br>1 double bed, 1 sofa bed
        </Box>
      </Text>
      <GrayDivider></GrayDivider>
    </div>
  );
};

export default Sleeping;