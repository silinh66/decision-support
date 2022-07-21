import React, { Component } from "react";
import { Image } from "antd";

export default class Empty extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Image
          preview={false}
          src={require("../asssets/Images/empty.png")}
        ></Image>
        <div style={styles.emptyText}>Available soon</div>
      </div>
    );
  }
}

const styles = {
  emptyText: {
    color: "#ffffff",
    fontSize: "20px",
    marginTop: "10px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};
