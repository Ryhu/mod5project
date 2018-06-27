import React from 'react';
import Add from '../components/Add'
import Find from '../components/Find'


class CuisineComposer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: ""
    }

  }

  setScreen = (word) => {
    console.log(word)
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
    console.log("footer Render")
    console.log(this.state.screen)
    switch(this.state.screen){

      case "":
        return this.showMainMenu()
      case "add":
        return <Add screen="" />
      case "find":
        return <Find/>
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
