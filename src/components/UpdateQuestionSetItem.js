import { Image, Modal } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { removeQuestionSetAPI } from "../api/ApiQuestion";
import ModalDeleteQuestionSet from "./ModalDeleteQuestionSet";

export default class UpdateQuestionSetItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      icon: "mathIcon",
    };
  }

  componentDidMount() {
    let icon = "mathIcon";
    if (this.props.icon === 0) {
      icon = "mathIcon";
    }
    if (this.props.icon === 1) {
      icon = "physicIcon";
    }
    if (this.props.icon === 2) {
      icon = "chemistryIcon";
    }
    this.setState({
      icon,
    });
  }

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
    const payload = {
      id_topic: this.props.questionSet.id,
      des: this.props.questionSet.description,
      level: this.props.questionSet.level,
      total: 50,
      status: 0,
      image: this.props.questionSet.image,
    };
    const response = removeQuestionSetAPI(payload);
    console.log("response: ", response);
    this.props.onGetListOptionQuestionSet();
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  onPickQuestionSet = () => {
    // const { questionSet } = this.props;
    // this.props.onPickQuestionSet(questionSet);
  };
  render() {
    const { onPickQuestionSet, showModal, handleOk, handleCancel } = this;
    const { questionSet, isTwoQuestionSet } = this.props;
    const { isModalVisible, icon } = this.state;
    return (
      <div
        style={isTwoQuestionSet ? styles.containerTwo : styles.container}
        onClick={onPickQuestionSet}
      >
        <Link className="disabled-link" to={`exam/${questionSet.id}`}>
          <Image preview={false} src={questionSet.image} style={styles.image} />
          <div style={styles.detailContainer}>
            <div style={styles.title}>{questionSet.description}</div>
            <div style={styles.description}>{questionSet.level}</div>
            <div style={styles.views}>
              <Image
                style={styles.viewsIcon}
                preview={false}
                src={require(`../asssets/Images/views.png`)}
              />
              {"  "}
              4987 Người xem
            </div>
          </div>

          <Image
            className="polygon"
            preview={false}
            src={require(`../asssets/Images/${icon}.png`)}
            style={styles.icon}
          />
        </Link>
        <Image
          className="customBtn noselect"
          onClick={showModal}
          style={styles.optionIcon}
          preview={false}
          src={require(`../asssets/Images/option.png`)}
        />
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          title="Thông báo"
          onCancel={handleCancel}
          footer={null}
          centered
          style={styles.modal}
        >
          <ModalDeleteQuestionSet handleOk={handleOk} />
        </Modal>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "30%",
    // height: "45vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    // marginBottom: "50px",
    flexDirection: "column",
    // borderTop: "2px solid #07AFC2",
    // borderLeft: "2px solid #07AFC2",
    // borderRight: "2px solid #434686",
    // borderBottom: "2px solid #434686",
    borderRadius: "32px",
    marginBottom: "-12vh",
  },
  containerTwo: {
    width: "30%",
    // height: "45vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    // marginBottom: "50px",
    flexDirection: "column",
    // borderTop: "2px solid #07AFC2",
    // borderLeft: "2px solid #07AFC2",
    // borderRight: "2px solid #434686",
    // borderBottom: "2px solid #434686",
    borderRadius: "32px",
    marginBottom: "-12vh",
    marginRight: "55px",
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
  optionIcon: {
    zIndex: "2",
    position: "absolute",
    top: "-48vh",
    left: "-2vh",
    width: "25px",
    height: "25px",
  },
};
