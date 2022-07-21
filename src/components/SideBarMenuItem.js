import React, { Component } from "react";
import { Image } from "antd";

export default class SideBarMenuItem extends Component {
  onChangeMenu = () => {
    const { item } = this.props;
    this.props.onChangeMenu(item.id);
  };
  render() {
    const { onChangeMenu } = this;
    const { item } = this.props;
    return (
      <div
        className="customBtn noselect"
        style={item.isActive ? styles.slideBarItemActive : styles.slideBarItem}
        onClick={onChangeMenu}
      >
        <Image
          preview={false}
          src={require(`../asssets/Images/${item.icon}.png`)}
        />
        <div style={styles.label}>{item.label}</div>
      </div>
    );
  }
}

const styles = {
  slideBarItem: {
    display: "flex",
    padding: "10px 10px",
    borderRadius: "5px",
    margin: "12px 16px",
  },
  slideBarItemActive: {
    display: "flex",
    padding: "10px 10px",
    margin: "12px 16px",
    borderRadius: "5px",
    backgroundColor: "#2E275A",
  },
  label: {
    marginLeft: "10px",
    color: "#ffffff",
    fontSize: "17px",
  },
};
