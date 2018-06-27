import React from 'react';



class Find extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      screen: ""
    }

  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/recipes")
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <div>
        <p>Find</p>
        <input type="text"/>
      </div>

    )
  }
}

export default Find;
