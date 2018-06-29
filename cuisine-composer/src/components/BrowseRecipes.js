import React from 'react';
import RecipeView from './RecipeView'



class BrowseRecipes extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: "",
      recipesdb: [],
      filter: "",
      currentRecipe: null,
    }

  }

  //sets up the temp recipes db
  componentDidMount(){
    fetch("http://localhost:3000/api/v1/recipes")
      .then(res => res.json())
      .then(res => {

        let result = []
        for (let i of res){
          result.push(i)
        }

        this.setState({
          recipesdb: result
        })
      })
  }

  showBrowseRecipesMenu(){
    let filteredArr = this.filterSearch()
    return( <div id="browseRecipes">
    Search: <input type="text" onChange={ this.filterHandler } value={ this.state.filter }/>
      {filteredArr.map( (recipe) => {
        return(<div className="browseRecipe" onClick={ () => this.recipeSwitch(recipe) }>
          <p>{recipe.name}</p>
        </div>)
      })}
    </div>)
  }


  // returns filtered array
  filterSearch(){
    let arr = this.state.recipesdb.filter( (recipe) => {
      return (recipe.name.indexOf(this.state.filter) >= 0)
    })
    return arr
  }

  filterHandler = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  display(){
    if(this.state.screen === ""){
      return this.showBrowseRecipesMenu()
    }
    else if (this.state.screen === "recipe"){
      return <RecipeView recipe={this.state.currentRecipe}/>
    }
  }


  recipeSwitch = (recipe) => {
    this.setState({
      screen: "recipe",
      currentRecipe: recipe
    })
  }

  render() {
    return (
       this.display()
    )
  }
}

export default BrowseRecipes;
