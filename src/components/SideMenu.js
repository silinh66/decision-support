import React, { Component } from "react";
import SideBarMenuItem from "./SideBarMenuItem";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSideMenu: [],
      activeMenuIndex: 0,
    };
  }

  componentDidMount() {
    if (this.props.isLogin) {
      this.setState({
        activeMenuIndex: 0,
        listSideMenu:
          this.props.permission === "1"
            ? [
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
              ]
            : [
                {
                  id: "0",
                  label: "Trang chủ",
                  icon: "home",
                  isActive: true,
                  path: "home",
                },
                {
                  id: "1",
                  label: "Cấp lại mật khẩu",
                  icon: "calendar",
                  isActive: false,
                  path: "resetPassword",
                },
                {
                  id: "2",
                  label: "Cập nhật bài tập",
                  icon: "update",
                  isActive: false,
                  path: "updateExercise",
                },
                {
                  id: "3",
                  label: "Đánh giá khả năng đỗ",
                  icon: "ability",
                  isActive: false,
                  path: "ability",
                },
              ],
      });
    } else {
      this.setState({
        activeMenuIndex: 0,
        listSideMenu: [
          {
            id: "0",
            label: "Trang chủ",
            icon: "home",
            isActive: true,
            path: "home",
          },
        ],
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (prevProps.permission !== this.props.permission) {
        this.setState({
          activeMenuIndex: 0,
          listSideMenu:
            this.props.permission === "1"
              ? [
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
                ]
              : [
                  {
                    id: "0",
                    label: "Trang chủ",
                    icon: "home",
                    isActive: true,
                    path: "home",
                  },
                  {
                    id: "1",
                    label: "Cấp lại mật khẩu",
                    icon: "calendar",
                    isActive: false,
                    path: "resetPassword",
                  },
                  {
                    id: "2",
                    label: "Cập nhật bài tập",
                    icon: "update",
                    isActive: false,
                    path: "updateExercise",
                  },
                  {
                    id: "3",
                    label: "Đánh giá khả năng đỗ",
                    icon: "ability",
                    isActive: false,
                    path: "ability",
                  },
                ],
        });
      }
      if (prevProps.isLogin !== this.props.isLogin) {
        if (this.props.isLogin) {
          this.setState({
            activeMenuIndex: 0,
            listSideMenu:
              this.props.permission === "1"
                ? [
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
                  ]
                : [
                    {
                      id: "0",
                      label: "Trang chủ",
                      icon: "home",
                      isActive: true,
                      path: "home",
                    },
                    {
                      id: "1",
                      label: "Cấp lại mật khẩu",
                      icon: "calendar",
                      isActive: false,
                      path: "resetPassword",
                    },
                    {
                      id: "2",
                      label: "Cập nhật bài tập",
                      icon: "update",
                      isActive: false,
                      path: "updateExercise",
                    },
                    {
                      id: "3",
                      label: "Đánh giá khả năng đỗ",
                      icon: "ability",
                      isActive: false,
                      path: "ability",
                    },
                  ],
          });
        } else {
          this.setState({
            listSideMenu: [
              {
                id: "0",
                label: "Trang chủ",
                icon: "home",
                isActive: true,
                path: "home",
              },
            ],
          });
        }
      }
    }
  }

  onChangeMenu = (item) => {
    const { listSideMenu } = this.state;
    listSideMenu.map((item) => (item.isActive = false));
    this.props.onChangeTab(item);
    listSideMenu[item].isActive = true;
    this.setState({ listSideMenu, activeMenuIndex: item });
  };
  render() {
    const { onChangeMenu } = this;
    const { listSideMenu, activeMenuIndex } = this.state;
    console.log("activeMenuIndex: ", activeMenuIndex);
    return (
      <div style={styles.sideMenu}>
        <div className="customBtn noselect" style={styles.title}>
          TheTester
        </div>
        <div style={styles.devider}></div>
        <div className="customBtn noselect">
        <div
          style={
            styles.slideBarItemActive(activeMenuIndex)
          }
        >
        </div>
      </div>
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
  slideBarItemActive: (index) => {
    return {
      margin: "12px 16px",
      borderRadius: "5px",
      backgroundColor: "#2E275A",
      height: 47,
      transition: '0.4s',
      transform: `translateY(${(+index+1)*58.7}px)`,
    }
  },
};
