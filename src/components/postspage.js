import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './navbar'
import Posts from './posts'
class PostsPage extends Component {
  render() {
    return (
    <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">My Header</TypoGraphy>
            <NavBar />
          </Toolbar>
        </AppBar>
        <Posts />
    </div>
    );
  }
}
export default PostsPage;