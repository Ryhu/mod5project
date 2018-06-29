import React from 'react';
import RecipeView from './RecipeView'
import BrowseRecipes from './BrowseRecipes'
import BrowseIngredients from './BrowseIngredients'


class Browse extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: ""
    }

  }

  //returns to home screen when footer clicked again
  componentWillReceiveProps(){
    this.setState({
      screen: this.props.screen
    })
  }

  setScreen = (word) => {
    this.setState({
      screen: word
    })
  }
  display(){
    switch(this.state.screen){
      case "":
        return this.showMainMenu()
      case "recipe":
        return <BrowseRecipes messageAction={ this.changeMessage } />
      case "ingredient":
        return <BrowseIngredients messageAction={ this.changeMessage } />

      default:
        console.log("failed the switch")
    }
  }


  showMainMenu(){
    return (
      <div>
        <p>Browse</p>
        <button className="addButtons" onClick={ () => this.setScreen('ingredient') }>browse ingredients</button>
        <button className="addButtons" onClick={ () => this.setScreen('recipe') }>browse recipes</button>
      </div>
    )
  }

  render() {
    return (
       this.display()
    )
  }
}

export default Browse;
