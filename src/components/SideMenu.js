import React, { Component } from "react";
import SideBarMenuItem from "./SideBarMenuItem";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSideMenu: [
        {
          id: "0",
          label: "Trang chủ",
          icon: "home",
          isActive: true,
          path: "home",
        },
        {
          id: "1",
          label: "Thời khoá biểu",
          icon: "calendar",
          isActive: false,
          path: "timetable",
        },
        {
          id: "2",
          label: "Quản lý mục tiêu",
          icon: "target",
          isActive: false,
          path: "target",
        },
        {
          id: "3",
          label: "Danh sách phương án",
          icon: "entrance",
          isActive: false,
          path: "listPlan",
        },
        {
          id: "4",
          label: "Bảng điểm",
          icon: "score",
          isActive: false,
          path: "score",
        },
        {
          id: "5",
          label: "Làm bài tập",
          icon: "exercise",
          isActive: false,
          path: "exercise",
        },
        {
          id: "6",
          label: "Đánh giá khả năng đỗ",
          icon: "ability",
          isActive: false,
          path: "ability",
        },
      ],
    };
  }

  onChangeMenu = (item) => {
    const { listSideMenu } = this.state;
    listSideMenu.map((item) => {
      item.isActive = false;
    });
    this.props.onChangeTab(item);
    listSideMenu[item].isActive = true;
    this.setState({ listSideMenu });
  };
  render() {
    const { onChangeMenu } = this;
    const { listSideMenu } = this.state;

    return (
      <div style={styles.sideMenu}>
        <div className="customBtn noselect" style={styles.title}>
          TheTester
        </div>
        <div style={styles.devider}></div>
        {listSideMenu.map((item) => (
          <SideBarMenuItem
            onChangeMenu={onChangeMenu}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    );
  }
}

const styles = {
  devider: {
    height: "1px",
    background: "#7D72A7",
  },
  title: {
    fontSize: "17px",
    color: "#FFFFFF",
    fontWeight: "700px",
    marginLeft: "16px",
    lineHeight: "44px",
  },
  sideMenu: {
    background: "#736198",
    width: "100%",
  },
};
