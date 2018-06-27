import React from 'react';



class AddRecipe extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: ""
    }

  }



  render() {
    return (
      <form className="addForm">
        <p>recipe</p>
        name: <input type="text" /><br />
        time: <input type="text" /><br />
        ingredients: <br /><textarea rows='6'></textarea><br />
        recipe: <br /><textarea rows='6'></textarea><br />
      </form>
    )
  }
}

export default AddRecipe;
