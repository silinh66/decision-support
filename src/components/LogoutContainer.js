import React, { Component } from "react";
import { Button, Image } from "antd";
import { unregisterRefreshTokenAPI } from "../api/ApiAccount";
import { getLocalData, setLocalData } from "../services/StoreService";
import { get } from "lodash";

export default class LogoutContainer extends Component {
  onLogout = async () => {
    const tokenStorage = getLocalData("access_token");
    const payload = { token: get(tokenStorage, "tokenRefresh", "") };
    const response = await unregisterRefreshTokenAPI(payload);
    console.log("response: ", response);
    await setLocalData("access_token", "");
    await setLocalData("account", "");
    window.location.reload();
  };
  render() {
    const { onLogout } = this;
    const { account } = this.props;
    return (
      <div style={styles.userContainer}>
        <div style={styles.avaContainer}>
          <Image
            preview={false}
            //   style={styles.bannerImg}
            src={require("../asssets/Images/ava.png")}
          ></Image>
          <div style={styles.helloText}>
            Xin chào, {get(account, "name", "")}
          </div>
        </div>
        <Button onClick={onLogout} style={styles.button}>
          Đăng xuất
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
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: "92vh",
    borderRight: "1px solid #5A5D70",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  button: {
    backgroundColor: "#393D5D",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    height: "38px",
  },
  avaContainer: {
    display: "flex",
    alignItems: "center",
  },
  helloText: {
    color: "#ffffff",
    marginLeft: "10px",
  },
};
