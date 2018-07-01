import React from 'react';
import { Button, View, Text, Image, TextInput, TouchableHighlight } from "react-native";


class CartActivate extends React.Component {

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
          let ingredient = Object.assign({amount: i.amount, inCart: false}, i.ingredient)
          result.push(ingredient)
        }

        this.setState({
          ingredientsdb: result
        })
      })
  }

  touchIngredient(ingredient){
    let tempdb = this.state.ingredientsdb
    let pos = tempdb.indexOf(ingredient)
    let boo = !tempdb[pos].inCart
    tempdb[pos].inCart = boo

    this.setState({
      ingredientsdb: tempdb
    })
  }

  showCart(){
    return(

      <View id="cartIngredients">

        <View id="cartIngredientsUntapped">
        {this.state.ingredientsdb.map( (ingredient) => {
          if(!ingredient.inCart){
            return(
              <TouchableHighlight onPress={() => this.touchIngredient(ingredient)}>
                <Text style={{color:'white', backgroundColor: "blue"}}>{ingredient.name}, {ingredient.amount}</Text>
              </TouchableHighlight>
            )
          }
        })}
        </View>

        <View id="cartIngredientsTapped">
        {this.state.ingredientsdb.map( (ingredient) => {
          if(ingredient.inCart){
            return(

              <TouchableHighlight onPress={() => this.touchIngredient(ingredient)}>
                <Text style={{color:'white', backgroundColor: "red"}}>{ingredient.name}, {ingredient.amount}</Text>
              </TouchableHighlight>

            )
          }
        })}
        </View>

      </View>)
  }


  render() {
    return (
       this.showCart()
    )
  }
}

export default CartActivate;
