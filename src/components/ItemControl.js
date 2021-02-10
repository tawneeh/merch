import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: []
    };
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({masterItemList: newMasterItemList,
                  formVisibleOnPage: false});
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.this.state.formVisibleOnPage) {
      currentVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to Item List";
    } else {
      currentVisibleState = <ItemList itemList={this.state.masterItemList} />;
      buttonText = "Add Item";
    }
    return (
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default ItemControl;