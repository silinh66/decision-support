import { Image } from "antd";
import { round } from "lodash";
import React, { Component } from "react";
import { getLocalData } from "../services/StoreService";
export default class ResultModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {},
    };
  }

  componentDidMount() {
    if (getLocalData("account")) {
      this.setState({
        account: getLocalData("account"),
      });
    }
  }
  render() {
    const { onCloseModal, count, total, time } = this.props;
    const { account } = this.state;
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
          <div style={styles.text}>{account && account.name}</div>
        </div>
        <div style={styles.row}>
          <div style={styles.iconContainer}>
            <Image
              preview={false}
              src={require(`../asssets/Images/star.png`)}
            ></Image>
          </div>
          <div style={styles.text}>Số câu đúng:</div>
          <div style={styles.text}>
            {count}/{total}
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.iconContainer}>
            <Image
              preview={false}
              src={require(`../asssets/Images/scores.png`)}
            ></Image>
          </div>
          <div style={styles.text}>Điểm số:</div>
          <div style={styles.text}>{round((count / total) * 10, 2)}/10</div>
        </div>
        <div style={styles.row}>
          <div style={styles.iconContainer}>
            <Image
              preview={false}
              src={require(`../asssets/Images/clock.png`)}
            ></Image>
          </div>
          <div style={styles.text}>Thời gian:</div>
          <div style={styles.text}>84:56</div>
        </div>
        <button
          className="customBtn noselect"
          onClick={onCloseModal}
          style={styles.loginBtn}
        >
          Xem đáp án
        </button>
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
    backgroundColor: "#B38EE6",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    height: "44px",
    width: "100%",
    marginBottom: "20px",
    marginTop: "5px",
    fontSize: "20px",
  },
  loginBtn: {
    width: "100%",
    height: "55px",
    backgroundColor: "#B38EE6",
    color: "#fff",
    borderRadius: "10px",
    border: "1px solid #393D5D",
    marginBottom: "10px",
  },
};
