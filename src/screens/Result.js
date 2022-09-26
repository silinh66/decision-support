import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QuestionResult from "../components/QuestionResult";

export default function Result() {
  const { state } = useLocation();
  const [currentQuestionSet, setCurrentQuestionSet] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [listAnswer, setListAnswer] = useState([]);
  useEffect(() => {
    setCurrentQuestionSet(state.currentQuestionSet);
    setQuestionList(state.questionList);
    setListAnswer(state.listAnswer);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div style={styles.contentComponent}>
        <div style={styles.stickyHeader}>
          <div style={styles.titleHeader}>
            <div style={styles.title}>
              Đề thi năm {get(currentQuestionSet, "year", "")}{" "}
              <span style={styles.span}>{">"}</span>{" "}
              {get(currentQuestionSet, "description", "")}
            </div>
            <div style={styles.seeMore}>
              <span style={styles.time}>Thời gian: </span> 90 : 00
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
              <QuestionResult
                key={question.id}
                question={question}
                answer={listAnswer.find((answer) => {
                  return answer.id === question.id;
                })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
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
