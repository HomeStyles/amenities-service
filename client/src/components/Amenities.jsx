import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {Header, BlueLink, GrayDivider, Text} from '../style.js';

Modal.setAppElement('body');

const Amenities = (props) => {
  return (  
    <div>
      <Text>
        <h4>Amenities</h4>
          Kitchen, wifi, iron
      </Text>
      <br></br>
      <BlueLink onClick={props.openModal()}>
          Show all 7 amenities
      </BlueLink>
      <GrayDivider></GrayDivider>
      <Modal isOpen={props.isOpen}>
        <button onClick={props.closeModal()}>close</button>
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