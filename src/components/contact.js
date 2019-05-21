import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './navbar';
import { FormControl, InputLabel, Input, Button, TextField } from '@material-ui/core';

class Contact extends React.Component {
    onSubmit = () => {
        console.log(this.props);
        this.props.history.push('/');
    }

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
                <div
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 20,
                    padding: 20
                    }}
                >
                    <form style={{ width: "50%" }}>
                        <h1>Contact Form</h1>
                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input id="name" type="text" />
                        </FormControl>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="email" />
                        </FormControl>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="email">Message</InputLabel>
                            <Input id="email" multiline rows={10} />
                        </FormControl>
                        <Button variant="contained" color="primary" size="medium" onClick = {this.onSubmit}>
                            Send
                        </Button>
                    </form>
                </div>
                
            </React.Fragment>
        );
      }
}

export default Contact;