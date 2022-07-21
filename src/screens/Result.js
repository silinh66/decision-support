import { get } from "lodash";
import React, { Component } from "react";
import Question from "../components/Question";
import { listQuestions } from "../fakeData/listQuestions";
import { listQuestionSets } from "../fakeData/listQuestionSets";
import { Button, Modal } from "antd";
import { Navigate } from "react-router-dom";

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      currentQuestionSet: {},
      time: {},
      seconds: 5400,
      listAnswer: [],
      isModalVisible: false,
      showResult: false,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    const idQuestionSet = window.location.pathname.split("/")[3];
    this.setState({
      questionList: listQuestions.filter((question) => {
        return question.idQuestionSet == idQuestionSet;
      }),
      currentQuestionSet: listQuestionSets.find((questionSet) => {
        return questionSet.id == idQuestionSet;
      }),
      listAnswer: listQuestions.map((question) => {
        return {
          id: question.id,
          answer: "",
        };
      }),
    });
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    // this.startTimer();
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(secs / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  onChangeAnswer = (id, answer) => {
    const { listAnswer } = this.state;
    const newListAnswer = listAnswer.map((item) => {
      if (item.id == id) {
        item.answer = answer;
      }
      return item;
    });
    this.setState({ listAnswer: newListAnswer });
  };

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  onCloseModal = () => {
    this.setState({
      isModalVisible: false,
      showResult: true,
    });
  };
  render() {
    const { onChangeAnswer, showModal, handleOk, handleCancel } = this;
    const {
      questionList,
      currentQuestionSet,
      listAnswer,
      isModalVisible,
      showResult,
    } = this.state;
    return (
      <div style={styles.contentComponent}>
        <div style={styles.stickyHeader}>
          <div style={styles.titleHeader}>
            <div style={styles.title}>
              Đề thi năm {get(currentQuestionSet, "year", "")}{" "}
              <span style={styles.span}>{">"}</span>{" "}
              {get(currentQuestionSet, "name", "")}
            </div>
            <div style={styles.seeMore}>
              <span style={styles.time}>Thời gian: </span>{" "}
              {this.state.time.m < 10
                ? `0${this.state.time.m}`
                : this.state.time.m}{" "}
              :{" "}
              {this.state.time.s < 10
                ? `0${this.state.time.s}`
                : this.state.time.s}
            </div>
          </div>
          <div style={styles.description}>
            Đề thi được thu thập và tổng hợp từ các bộ đề của bộ GD&ĐT năm
            2020-2021.
          </div>
        </div>
        <div style={styles.questionList}>
          {questionList.map((question) => {
            return (
              <Question
                key={question.id}
                question={question}
                answer={listAnswer[question.id]}
                onChangeAnswer={onChangeAnswer}
              />
            );
          })}
        </div>
        <div style={styles.stickyBottom}>
          <Button onClick={showModal} style={styles.button}>
            Nộp bài thi
          </Button>
        </div>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          title="Kết quả"
          onCancel={handleCancel}
          footer={null}
          centered
          style={styles.modal}
          closable={false}
        >
          <Result closeModal={handleCancel} />
        </Modal>
      </div>
    );
  }
}

const styles = {
  contentComponent: {
    // marginLeft: "24px",
    // marginRight: "28px",
    // paddingTop: "20px",
  },
  title: {
    fontFamily: "SF Compact Rounded",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#FFFFFF",
    marginBottom: "0px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  titleHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    alignItems: "center",
  },
  seeMore: {
    fontFamily: "SF Compact Rounded Normal",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "18px",
    color: "rgba(255, 255, 255, 0.25)",
  },
  description: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "18px",
    color: "rgba(255, 255, 255, 0.55)",
    paddingBottom: "20px",
  },
  time: {
    fontSize: "20px",
    marginRight: "5px",
    fontWeight: "400",
  },
  span: {
    marginLeft: "5px",
    marginRight: "5px",
  },
  stickyHeader: {
    position: "sticky",
    top: "44px",
    zIndex: 999,
    backgroundColor: "#1D203E",
    paddingTop: "20px",
    borderBottom: "1px solid #5A5D70",
    paddingLeft: "24px",
    paddingRight: "28px",
    marginBottom: "10px",
  },
  stickyBottom: {
    position: "sticky",
    bottom: "0px",
    zIndex: 999,
    backgroundColor: "#1D203E",
    // paddingTop: "20px",
    height: "8vh",
    borderTop: "1px solid #5A5D70",
    paddingLeft: "24px",
    paddingRight: "28px",
    // marginBottom: "10px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  questionList: {
    marginLeft: "24px",
    marginRight: "28px",
  },
  button: {
    backgroundColor: "#8A6AD8",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    height: "38px",
  },
  modal: {
    padding: 0,
  },
};
