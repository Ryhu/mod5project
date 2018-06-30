import React from 'react';
import { Button, View, Text, Image } from "react-native";


class CartEdit extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: "",
      ingredientsdb: [],
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/shopping_carts")
      .then(res => res.json())
      .then(res => {
        let result = []
        for (let i of res[0].shopping_cart_ingredients){
          let ingredient = Object.assign({amount: i.amount}, i.ingredient)
          result.push(ingredient)
        }

        this.setState({
          ingredientsdb: result
        })
      })
  }

  renderIngredients(){
    return(<View id="cartEditIngredients">
      {this.state.ingredientsdb.map( (ingredient) => {
        return(<View className="cartEditIngredient">
          <Text>{ingredient.name}</Text>

          <Text className="cartEditIngredientCounter">1</Text>

        </View>)
      })}
    </View>)
  }
  //          <Button>-</Button>

  render() {
    return this.renderIngredients()
  }
}

export default CartEdit;
