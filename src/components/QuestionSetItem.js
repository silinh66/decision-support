import { Image } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class QuestionSetItem extends Component {
  onPickQuestionSet = () => {
    const { questionSet } = this.props;
    // this.props.onPickQuestionSet(questionSet);
  };
  render() {
    const { onPickQuestionSet } = this;
    const { questionSet } = this.props;
    return (
      <div
        className="customBtn noselect"
        style={styles.container}
        onClick={onPickQuestionSet}
      >
        <Link to={`exam/${questionSet.id}`}>
          <Image
            preview={false}
            src={require(`../asssets/Images/${questionSet.image}.png`)}
            style={styles.image}
          />
          <div style={styles.detailContainer}>
            <div style={styles.title}>{questionSet.name}</div>
            <div style={styles.description}>{questionSet.description}</div>
            <div style={styles.views}>
              <Image
                style={styles.viewsIcon}
                preview={false}
                src={require(`../asssets/Images/views.png`)}
              />
              {"  "}
              {questionSet.views} Người xem
            </div>
          </div>
          <Image
            className="polygon"
            preview={false}
            src={require(`../asssets/Images/${questionSet.icon}.png`)}
            style={styles.icon}
          />
        </Link>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "30%",
    height: "45vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: "50px",
    flexDirection: "column",
    // borderTop: "2px solid #07AFC2",
    // borderLeft: "2px solid #07AFC2",
    // borderRight: "2px solid #434686",
    // borderBottom: "2px solid #434686",
    borderRadius: "32px",
    marginBottom: "-120px",
  },
  image: {
    width: "100%",
    height: "250px",
    margin: 0,
    borderRadius: "32px",
  },
  title: {
    fontFamily: "SF Compact Rounded",
    fontWeight: "600",
    fontSize: "26px",
    lineHeight: "36px",
    color: "#FFFFFF",
  },
  detailContainer: {
    backgroundColor: "#393D5E",
    borderRadius: "32px",
    width: "100%",
    // width: "28.4%",
    height: "20vh",
    // transform: "translateY(40%) translateX(0px)",
    transform: "translateY(-75%) translateX(0px)",
    paddingTop: "30px",
    paddingLeft: "20px",
    // position: "absolute",
    zIndex: "1",
    borderTop: "2px solid #07AFC2",
    borderBottom: "2px solid #07AFC2",
    borderLeft: "2px solid #07AFC2",
    borderRight: "2px solid #07AFC2",
  },
  description: {
    color: " rgba(255, 255, 255, 0.55)",
    fontWeight: "400",
    fontSize: "16px",
    marginTop: "10px",
  },
  views: {
    // fontSize: "28px",
    // top: "12%",
    // left: "38%",
    fontWeight: "400",
    fontSize: "100%",
    lineHeight: "14px",
    color: "rgba(255, 255, 255, 0.25)",
    display: "flex",
    marginTop: "8%",
    alignItems: "center",
  },
  viewsIcon: {
    width: "16px",
    marginRight: "6px",
  },
  icon: {
    width: "100px",
    height: "100px",
    zIndex: "2",
    position: "absolute",
    top: "-40vh",
    left: "20vh",
  },
};
