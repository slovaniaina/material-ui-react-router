import React, { Component } from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
//import { posts } from "./dummy-posts";

class Posts extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          posts: []
        };
      }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => this.setState({ posts }));
    }

    render() {
        return (
            <div style={{ marginTop: 20, padding: 30 }}>
              <Grid container spacing={40} justify="center">
                {this.state.posts.map(post => (
                  <Grid item key={post.id}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image="https://cdn-images-1.medium.com/max/800/1*10kSRRSOjOOA5bY825Ckgw.jpeg"
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                          </Typography>
                          <Typography component="p">{post.title}</Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          );
    }
  
}

export default Posts;