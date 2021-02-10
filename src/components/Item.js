import React from "react";
import PropTypes from "prop-types";

function Item(prop) {
  return(
    <>
      <h3>{prop.name}</h3>
      <p>{prop.description}</p>
      <p>{prop.quantity}</p>
      <hr/>
    </>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Item;