import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => response.json())
      .then(json => this.setState({ users: json }));
  }
  render() {
    return (
      <section className="cardsContainer">
        {this.state.users.map(user => {
          return (
            <div className="card" key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{`${user.address.street} ${user.address.suite} ${user.address.city}`}</p>
              <p>{user.phone}</p>
              <p>
                <a href={user.website}>{`${user.name}'s website`}</a>
              </p>
              <p>{user.company.name}</p>
            </div>
          );
        })}
      </section>
    );
  }
}

export default App;
