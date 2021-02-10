import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <>
      <hr />
      {props.itemList.map((item, index) =>
        <Item name={item.name}
        description={item.description}
        quantity={item.quantity}
        key={index} />
      )}
    </>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;