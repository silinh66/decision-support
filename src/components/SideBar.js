import React, { Component } from "react";
import { Image } from "antd";
import AccessPermissionItem from "./AccessPermissionItem";

import barSvg from "../asssets/Images/bar.svg";
export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAccessPermission: [],
    };
  }

  componentDidMount() {
    if (this.props.account) {
      if (this.props.account.permission === 0) {
        this.setState({
          listAccessPermission: this.props.isLogin
            ? [
                {
                  key: "0",
                  label: "manager",
                  selected: false,
                },
                {
                  key: "1",
                  label: "student",
                  selected: true,
                },
              ]
            : [
                {
                  key: "0",
                  label: "manager",
                  selected: false,
                },
                {
                  key: "1",
                  label: "student",
                  selected: false,
                },
              ],
        });
      }
    } else if (this.props.account.permission === 1) {
      this.setState({
        listAccessPermission: this.props.isLogin
          ? [
              {
                key: "0",
                label: "manager",
                selected: true,
              },
              {
                key: "1",
                label: "student",
                selected: false,
              },
            ]
          : [
              {
                key: "0",
                label: "manager",
                selected: false,
              },
              {
                key: "1",
                label: "student",
                selected: false,
              },
            ],
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (prevProps.isLogin !== this.props.isLogin) {
        this.setState({
          listAccessPermission: this.props.isLogin
            ? [
                {
                  key: "0",
                  label: "manager",
                  selected: true,
                },
                {
                  key: "1",
                  label: "student",
                  selected: false,
                },
              ]
            : [
                {
                  key: "0",
                  label: "manager",
                  selected: false,
                },
                {
                  key: "1",
                  label: "student",
                  selected: false,
                },
              ],
        });
      }
      if (prevProps.account !== this.props.account) {
        if (this.props.account.permission === 0) {
          this.setState({
            listAccessPermission: this.props.isLogin
              ? [
                  {
                    key: "0",
                    label: "manager",
                    selected: false,
                  },
                  {
                    key: "1",
                    label: "student",
                    selected: true,
                  },
                ]
              : [
                  {
                    key: "0",
                    label: "manager",
                    selected: false,
                  },
                  {
                    key: "1",
                    label: "student",
                    selected: false,
                  },
                ],
          });
        } else if (this.props.account.permission === 1) {
          this.setState({
            listAccessPermission: this.props.isLogin
              ? [
                  {
                    key: "0",
                    label: "manager",
                    selected: true,
                  },
                  {
                    key: "1",
                    label: "student",
                    selected: false,
                  },
                ]
              : [
                  {
                    key: "0",
                    label: "manager",
                    selected: false,
                  },
                  {
                    key: "1",
                    label: "student",
                    selected: false,
                  },
                ],
          });
        }
      }
    }
  }

  onChangePermission = (key) => {
    const { listAccessPermission } = this.state;
    const newListAccessPermission = listAccessPermission.map((item) => {
      if (item.key === key) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    });
    if (this.props.isLogin && this.props.account.permission === 1) {
      this.setState({ listAccessPermission: newListAccessPermission });
      this.props.onChangePermission(key);
    }
  };

  render() {
    const { onChangePermission } = this;
    const { listAccessPermission } = this.state;
    return (
      <div style={styles.mainContent}>
        <Image
          className="customBtn noselect"
          src={require("../asssets/Images/logo.png")}
          style={styles.logo}
          preview={false}
        />
        <div style={styles.bar}>
          {listAccessPermission.map((item) => (
            <AccessPermissionItem
              onChangePermission={onChangePermission}
              isSelected={item.selected}
              key={item.key}
              label={item.label}
              item={item}
              permission={this.props.account.permission}
            />
          ))}
          <Image
            className="customBtn noselect"
            src={require("../asssets/Images/addIcon.png")}
            style={styles.addIcon}
            preview={false}
          />
        </div>
        <img style={styles.barSvg} src={barSvg} alt="barSvg" />
      </div>
    );
  }
}

const styles = {
  addIcon: {
    width: "40px",
    height: "40px",
    marginTop: "16px",
    marginBottom: "16px",
    borderRadius: "22px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    background: "#443e69",
    backgroundColor: "#443e69",
  },
  bar: {
    paddingTop: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  mainContent: {
    display: "block",
    zIndex: "8",
    background: "#8970B4",
    backdropFilter: "blur(20px)",
    textAlign: "center",
    width: "100%",
  },
  barSvg: {
    // width: "95%",
    // height: "120%",
    position: "absolute",
    zIndex: "-1",
    display: "block",
    top: "2%",
    left: "10%",
  },
  logo: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginTop: "32px",
    marginBottom: "18px",
  },
};
