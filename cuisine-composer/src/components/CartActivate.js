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
          let ingredient = Object.assign({amount: i.amount, inCart: false, join_id: i.id}, i.ingredient)
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

  massAddToFridge = () => {
    const ingredients = [...this.state.ingredientsdb]
    //this.addToFridge(this.state.ingredientsdb[0])
    for (let ingredient of ingredients){
      this.addToFridge(ingredient)
      this.deleteFromCart(ingredient)
    }
  }
  addToFridge = (ingredient) => {
    fetch(`http://localhost:3000/api/v1/fridge_ingredients`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item:{
          ingredient_id: `${ingredient.id}`,
          fridge_id: 1,
          amount: ingredient.amount ,
        }
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
          // NEEDS TO CHANGE TO PROPER DYNAMIC AMOUNT
  }

  deleteFromCart(ingredient){
    let tempIngredients = this.state.ingredientsdb
    let pos = tempIngredients.indexOf(ingredient)
    //delete from state of client
    tempIngredients.splice(pos, 1)
    //delete from the DB
    fetch(`http://localhost:3000/api/v1/shopping_cart_ingredients/${ingredient.join_id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })

    this.setState({
      ingredientsdb: tempIngredients
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

        <Button title="Add All To Fridge" onPress={this.massAddToFridge} ></Button>

      </View>)
  }


  render() {
    return (
       this.showCart()
    )
  }
}

export default CartActivate;
