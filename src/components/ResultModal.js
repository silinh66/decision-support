import React, { Component } from "react";
import { Image, Button } from "antd";
export default class ResultModal extends Component {
  render() {
    const { onCloseModal } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.iconContainer}>
            <Image
              preview={false}
              src={require(`../asssets/Images/username.png`)}
            ></Image>
          </div>
          <div style={styles.text}>Học sinh:</div>
          <div style={styles.text}>Hà Bảo Khiêm</div>
        </div>
        <div style={styles.row}>
          <div style={styles.iconContainer}>
            <Image
              preview={false}
              src={require(`../asssets/Images/star.png`)}
            ></Image>
          </div>
          <div style={styles.text}>Số câu đúng:</div>
          <div style={styles.text}>47/50</div>
        </div>
        <div style={styles.row}>
          <div style={styles.iconContainer}>
            <Image
              preview={false}
              src={require(`../asssets/Images/scores.png`)}
            ></Image>
          </div>
          <div style={styles.text}>Điểm số:</div>
          <div style={styles.text}>9.4/10</div>
        </div>
        <div style={styles.row}>
          <div style={styles.iconContainer}>
            <Image
              preview={false}
              src={require(`../asssets/Images/clock.png`)}
            ></Image>
          </div>
          <div style={styles.text}>Thời gian:</div>
          <div style={styles.text}>84:36</div>
        </div>
        <Button onClick={onCloseModal} style={styles.button}>
          Xem đáp án
        </Button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "block",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "#2C2F48",
    borderRadius: "0 0 20px 20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
  },
  row: {
    display: "flex",
    // justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center",
    borderBottom: "1px solid #5A5D70",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  text: {
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "36px",
    color: "#FFFFFF",
    width: "30%",
  },
  iconContainer: {
    width: "10%",
  },
  button: {
    backgroundColor: "#393D5D",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    height: "44px",
    width: "100%",
    marginBottom: "20px",
    marginTop: "5px",
    fontSize: "20px",
  },
};
