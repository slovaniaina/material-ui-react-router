import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import Users from './components/users';
import Contact from './components/contact';
import PostsPage from './components/postspage';
import Notfound from './components/notfound';
import DummyListPage from './components/dummylists'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts" component={PostsPage} />
            <Route path="/dummy" component={DummyListPage} />
            <Route component= {Notfound} />
        </Switch>
      </div>
    </Router>
  )

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
