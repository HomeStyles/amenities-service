import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
class Description extends React.Component {
  render() {
    return (
      <div>
        <div className="houseType">ENTIRE APARTMENT</div>
        <div className="homeName"><h2>The best house</h2></div>
=======
class Description {
  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    return (
      <div className="homeName">The best house
>>>>>>> b7577639f96089937fb147e159ef7488c852318a
        <div className="location">Norway</div>
        <div className="stats">4 guests, Studio, 2 beds</div>
        <div className="views">200 this week</div>
        <div className="description">Really, the greatest house</div>
<<<<<<< HEAD
        <div className="amenities"><h4>Amenities</h4>Kitchen, wifi, iron</div>
        <div className="sleepingArrangements"><h4>Sleeping arrangements</h4>1 double bed, 1 sofa bed</div>
        <div className="houseRules"><h4>House Rules</h4>No parties.</div>
=======
        <div className="amenities">Kitchen, wifi, iron</div>
        <div className="sleepingArrangements">1 double bed, 1 sofa bed</div>
        <div className="houseRules">No parties.</div>
>>>>>>> b7577639f96089937fb147e159ef7488c852318a
      </div>
    )
  }
};
  
ReactDOM.render(<Description />, document.getElementById('description'));