import React from 'react';
import { UserContext } from './user-context';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: 'Nikola Tesla',
        avatar_url: 'https://avatars3.githubusercontent.com/u10001',
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
