import React from 'react';
import Add from '../components/Add'
import Find from '../components/Find'
import Browse from '../components/Browse'
import Cart from '../components/Cart'
import Prep from '../components/Prep'


class CuisineComposer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: ""
    }

  }

  setScreen = (word) => {
    this.setState({
      screen: word
    })
  }


  showMainMenu = () => {
    return (<div>
      <button className="mainMenuButton" onClick={ () => this.setScreen('find')}> find</button>
      <button className="mainMenuButton" onClick={ () => this.setScreen('add')}> add</button>
      <button className="mainMenuButton" onClick={ () => this.setScreen('browse')}> browse</button>
      <button className="mainMenuButton" onClick={ () => this.setScreen('cart')}> cart</button>
      <button className="mainMenuButton" onClick={ () => this.setScreen('prep')}> prep</button>
    </div>)
  }

  display(){
    switch(this.state.screen){

      case "":
        return this.showMainMenu()
      case "add":
        return <Add screen="" />
      case "find":
        return <Find screen="" />
      case "browse":
        return <Browse screen="" />
      case "cart":
        return <Cart screen="" />
      case "prep":
        return <Prep screen="" />
      default:
        console.log("failed the switch")
    }
  }


  render() {
    return (<div >
      <div id="display">{ this.display() }</div>

      <div className="footer">{this.showMainMenu()}</div>
      </div>
    )
  }
}

export default CuisineComposer;
