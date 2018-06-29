import React from 'react';
import AddIngredient from '../components/AddIngredient'
import AddRecipe from '../components/AddRecipe'



class Add extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: "",
      message: ""
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
      case "ingredient":
        return <AddIngredient messageAction={ this.changeMessage } />
      case "recipe":
        return <AddRecipe messageAction={ this.changeMessage } />

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
        <p>Add</p>
        <button className="addButtons" onClick={ () => this.setScreen('ingredient') }>add Ingredient</button>
        <button className="addButtons" onClick={ () => this.setScreen('recipe') }>add Recipe</button>
        {this.messageDisplay()}
      </div>
    )
  }


  messageDisplay(){
    return(
      <div>{this.state.message === "" ? null : <p>{this.state.message}</p>}</div>
    )
  }

  changeMessage = (message) => {
    this.setState({
      message: message,
      screen: ""
    })
  }

  render() {
    return  this.display()
  }
}

export default Add;
