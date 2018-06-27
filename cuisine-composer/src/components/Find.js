import React from 'react';



class Find extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: "",
      recipesdb: [],
      ingredientsdb: [],
      filteredIngredients: [],
      findReqs: [],
      findInput: ""
    }

  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/recipes")
      .then(res => res.json())
      .then(res => {
        let result = []
        console.log(res)
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
          filteredIngredients: result
        })
      })
  }

  renderRecipes(){
    return(<div>

      { this.state.recipesdb.map( (i) => {
        return(<div className="recipeBox">
          <p>{i.name}</p>
          <p>{i.time}</p>
          <p>{i.directions}</p>
        </div>)
      })}

    </div>)
  }

  addToReqs(i){
    //adds clicked item to search requirements
    let reqs = this.state.findReqs
    reqs.push(i)

    //removes clicked item from items list
    let pos = this.state.ingredientsdb.indexOf(i)
    let tempList = this.state.ingredientsdb
    tempList.splice(pos,1)

    //removes clicked item from filtered list
    pos = this.state.filteredIngredients.indexOf(i)
    let tempFilter = this.state.filteredIngredients
    tempFilter.splice(pos,1)

    this.setState({
      findReqs: reqs,
      ingredientsdb: tempList,
      filteredIngredients: tempFilter
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
    return(<div>

      { this.state.filteredIngredients.map( (i) => {
        return(
          <div className="listedIngredient" onClick={ () => this.addToReqs(i)}>
            <p>{i.name}</p>
          </div>
        )
      })}

    </div>)
  }

  renderReqIngredients(){
    return(<div>

      { this.state.findReqs.map( (i) => {
        return(
          <div className="findReqs"  onClick={ () => this.removeFromReqs(i)}>
            <p>{i.name}</p>
          </div>
        )
      })}

    </div>)
  }

  filterSearch = (e) => {
    let arr = this.state.ingredientsdb.filter( (ingredient) => {
      return (ingredient.name.indexOf(e.target.value) >= 0)
    })
    this.setState({
      filteredIngredients: arr
    })
  }


  render() {
    return (
      <div id="findBox">
        <p>Find</p>
        <input type="text" onChange={ this.filterSearch } />

        <div id="itemsListBox">
          All Ingredients
          { this.renderFilteredIngredients()}
        </div>

        <div id="reqBox">
          Search For:
          { this.renderReqIngredients()}
        </div>


      </div>

    )
  }
}

export default Find;
