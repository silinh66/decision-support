import React, { Component } from "react";
import { Image } from "antd";

export default class QuestionResult extends Component {
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
    const isCorrect = question.final === answer.answer;
    const answerDetail =
      "Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit.Lorem ipsum dolor sit amet, consecteur adipiscing elit.Lorem ipsum dolor sit amet, consecteur adipiscing elit.Lorem ipsum dolor sit amet, consecteur adipiscing elit.Lorem ipsum dolor sit amet, consecteur adipiscing elit.Lorem ipsum";
    return (
      <div style={styles.container}>
        <div style={isCorrect ? styles.questionTrue : styles.questionFalse}>
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
                question.final === "A"
                  ? "radioBtnCorrect"
                  : answer.answer === "A"
                  ? "radioBtnIncorrect"
                  : "radioBtn"
              }.png`)}
              preview={false}
              style={styles.radioBtn}
            />
            <div
              style={
                question.final === "A"
                  ? styles.ansCorrect
                  : answer.answer === "A"
                  ? styles.ansIncorrect
                  : styles.ans
              }
            >
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
                question.final === "B"
                  ? "radioBtnCorrect"
                  : answer.answer === "B"
                  ? "radioBtnIncorrect"
                  : "radioBtn"
              }.png`)}
              preview={false}
              style={styles.radioBtn}
            />
            <div
              style={
                question.final === "B"
                  ? styles.ansCorrect
                  : answer.answer === "B"
                  ? styles.ansIncorrect
                  : styles.ans
              }
            >
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
                question.final === "C"
                  ? "radioBtnCorrect"
                  : answer.answer === "C"
                  ? "radioBtnIncorrect"
                  : "radioBtn"
              }.png`)}
              preview={false}
              style={styles.radioBtn}
            />
            <div
              style={
                question.final === "C"
                  ? styles.ansCorrect
                  : answer.answer === "C"
                  ? styles.ansIncorrect
                  : styles.ans
              }
            >
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
                question.final === "D"
                  ? "radioBtnCorrect"
                  : answer.answer === "D"
                  ? "radioBtnIncorrect"
                  : "radioBtn"
              }.png`)}
              preview={false}
              style={styles.radioBtn}
            />
            <div
              style={
                question.final === "D"
                  ? styles.ansCorrect
                  : answer.answer === "D"
                  ? styles.ansIncorrect
                  : styles.ans
              }
            >
              D: {question.as_d}
            </div>
          </div>
        </div>
        {!isCorrect && (
          <div style={styles.answerDetail}>
            <div style={styles.ansCorrect}>Lời giải</div>
            <div style={styles.ansActive}>{answerDetail}</div>
            <div style={styles.ansCorrect}>Đáp án: {question.final}</div>
          </div>
        )}
        <div style={styles.ansRow}></div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: "5px",
  },
  questionTrue: {
    color: "#2EB553",
    fontWeight: "400",
    fontSize: "16px",
    marginBottom: "15px",
  },
  questionFalse: {
    color: "#FF2528",
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
  ansCorrect: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    color: "#2EB553",
    marginRight: "50px",
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  ansIncorrect: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    color: "#FF2528",
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
