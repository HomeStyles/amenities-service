import React from 'react';
import ReactDOM from 'react-dom';

class Description extends React.Component {
  render() {
    return (
      <div>
        <div className="houseType">ENTIRE APARTMENT</div>
        <div className="homeName"><h2>The best house</h2></div>
        <div className="location">Norway</div>
        <div className="stats">4 guests, Studio, 2 beds</div>
        <div className="views">200 this week</div>
        <div className="description">Really, the greatest house</div>
        <div className="amenities"><h4>Amenities</h4>Kitchen, wifi, iron</div>
        <div className="sleepingArrangements"><h4>Sleeping arrangements</h4>1 double bed, 1 sofa bed</div>
        <div className="houseRules"><h4>House Rules</h4>No parties.</div>
      </div>
    )
  }
};
  
ReactDOM.render(<Description />, document.getElementById('description'));