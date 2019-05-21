import React from 'react';
import {Route, Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './navbar';
import Userpage from './userpage';

class Users extends React.Component {
  render() {
    return (
        <React.Fragment>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <TypoGraphy variant="title" color="inherit">My Header</TypoGraphy>
                    <NavBar />
                </Toolbar>
            </AppBar>
            <h1>Users</h1>
            <strong>select a user</strong>
            <ul>
                <li>
                <Link to="/users/1">User 1 </Link>
                </li>
                <li>
                <Link to="/users/2">User 2 </Link>
                </li>
                <li>
                <Link to="/users/3">User 3 </Link>
                </li>
            </ul>
            <Route path="/users/:id" component={Userpage} />
        </React.Fragment>
    );
  }
}

export default Users