import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Nav extends Component {
  render() {
    return (
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
              <Button style={{ color: "white" }}>Home</Button>
              <Button style={{ color: "white" }}>Home</Button>
              <Button style={{ color: "white" }}>Home</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Nav;
