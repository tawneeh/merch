import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      selectedItem: null
    };
  }

  handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item => item.id !== id);
    this.setState({
      materItemList: newMasterItemList,
      selectedTicket: null
    })
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0]; // 0 here because the array will only have one element (the item id)
    this.setState({selectedItem: selectedItem});
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({masterItemList: newMasterItemList,
                  formVisibleOnPage: false});
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.selectedItem != null) {
      currentVisibleState = <ItemDetail item = {this.state.selectedItem} onClickingDelete = {this.handleDeletingItem} />
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to Item List";
    } else {
      currentVisibleState = <ItemList itemList={this.state.masterItemList} onItemSelection={this.handleChangingSelectedItem} />;
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