import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Home, Book, AccountBox, AccountCircle } from '@material-ui/icons';


function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink exact activeClassName="active" to="/">
                            Home <Home />
                        </NavLink>  
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink activeClassName="active" to ="/posts">
                            Posts <Book />
                        </NavLink>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink activeClassName="active" to ="/users">
                            Users <AccountCircle />
                        </NavLink>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink activeClassName="active" to ="/contact">
                            Contact <AccountBox />
                        </NavLink>
                    </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
    )
}


export default NavBar;