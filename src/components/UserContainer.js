import React, { Component } from "react";
import { Button } from "antd";

export default class UserContainer extends Component {
  render() {
    return (
      <div style={styles.userContainer}>
        <Button onClick={this.props.showModal} style={styles.button}>
          Đăng nhập
        </Button>
      </div>
    );
  }
}

const styles = {
  userContainer: {
    height: "8vh",
    backgroundColor: "#1D203E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: "92vh",
    borderRight: "1px solid #5A5D70",
  },
  button: {
    backgroundColor: "#393D5D",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    height: "38px",
  },
};
