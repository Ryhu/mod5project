import React from 'react';



class AddRecipe extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: "",
      name: "",
      time: "",
      ingredients: "",
      directions: "",
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

    fetch("http://localhost:3000/api/v1/recipes", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recipe:{
          name: `${this.state.name}`,
          time: `${this.state.time}`,
          ingredients: `${this.state.ingredients}`,
          directions: `${this.state.directions}`,
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

    this.props.messageAction("added recipe!")
  }



  render() {
    return (
      <form className="addForm">
        <p>recipe</p>
        name: <input type="text" value={ this.state.name } data-name="name" onChange={ this.inputFieldHandler }/><br />
        time: <input type="text" value={ this.state.time } data-name="time" onChange={ this.inputFieldHandler }/><br />
        ingredients: <br /><textarea rows='6' value={ this.state.ingredients } data-name="ingredients" onChange={ this.inputFieldHandler }></textarea><br />
      directions: <br /><textarea rows='6' value={ this.state.directions } data-name="directions" onChange={ this.inputFieldHandler }></textarea><br />
      <input type="submit" value="Add Recipe" onClick={ this.submit }/>
      </form>
    )
  }
}

export default AddRecipe;
