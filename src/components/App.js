import React from 'react';
import { Link, IndexLink } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1><IndexLink to="/" activeClassName="activeLink">React Router tutorial</IndexLink></h1>
        <ul>
          <li><Link to="/coucou" activeClassName="activeLink">Coucou</Link></li>
          <li><Link to="/urlParams/one/two" activeClassName="activeLink">Url Params</Link></li>
          <li><Link to="/about" activeClassName="activeLink">About</Link></li>
          <li><Link to={{ pathname: '/query',
                          query: { message: 'Hello from Route Query' }
                        }} activeClassName="activeLink">query</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};

export default App;