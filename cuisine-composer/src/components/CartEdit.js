import React from 'react';



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
        for (let i of res[0].ingredients){
          result.push(i)
        }

        this.setState({
          ingredientsdb: result
        })
      })
  }

  renderIngredients(){
    return(<div id="cartEditIngredients">
      {this.state.ingredientsdb.map( (ingredient) => {
        return(<div className="cartEditIngredient">
          {ingredient.name}
          <button>-</button>
          <p className="cartEditIngredientCounter">1</p>
          <button>+</button>
        </div>)
      })}
    </div>)
  }

  render() {
    return this.renderIngredients()
  }
}

export default CartEdit;
