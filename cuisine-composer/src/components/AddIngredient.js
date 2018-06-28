import React from 'react';



class AddIngredient extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      name:"",
      picture:"",
      nutrition:"",
    }

  }

  inputFieldHandler = (e) => {
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
  }

  render() {
    return (
      <form className="addForm">
        <p>ingredients</p>
        name: <input type="text" value={ this.state.name } data-name="name" onChange={ this.inputFieldHandler }/><br />
        picture: <input type="text" value={ this.state.picture } data-name="picture" onChange={ this.inputFieldHandler } /><br />
        nutrition: <br /><textarea rows='6' value={ this.state.nutrition } data-name="nutrition" onChange={ this.inputFieldHandler } ></textarea><br />
      <input type="submit" value="Add Ingredient" onClick={ this.submit }/>
      </form>
    )
  }
}

export default AddIngredient;
