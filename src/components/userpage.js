import React, { Component } from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

class Userpage extends React.Component {
    render() {
      const { params } = this.props.match;
      console.log(`id before render user ${params.id}`);
      return (
        <p>{params.id}</p>
      );
    }
  }
  
  export default Userpage