import React, { Component } from "react";
import { Image } from "antd";

export default class AccessPermissionItem extends Component {
  onChangePermission = () => {
    const { onChangePermission, item } = this.props;
    onChangePermission(item.key);
  };
  render() {
    const { onChangePermission } = this;
    const { label, isSelected } = this.props;
    return (
      <div
        onClick={onChangePermission}
        style={styles.logo}
        className="customBtn noselect"
      >
        <Image
          src={require(`../asssets/Images/${label}.png`)}
          preview={false}
          style={styles.logoImg}
        />
        {isSelected && (
          <>
            <img
              src={require("../asssets/Images/selected.png")}
              style={styles.selected}
            />
            <img
              src={require("../asssets/Images/selectedEffect.png")}
              style={styles.selectedEffect}
            />
            <img
              src={require("../asssets/Images/selectedBorder.png")}
              style={styles.logoBorder}
            />
          </>
        )}
      </div>
    );
  }
}

const styles = {
  logo: {
    width: "40px",
    height: "40px",
    marginTop: "16px",
    marginBottom: "16px",
    background: "rgba(0, 0, 0, 0.2)",
    borderRadius: "22px",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
    display: "flex",
  },
  logoImg: {
    width: "32px",
    height: "32px",
  },
  selected: {
    position: "absolute",
    display: "block",
    left: "5px",
  },
  selectedEffect: {
    position: "absolute",
    display: "block",
    left: "20%",
    zIndex: "-1",
    filter: "blur(4px)",
    width: "60px",
    height: "60px",
  },
  logoBorder: {
    position: "absolute",
    display: "block",
    left: "32%",
    width: "40px",
    height: "40px ",
  },
};
