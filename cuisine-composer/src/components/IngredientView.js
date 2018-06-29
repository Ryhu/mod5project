import React from 'react';



class IngredientView extends React.Component {



  render(){
    return(
      <div className="recipeScreen">
        <p>ingredient viewer!</p>
        <p>{ this.props.ingredient.name }</p>
        <p>{ this.props.ingredient.picture }</p>
        <p>{ this.props.ingredient.nutrition }</p>
      </div>
    )
  }

}

export default IngredientView;
