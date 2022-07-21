import React, { Component } from "react";
import { Image } from "antd";

export default class RecentActivityItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div style={styles.container}>
        <Image
          preview={false}
          src={require(`../asssets/Images/${item.image}.png`)}
          style={styles.image}
        />
        <div style={styles.itemContent}>
          {/* <p style={styles.title}>{item.title}</p>
          <p style={styles.description}>{item.description}</p> */}
          <div style={styles.views}>
            <Image
              style={styles.viewsIcon}
              preview={false}
              src={require(`../asssets/Images/views.png`)}
            />
            {"  "}
            {item.views}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "48%",
    // height: "35vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#1D203E",
  },
  image: {
    width: "100%",
    // height: "40vh",
    margin: 0,
    backgroundColor: "#1D203E",
    borderRadius: "32px",
  },
  itemContent: {
    position: "absolute",
  },
  title: {
    color: "#ffffff",
    fontSize: "28px",
    lineHeight: "28px",
    // top: "12%",
    // left: "38%",
    fontFamily: "SF Compact Rounded",
    fontWeight: "600",
  },
  description: {
    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.55)",
  },
  views: {
    // fontSize: "28px",
    // top: "12%",
    // left: "38%",
    fontWeight: "400",
    fontSize: "100%",
    lineHeight: "14px",
    color: "rgba(255, 255, 255, 0.25)",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  },
  viewsIcon: {
    width: "16px",
    marginRight: "6px",
  },
};
