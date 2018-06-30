import React from 'react';
import { Button, View, Text, Image } from "react-native";


class IngredientView extends React.Component {



  render(){
    return(
      <View className="recipeScreen">
        <Text>ingredient viewer!</Text>
        <Text>{ this.props.ingredient.name }</Text>
        <Text>{ this.props.ingredient.picture }</Text>
        <Text>{ this.props.ingredient.nutrition }</Text>
      </View>
    )
  }

}

export default IngredientView;
