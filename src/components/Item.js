import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return(
    <>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{props.quantity}</p>
        <hr/>
      </div>
    </>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;