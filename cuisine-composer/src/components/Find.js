import React from 'react';
import FindResults from './FindResults'
import RecipeView from './RecipeView'



class Find extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: "",
      recipesdb: [],
      ingredientsdb: [],
      findReqs: [],
      filter: "",
      currentRecipe: null
    }

  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/recipes")
      .then(res => res.json())
      .then(res => {
        let result = []
        //console.log(res)
        for (let i of res){
          result.push(i)
        }
        this.setState({
          recipesdb: result
        })
      })

    fetch("http://localhost:3000/api/v1/ingredients")
      .then(res => res.json())
      .then(res => {
        let result = []
        for (let i of res){
          result.push(i)
        }
        this.setState({
          ingredientsdb: result,
        })
      })
  }

  componentWillReceiveProps(){
    this.setState({
      screen: this.props.screen
    })
  }

  addToReqs(i){
    //adds clicked item to search requirements
    let reqs = this.state.findReqs
    reqs.push(i)

    //removes clicked item from items list
    let pos = this.state.ingredientsdb.indexOf(i)
    let tempList = this.state.ingredientsdb
    tempList.splice(pos,1)

    this.setState({
      findReqs: reqs,
      ingredientsdb: tempList
    })
  }

  removeFromReqs(i){
    //adds clicked item to search requirements
    let list = this.state.ingredientsdb
    list.push(i)

    //removes clicked item from items list
    let pos = this.state.findReqs.indexOf(i)
    let tempReqs = this.state.findReqs
    tempReqs.splice(pos,1)

    this.setState({
      ingredientsdb: list,
      findReqs: tempReqs,
    })
  }

  renderFilteredIngredients(){
    let filteredArr = this.filterSearch()
    return(<div className="listedIngredientBox">
      { filteredArr.map( (i) => {
        return(
          <div className="listedIngredient" onClick={ () => this.addToReqs(i)}>
            <p>{i.name}</p>
          </div>
        )
      })}
    </div>)
  }

  renderReqIngredients(){
    return(<div className="findReqsBox">

      { this.state.findReqs.map( (i) => {
        return(
          <div className="findReqs"  onClick={ () => this.removeFromReqs(i)}>
            <p>{i.name}</p>
          </div>
        )
      })}

    </div>)
  }

  // returns filtered array
  filterSearch(){
    let arr = this.state.ingredientsdb.filter( (ingredient) => {
      return (ingredient.name.indexOf(this.state.filter) >= 0)
    })

    return arr
  }

  filterHandler = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  startSearch = () => {
    this.setState({
      screen: "results"
    })
  }

  reset = () => {
    let combined = this.state.ingredientsdb.concat(this.state.findReqs)
    this.setState({
      filter: "",
      findReqs: [],
      ingredientsdb: combined,
    })
  }

  showSearchMenu(){
    return (
      <div id="findBox">
        <p>Find</p>
        <input type="text" onChange={ this.filterHandler } value={ this.state.filter }/>
        <div id="itemsListBox">
          All Ingredients
          { this.renderFilteredIngredients()}
        </div>
        <div id="reqBox">
          Search For:
          { this.renderReqIngredients()}
        </div>
        <button id="findButton" onClick={ this.startSearch }>Find</button>
        <button id="findButton" onClick={ this.reset }>Reset</button>
      </div>
    )
  }

  recipeSwitch = (recipe) => {
    this.setState({
      screen: "recipe",
      currentRecipe: recipe
    })
  }

  display(){
    if(this.state.screen === ""){
      return this.showSearchMenu()
    }
    else if (this.state.screen === "results"){
      return <FindResults recipesdb={this.state.recipesdb} findReqs={this.state.findReqs} action={this.recipeSwitch}/>
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

export default Find;
