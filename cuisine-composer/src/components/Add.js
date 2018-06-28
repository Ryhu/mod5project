import React from 'react';
import AddIngredient from '../components/AddIngredient'
import AddRecipe from '../components/AddRecipe'



class Add extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: this.props.screen
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
        return <AddIngredient />
      case "recipe":
        return <AddRecipe />

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
      </div>
    )
  }




  render() {
    return  this.display()
  }
}

export default Add;
