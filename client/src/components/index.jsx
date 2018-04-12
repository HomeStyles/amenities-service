import React from 'react';
import ReactDOM from 'react-dom';

class Description {
  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    return (
      <div className="homeName">The best house
        <div className="location">Norway</div>
        <div className="stats">4 guests, Studio, 2 beds</div>
        <div className="views">200 this week</div>
        <div className="description">Really, the greatest house</div>
        <div className="amenities">Kitchen, wifi, iron</div>
        <div className="sleepingArrangements">1 double bed, 1 sofa bed</div>
        <div className="houseRules">No parties.</div>
      </div>
    )
  }
};
  
ReactDOM.render(<Description />, document.getElementById('description'));