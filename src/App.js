import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './components/navbar'
import Posts from './components/posts'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">My Header</TypoGraphy>
            <NavBar />
          </Toolbar>
        </AppBar>
        <h1>This is the homepage</h1>
      </React.Fragment>
    );
  }
}
export default App;
