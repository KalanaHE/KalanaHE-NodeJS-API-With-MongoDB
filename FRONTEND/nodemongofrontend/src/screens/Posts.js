import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class HomeScreen extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    const apiUrl = "http://localhost:4000/posts/";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
        console.log(this.state.posts);
      });
  }

  render() {
    return (
      <div>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.posts.map((post) => (
              <TableRow key={post._id}>
                <TableCell align="right">{post.title}</TableCell>
                <TableCell align="right">{post.description}</TableCell>
                <TableCell align="right">{post.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default HomeScreen;
