import React from 'react';
import Modal from 'react-modal';
import {Header, BlueLink, GrayDivider, Text} from '../style.js';
import Fork from 'react-icons/lib/io/fork';
import Wifi from 'react-icons/lib/md/wifi';
import HotWater from 'react-icons/lib/ti/coffee';

Modal.setAppElement('body');

const Amenities = (props) => {
  return (  
    <div>
      <Text>
        <h4>Amenities</h4>
        <Fork />  Kitchen<br></br>
        <Wifi />  Wifi<br></br>
        <HotWater />  Hot Water<br></br>
      </Text>
      <br></br>
      <BlueLink onClick={props.openModal2()}>
          Show all 7 amenities
      </BlueLink>
      <GrayDivider></GrayDivider>
      <Modal isOpen={props.isOpen2}>
        <button onClick={props.closeModal2()}>close</button>
        <Header><h2>Amenities</h2></Header>
        <Text>
          <strong>Basic</strong>
          <ul>Wifi</ul>
          <ul>Iron</ul>
          <ul>Washer</ul>
          <ul>Air conditioning</ul>
          <strong>Facilities</strong><br></br>
          <strong>Dining</strong><br></br>
          <strong>Guest access</strong><br></br>
          <strong>Not included</strong><br></br>
        </Text>
      </Modal>
    </div>
  );
};

export default Amenities;