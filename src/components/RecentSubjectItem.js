import React, { Component } from "react";
import { Image } from "antd";

export default class RecentSubjectItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div style={styles.container}>
        <Image
          preview={false}
          src={require(`../asssets/Images/${item.image}.png`)}
          style={styles.image}
        ></Image>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "30%",
    // height: "35vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: "50px",
  },
  image: {
    width: "100%",
    // height: "40vh",
    margin: 0,
    borderRadius: "32px",
  },
};
