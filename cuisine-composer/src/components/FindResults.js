import React from 'react';



class FindResults extends React.Component {

  renderRecipes(){
    let list = this.reqFilter()
    return(<div>
      { list.map( (i) => {
        return(<div className="recipeBox" onClick={ () => this.props.action(i) }>
          <p>{i.name}</p>
          <p>{i.time}</p>
          <p>{i.directions}</p>
        </div>)
      })}
    </div>)
  }

  reqFilter(){
    let filteredRecipes = this.props.recipesdb
    // each ingredient in the filters
    for (let ingredient of this.props.findReqs){
      //filter recipies
      filteredRecipes = filteredRecipes.filter( (recipe) => {
        let flag = false
        //each ingredient in recipe compared to filter ingredient
        for (let recIng of recipe.ingredients){
          if (recIng.name === ingredient.name){
            flag = true
          }
        }
        return flag
      })
    }
    return filteredRecipes
  }


  render(){
    console.log(this.props.findReqs)
    return(
      <div>
        { this.renderRecipes() }
        <p>hi</p>
      </div>
    )
  }

}

export default FindResults;
