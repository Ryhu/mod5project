import React from 'react';
import { Button, View, Text, Image } from "react-native";


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
      <View className="recipeScreen">
        <Text>Im recipe viewer!</Text>
        <Text>{ this.props.recipe.name}</Text>
        <Text>{ this.props.recipe.time}</Text>
        {this.ingredientsSpreader(this.props.recipe.ingredients)}
        <Text>{ this.props.recipe.directions}</Text>
      </View>
    )
  }

}

export default RecipeView;
