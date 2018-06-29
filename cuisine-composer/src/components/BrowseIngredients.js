import React from 'react';
import IngredientView from './IngredientView'


class BrowseIngredients extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: "",
      ingredientsdb: [],
      filter: "",
      currentIngredient: null,
    }

  }

  //sets up the temp recipes db
  componentDidMount(){
    fetch("http://localhost:3000/api/v1/ingredients")
      .then(res => res.json())
      .then(res => {

        let result = []
        for (let i of res){
          result.push(i)
        }

        this.setState({
          ingredientsdb: result
        })
      })
  }

  showBrowseIngredientsMenu(){
    let filteredArr = this.filterSearch()
    return( <div id="browseIngredients">
    Search: <input type="text" onChange={ this.filterHandler } value={ this.state.filter }/>
      {filteredArr.map( (ingredient) => {
        return(<div className="browseIngredient" onClick={ () => this.ingredientSwitch(ingredient) }>
          <p>{ingredient.name}</p>
        </div>)
      })}
    </div>)
  }


  // returns filtered array
  filterSearch(){
    let arr = this.state.ingredientsdb.filter( (recipe) => {
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
      return this.showBrowseIngredientsMenu()
    }
    else if (this.state.screen === "ingredient"){
      return <IngredientView ingredient={this.state.currentIngredient}/>
    }
  }


  ingredientSwitch = (ingredient) => {
    this.setState({
      screen: "ingredient",
      currentIngredient: ingredient
    })
  }

  render() {
    return (
       this.display()
    )
  }
}

export default BrowseIngredients;
