import React, { Component } from 'react';
import { UserContext } from './user-context';
import Header from './Header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: 'Nikola Tesla',
        avatarUrl: 'https://avatars3.githubusercontent.com/u/10001',
      },
    };
  }

  render() {
    return (
      <div className="page">
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
