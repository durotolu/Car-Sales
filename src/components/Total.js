import React from 'react';
//import { connect } from 'tls';
import { connect } from 'react-redux'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.state.car.price + props.state.additionalPrice}</h4>
    </div>
  );
};

export default connect(
  state => state
)(Total);
