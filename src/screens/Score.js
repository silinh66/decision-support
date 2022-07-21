import React, { Component } from "react";
import Empty from "../components/Empty";

export default class Score extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Empty />
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};
