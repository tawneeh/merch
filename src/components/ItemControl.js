import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import EditItemForm from "./EditItemForm";
import CartList from "./CartList";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      selectedItem: null,
      editing: false,
      buying: false,
      cartList: [],
      cartView: false
    };
  }

  // Handle editing item in list
  handleEditingItemInList = (itemToEdit) => {
    const editedMasterItemList = this.state.masterItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      masterItemList: editedMasterItemList,
      editing: false,
      selectedItem: null
    });
  }

  // Handle adding item to cart - onClickingBuy
  handleAddingItemToCart = (itemToAdd) => {
    const newCartList = this.state.cartList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToAdd);
    this.setState({
      cartList: newCartList,
      editing: false,
      selectedItem: null
    });
  }

  // Handle deleting item from list
  handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item => item.id !== id);
    this.setState({
      masterItemList: newMasterItemList,
      selectedItem: null
    });
  }

  // Handle selecting item for details page
  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0]; // 0 here because the array will only have one element (the item id)
    this.setState({selectedItem: selectedItem});
  }

  // Handle creating a new item
  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({masterItemList: newMasterItemList,
                  formVisibleOnPage: false});
  }

  // Handle visible button click events
  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false,
        cartView: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  // Handle edit button click event
  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  // Handle buy item button click event
  handleBuyClick = () => {
    console.log("handleBuyClick reached!");
    this.setState({buying: true});
  }

  // Handle view cart button click event
  handleViewCartClick = () => {
    console.log("Cart View Activated!");
    this.setState({cartView: true});
  }

  // add if statement to view cartlist 
  render() {
    let currentVisibleState = null;
    let buttonText = null;
    let viewCartButton = "View Cart";
    if (this.state.cartView) {
      currentVisibleState = <CartList cartList={this.state.cartList} />
      buttonText = "Return to Item List";
    } else if (this.state.editing) {
      currentVisibleState = <EditItemForm item = {this.state.selectedItem} onEditItem = {this.handleEditingItemInList} />
      buttonText = "Return to Item List";
    } else if (this.state.selectedItem != null) {
      currentVisibleState = <ItemDetail item = {this.state.selectedItem} onClickingDelete = {this.handleDeletingItem} onClickingEdit = {this.handleEditClick} onClickingBuy = {this.handleAddingItemToCart} />
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
        <button onClick={this.handleViewCartClick}>{viewCartButton}</button>
      </>
    );
  }
}

export default ItemControl;