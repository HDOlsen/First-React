import React, { Component } from 'react';
import {Menu} from './components/Menu';
import {SubMenu} from './components/SubMenu'
import {Demo} from './components/Demo'
import './App.css';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div id="container">

      <Menu />

      <SubMenu />

      <Demo />

    </div>
  );
}
}

export default App;
