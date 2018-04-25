import React from 'react';
import Modal from 'react-modal';
import {Header, BlueLink, GrayDivider, Text, BoldText, List} from '../style.js';
import Fork from 'react-icons/lib/io/fork';
import Wifi from 'react-icons/lib/md/wifi';
import HotWater from 'react-icons/lib/ti/coffee';

Modal.setAppElement('body');

const Amenities = (props) => {
  const amenities = Object.entries(props.amenities);
  let amenitiesOffered = [];
  amenities.forEach((value) => { 
    if (value[1] === false) {
      return;
    }
    amenitiesOffered.push(value[0].charAt(0).toUpperCase() + value[0].slice(1));
  });
  const filteredList = amenitiesOffered.map((value) => 
    <Text key={value.toString()}>{value}</Text>
  );

  let amenitiesNotOffered = [];
  amenities.forEach((value) => { 
    if (value[1] === true) {
      return;
    }
    let amenity = value[0].split(/(?=[A-Z])/).join(' ');
    amenity = amenity.charAt(0).toUpperCase() + amenity.slice(1);
    amenitiesNotOffered.push(amenity);
  });
  const notOffered = amenitiesNotOffered.map((value) => 
    <Text key={value.toString()}>{value}</Text>
  );

  return (  
    <div>
      <Text>
        <BoldText>Amenities</BoldText>
        {filteredList}
      </Text>
      <BlueLink onClick={props.openModal2()}>
          Show all {filteredList.length} amenities
      </BlueLink>
      <GrayDivider></GrayDivider>
      <Modal isOpen={props.isOpen2}>
        <button onClick={props.closeModal2()}>close</button>
        <Header>Amenities</Header>
        <BoldText>Included</BoldText>
        <List>{filteredList}</List>
        <BoldText>Not included</BoldText>
        <List>{notOffered}</List>
      </Modal>
    </div>
  );
};

export default Amenities;