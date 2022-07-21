import React, { Component } from "react";
import { Image } from "antd";

export default class FriendItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div style={styles.container}>
        <Image
          preview={false}
          src={require(`../asssets/Images/${item.avatar}.png`)}
          style={styles.avatar}
        />
        <div style={styles.info}>
          <div style={styles.friendName}>{item.label}</div>
          <div style={styles.activeStatus}>{item.activeStatus}</div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    background: "#393D5D",
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "7px",
  },
  avatar: {
    // marginRight: "10px",
  },
  info: {
    marginLeft: "10px",
  },
  friendName: {
    fontWeight: "400",
    fontSize: "18px",
    color: "#FFFFFF",
  },
  activeStatus: {
    fontSize: "15px",
    color: "rgba(255, 255, 255, 0.25)",
  },
};
