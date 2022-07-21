import React, { Component } from "react";
import { Image, Button } from "antd";
import RecentActivityItem from "../components/RecentActivityItem";
import RecentTrendItem from "../components/RecentTrendItem";
import RecentSubjectItem from "../components/RecentSubjectItem";
import { listRecentActivities } from "../fakeData/recentActivity";
import { listRecentTrends } from "../fakeData/recentTrend";
import { listRecentSubjects } from "../fakeData/recentSubject";

export default class HomeContent extends Component {
  render() {
    return (
      <div>
        <div style={styles.contentComponent}>
          <div style={styles.banner}>
            <Image
              preview={false}
              style={styles.bannerImg}
              src={require("../asssets/Images/banner.png")}
            ></Image>
            {/* <p style={styles.bannerText}>
              Tìm kiếm tương lai <br /> phù hợp với bản thân
            </p> */}
          </div>
          <div style={styles.recentActivityContainer}>
            <div style={styles.titleHeader}>
              <div style={styles.title}>Hoạt động gần đây</div>
              <div className="customBtn noselect" style={styles.seeMore}>
                Xem thêm
              </div>
            </div>

            <div style={styles.recentContainer}>
              {listRecentActivities.map((item, index) => (
                <RecentActivityItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div style={styles.recentTrendContainer}>
            <div style={styles.titleHeader}>
              <div style={styles.title}>Đang thịnh hành gần đây</div>
              <div className="customBtn noselect" style={styles.seeMore}>
                Xem thêm
              </div>
            </div>
            <div style={styles.recentContainer}>
              {listRecentTrends.map((item, index) => (
                <RecentTrendItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div style={styles.recentSubjectContainer}>
            <div style={styles.titleHeader}>
              <div style={styles.title}>Môn học thêm gần đây</div>
              <div className="customBtn noselect" style={styles.seeMore}>
                Xem thêm
              </div>
            </div>
            <div style={styles.recentContainer}>
              {listRecentSubjects.map((item, index) => (
                <RecentSubjectItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        {/* <div style={styles.stickyBottom}>
        </div> */}
      </div>
    );
  }
}

const styles = {
  input: {
    width: "642px",
    height: "24px",
    backgroundColor: "#2A2C47",
    borderRadius: "4px",
    color: "#fff",
    fontFamily: "Arial, FontAwesome",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  searchComponent: {
    textAlign: "center",
    height: "44px",
    backgroundColor: "#2C2F48",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  contentComponent: {
    marginLeft: "24px",
    marginRight: "28px",
  },
  banner: {
    marginTop: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImg: {
    width: "100%",
    borderRadius: "20px",
  },
  bannerText: {
    color: "#ffffff",
    fontSize: "28px",
    position: "absolute",
    // top: "12%",
    // left: "38%",
    textAlign: "center",
    fontFamily: "SF Compact Rounded",
    fontWeight: "600",
  },
  title: {
    fontFamily: "SF Compact Rounded",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#FFFFFF",
    marginBottom: "10px",
  },
  titleHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    marginTop: "32px",
    alignItems: "center",
  },
  seeMore: {
    fontFamily: "SF Compact Rounded Normal",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "18px",
    color: "rgba(255, 255, 255, 0.55)",
  },
  recentContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  // stickyBottom: {
  //   position: "sticky",
  //   bottom: "0px",
  //   zIndex: 999,
  //   backgroundColor: "#1D203E",
  //   // paddingTop: "20px",
  //   height: "8vh",
  //   borderTop: "1px solid #5A5D70",
  //   paddingLeft: "24px",
  //   paddingRight: "28px",
  //   // marginBottom: "10px",
  //   display: "flex",
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  // },
};
