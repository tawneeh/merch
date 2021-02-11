import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function CartList(props) {
  return (
    <>
      <hr />
      {props.cartList.map((cartItem) =>
        <Item
          name={cartItem.name}
          description={cartItem.description}
          id={cartItem.id}
          key={cartItem.id} />
      )}
    </>
  );
}

CartList.propTypes = {
  cartList: PropTypes.array
}

export default CartList;