import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import Posts from "./screens/Posts";
import AddPost from "./screens/AddPost";
import HomeScreen from "./screens/HomeScreen";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">MyAPP</Typography>
              <div
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 10,
                }}
              >
                <Link to="/">
                  <Button variant="contained" color="secondary">
                    Home
                  </Button>
                </Link>
                <Link to="/posts">
                  <Button variant="contained" color="secondary">
                    Posts
                  </Button>
                </Link>
                <Link to="/addpost">
                  <Button variant="contained" color="secondary">
                    Add Post
                  </Button>
                </Link>
              </div>
            </Toolbar>
          </AppBar>

          <Container maxWidth="lg">
            <Switch>
              <Route path="/posts">
                <Posts />
              </Route>
              <Route path="/addpost">
                <AddPost />
              </Route>
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default Nav;
