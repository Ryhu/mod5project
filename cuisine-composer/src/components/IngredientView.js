import React from 'react';



class IngredientView extends React.Component {



  render(){
    console.log("ouahetjgpoifudt904rbglisoe;hrbgeiluhouidro")
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
