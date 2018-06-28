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
    console.log(e.target.value)
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
