import React, { Component } from "react";
import { Image } from "antd";

export default class Question extends Component {
  onChangeAnswerA = () => {
    const { onChangeAnswer, answer } = this.props;
    onChangeAnswer(answer.id, "A");
  };
  onChangeAnswerB = () => {
    const { onChangeAnswer, answer } = this.props;
    onChangeAnswer(answer.id, "B");
  };
  onChangeAnswerC = () => {
    const { onChangeAnswer, answer } = this.props;
    onChangeAnswer(answer.id, "C");
  };
  onChangeAnswerD = () => {
    const { onChangeAnswer, answer } = this.props;
    onChangeAnswer(answer.id, "D");
  };
  render() {
    const {
      onChangeAnswerA,
      onChangeAnswerB,
      onChangeAnswerC,
      onChangeAnswerD,
    } = this;
    const { question, answer } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.question}>
          Câu {question.id}: {question.content}
        </div>
        <div style={styles.ansRow}>
          <div
            onClick={onChangeAnswerA}
            className="customBtn noselect"
            style={styles.ans}
          >
            <Image
              src={require(`../asssets/Images/${
                answer.answer == "A" ? "radioBtnActive" : "radioBtn"
              }.png`)}
              preview={false}
              style={styles.radioBtn}
            />
            <div style={answer.answer == "A" ? styles.ansActive : styles.ans}>
              A: {question.as_a}
            </div>
          </div>
          <div
            onClick={onChangeAnswerB}
            className="customBtn noselect"
            style={styles.ans}
          >
            <Image
              src={require(`../asssets/Images/${
                answer.answer == "B" ? "radioBtnActive" : "radioBtn"
              }.png`)}
              preview={false}
              style={styles.radioBtn}
            />
            <div style={answer.answer == "B" ? styles.ansActive : styles.ans}>
              B: {question.as_b}
            </div>
          </div>
        </div>
        <div style={styles.ansRow}>
          <div
            onClick={onChangeAnswerC}
            className="customBtn noselect"
            style={styles.ans}
          >
            <Image
              src={require(`../asssets/Images/${
                answer.answer == "C" ? "radioBtnActive" : "radioBtn"
              }.png`)}
              preview={false}
              style={styles.radioBtn}
            />
            <div style={answer.answer == "C" ? styles.ansActive : styles.ans}>
              C: {question.as_c}
            </div>
          </div>
          <div
            onClick={onChangeAnswerD}
            className="customBtn noselect"
            style={styles.ans}
          >
            <Image
              src={require(`../asssets/Images/${
                answer.answer == "D" ? "radioBtnActive" : "radioBtn"
              }.png`)}
              preview={false}
              style={styles.radioBtn}
            />
            <div style={answer.answer == "D" ? styles.ansActive : styles.ans}>
              D: {question.as_d}
            </div>
          </div>
        </div>
        <div style={styles.ansRow}></div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: "5px",
  },
  question: {
    color: "#fff",
    fontWeight: "400",
    fontSize: "16px",
    marginBottom: "15px",
  },
  ansRow: {
    display: "flex",
    width: "60%",
    marginBottom: "15px",
    alignItems: "center",
  },
  ans: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    color: "#8C8C8C",
    marginRight: "50px",
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  radioBtn: {
    paddingRight: "10px",
  },
  ansActive: {
    color: "#fff",
  },
};
