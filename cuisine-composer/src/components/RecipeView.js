import React from 'react';



class RecipeView extends React.Component {

  ingredientsSpreader(ingredients){
    return(<ul className="recipeIngredients">

      {ingredients.map( (ingredient) => {
        return(
          <li>{ingredient.name}</li>
        )
      })}

    </ul>)
  }

  render(){
    return(
      <div className="recipeScreen">
        <p>Im recipe viewer!</p>
        <p>{ this.props.recipe.name}</p>
        <p>{ this.props.recipe.time}</p>
        {this.ingredientsSpreader(this.props.recipe.ingredients)}
        <p>{ this.props.recipe.directions}</p>
      </div>
    )
  }

}

export default RecipeView;
