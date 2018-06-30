import React from 'react';
import { Button, View, Text, Image, TextInput } from "react-native";


class AddIngredient extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      name:"",
      picture:"",
      nutrition:"",
    }

  }

  TextInputFieldHandler = (e) => {
    let key = e.target.dataset.name
    this.setState({
      [key]: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault()
    console.log(this.state.name,this.state.picture, this.state.nutrition)

    fetch("http://localhost:3000/api/v1/ingredients", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredient:{
          name: `${this.state.name}`,
          picture: `${this.state.picture}`,
          nutrition: `${this.state.nutrition}`,
        }
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })


    this.setState({
      name:"",
      picture:"",
      nutrition:"",
    })

    this.props.messageAction("added ingredient!")
  }

  render() {
    return (
      <form className="addForm">
        <Text>ingredients{"\n"}</Text>
        name: <TextInput  value={ this.state.name } data-name="name" onChange={ this.TextInputFieldHandler }/><br />
        picture: <TextInput  value={ this.state.picture } data-name="picture" onChange={ this.TextInputFieldHandler } /><br />
        nutrition: <br /><textarea rows='6' value={ this.state.nutrition } data-name="nutrition" onChange={ this.TextInputFieldHandler } ></textarea><br />
      <Button onPress={ this.submit } title="Add Ingredient"/>
      </form>
    )
  }
}

export default AddIngredient;
