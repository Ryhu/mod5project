import React from 'react';
import RecipeView from './RecipeView'



class Browse extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: "",
      recipesdb: [],
      currentRecipe: null
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

  //returns to home screen when footer clicked again
  componentWillReceiveProps(){
    this.setState({
      screen: this.props.screen
    })
  }

  showBrowseMenu(){
    return(
      this.state.recipesdb.map( (recipe) => {
        return(<div className="browseRecipe">
          <p>{recipe.name}</p>
        </div>)
      })
    )
  }


  display(){
    if(this.state.screen === ""){
      return this.showBrowseMenu()
    }
    else if (this.state.screen === "recipe"){
      return <RecipeView recipe={this.state.currentRecipe}/>
    }
  }

  render() {
    return (
       this.display()
    )
  }
}

export default Browse;
