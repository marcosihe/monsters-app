import React, { Component } from "react";

const URL = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  constructor(){
    super()

    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch(URL)
      .then( res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div>
        {
          this.state.monsters.map( item => <h2 key={item.id}>{item.name}</h2>)
        }
      </div>
    );
  }
}

export default App;
