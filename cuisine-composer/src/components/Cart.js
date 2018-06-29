import React from 'react';
import CartActivate from "./CartActivate"
import CartEdit from "./CartEdit"

class Cart extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: ""
    }

  }


  componentWillReceiveProps(){
    this.setState({
      screen: this.props.screen
    })
  }

  display = () => {
    switch(this.state.screen){
      case "":
        return this.showMainMenu()
      case "edit":
        return <CartEdit />
      case "activate":
        return <CartActivate />

      default:
        console.log("failed the switch")
    }
  }

  setScreen = (word) => {
    this.setState({
      screen: word
    })
  }

  showMainMenu(){
    return (
      <div>
        <p>Cart</p>
        <button className="addButtons" onClick={ () => this.setScreen('edit') }>edit Cart</button>
        <button className="addButtons" onClick={ () => this.setScreen('activate') }>Activate Cart</button>
      </div>
    )
  }

  render() {
    return  this.display()
  }
}

export default Cart;
