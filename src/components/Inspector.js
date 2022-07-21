import React, { Component } from "react";
import { Image } from "antd";
import FriendItem from "./FriendItem";
import { listFriends } from "../fakeData/listFriends";
import { listRecentActivity } from "../fakeData/listRecentActivity";
import ActivityItem from "./ActivityItem";
export default class Inspector extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Image
            className="customBtn noselect"
            preview={false}
            src={require("../asssets/Images/mail.png")}
          />
          <Image
            className="customBtn noselect"
            preview={false}
            src={require("../asssets/Images/chat.png")}
          />
          <Image
            className="customBtn noselect"
            preview={false}
            src={require("../asssets/Images/bell.png")}
          />
        </div>
        <div style={styles.avatarContainer}>
          <div style={styles.looperGroup}>
            <Image
              preview={false}
              src={require("../asssets/Images/LooperGroup.png")}
            />
          </div>
          <div style={styles.avaHex}>
            <Image
              preview={false}
              src={require("../asssets/Images/avaHex.png")}
            />
          </div>
          <div>
            <Image
              preview={false}
              style={styles.avatar}
              src={require("../asssets/Images/avatar.png")}
            />
          </div>

          <div style={styles.name}>Hà Bảo Khiêm</div>
          <div style={styles.job}>Học sinh</div>
        </div>
        <div className="leftBar" style={styles.leftBar}>
          <div style={styles.listFriends}>
            <div style={styles.titleHeader}>
              <div style={styles.title}>Bạn bè</div>
              <div className="customBtn noselect" style={styles.seeMore}>
                Xem thêm
              </div>
            </div>
            {listFriends.map((item, index) => (
              <FriendItem key={item.key} item={item} />
            ))}
          </div>
          <div style={styles.listActivity}>
            <div style={styles.titleHeader}>
              <div style={styles.title}>Hoạt động gần đây</div>
              <div className="customBtn noselect" style={styles.seeMore}>
                Xem thêm
              </div>
            </div>
            {listRecentActivity.map((item, index) => (
              <ActivityItem key={item.key} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    // height: "150vh",
    backgroundColor: "#2C2F48",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
    // position: "sticky",
    // top: "100vh",
    // width: "100%",
    borderLeft: "1px solid #5A5D70",
    // overflowY: "auto",
  },
  header: {
    textAlign: "center",
    height: "44px",
    minHeight: "44px",
    backgroundColor: "#2C2F48",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingRight: "30px",
    paddingLeft: "30px",

    borderBottom: "1px solid #5A5D70",
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // position: "relative",
    // width: "100%",
  },
  looperGroup: {
    position: "absolute",
    top: 0,
    zIndex: "1",
    marginTop: "50px",
  },
  avaHex: {
    position: "absolute",
    // right: 0,
    top: "70px",
    zIndex: "1",
    marginTop: "50px",
  },
  name: {
    fontWeight: "700",
    fontSize: "24px",
    color: "#ffffff",
  },
  job: {
    color: "rgba(255, 255, 255, 0.25)",
    fontWeight: "400",
    fontSize: "18px",
  },
  avatar: {
    position: "relative",
    // width: "100px",
    // height: "100px",
    marginTop: "90px",
    marginBottom: "50px",
    // transform: "translateY(-21vh) translateX(0px)",
  },
  title: {
    fontWeight: "400",
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.55)",
  },
  titleHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    marginTop: "32px",
  },
  seeMore: {
    fontWeight: "400",
    fontSize: "16px",
    textAlign: "right",
    color: "rgba(255, 255, 255, 0.25)",
  },
  leftBar: {
    paddingLeft: "20px",
    paddingRight: "20px",
    overflowY: "auto",
  },
};
