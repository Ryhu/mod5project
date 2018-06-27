import React from 'react';



class AddIngredient extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: ""
    }

  }



  render() {
    return (
      <form className="addForm">
        <p>ingredients</p>
        name: <input type="text" /><br />
        picture: <input type="text" /><br />
        nutrition: <br /><textarea rows='6'></textarea><br />
      </form>
    )
  }
}

export default AddIngredient;
