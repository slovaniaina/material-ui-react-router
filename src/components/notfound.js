import React, { Component }  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './navbar';

class Notfound extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar color="primary" position="static">
                {/* <h1>My header</h1> */}
                <Toolbar>
                    <TypoGraphy variant="title" color="inherit">My Header</TypoGraphy>
                    <NavBar />
                </Toolbar>
                </AppBar>
                <h1>Not found</h1>
            </React.Fragment>
        );
    }
}

export default Notfound