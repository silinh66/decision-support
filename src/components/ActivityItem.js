import React, { Component } from "react";
import { Image } from "antd";

export default class ActivityItem extends Component {
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
          <div style={styles.friendName}>
            {item.name} <span style={styles.activity}>{item.activity}</span>
          </div>
          <div style={styles.time}>{item.time}</div>
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
    lineHeight: "20px",
  },
  time: {
    fontSize: "15px",
    color: "rgba(255, 255, 255, 0.25)",
  },
  activity: {
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.25)",
  },
};
