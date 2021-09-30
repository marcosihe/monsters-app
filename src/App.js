import React, { Component } from "react";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";
import "./App.css";

const URL = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <>
        <header>
          <h1>Monsters Rolodex</h1>
        </header>
        <main className="main-container">
          <SearchBox
            handleChange={this.handleChange}
            placeholder={"search monsters"}
          />
          <CardList monsters={filteredMonsters} />
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
