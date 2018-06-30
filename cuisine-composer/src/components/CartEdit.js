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
        console.log(res[0])
        debugger
        let result = []
        for (let i of res[0].ingredients){
          result.push(i)
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
          {ingredient.name}
          <Button>-</Button>
          <Text className="cartEditIngredientCounter">1</Text>
          <Button>+</Button>
        </View>)
      })}
    </View>)
  }

  render() {
    return this.renderIngredients()
  }
}

export default CartEdit;
