import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
  getListQuestionAPI,
  getOptionQuestionSetAPI,
} from "../api/ApiQuestion";
import { createGroups } from "../utils/common";

import { Modal } from "antd";
import { get, set } from "lodash";
import Question from "../components/Question";
import ResultModal from "../components/ResultModal";
import { listQuestionSets } from "../fakeData/listQuestionSets";
import Timer from "../components/Timer";

export default function Exam() {
  const { state } = useLocation();
  const [questionList, setQuestionList] = useState([]);
  const [listAnswer, setListAnswer] = useState([]);
  const [listQuestionSet, setListQuestionSet] = useState([]);
  const [currentQuestionSet, setCurrentQuestionSet] = useState({});
  const [time, setTime] = useState({});
  const [timeFinish, setTimeFinish] = useState("");
  const [seconds, setSeconds] = useState(5400);
  const [count, setCount] = useState(0);
  const [topic, setTopic] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [idQuestionSet, setIdQuestionSet] = useState("");
  let timer = 0;

  useEffect(() => {
    const idQuestionSet = window.location.pathname.split("/")[2];
    setIdQuestionSet(idQuestionSet);
    setTopic(state.topic);
    setCurrentQuestionSet(state.questionSet);
    console.log("state.questionSet: ", state.questionSet);
    onGetListQuestionByQuestionSet(idQuestionSet);
    // const questionList = listQuestions.filter((question) => {
    //   return question.idQuestionSet === idQuestionSet;
    // });
    // const listAnswer = questionList.map((question) => {
    //   return {
    //     id: question.id,
    //     answer: "",
    //   };
    // });
    // this.setState({
    //   questionList: questionList,
    //   currentQuestionSet: listQuestionSets.find((questionSet) => {
    //     return questionSet.id === idQuestionSet;
    //   }),
    //   listAnswer: listAnswer,
    //   idQuestionSet: idQuestionSet,
    // });
    let timeLeftVar = secondsToTime(seconds);
    setTime(timeLeftVar);
    // startTimer();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setSeconds(seconds);
  }, [seconds]);

  const onGetListQuestionByQuestionSet = async (idQuestionSet) => {
    const payload = {
      id_qs: idQuestionSet,
      per: 1,
    };
    const response = await getListQuestionAPI(payload);
    console.log("response: ", response);
    setQuestionList(
      response.payload.map((question, index) => {
        return {
          ...question,
          id: index + 1,
        };
      })
    );
    setListAnswer(
      response.payload.map((question, index) => {
        return {
          id: index + 1,
          answer: "",
        };
      })
    );
  };

  const secondsToTime = (secs) => {
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
  };

  const startTimer = () => {
    if (timer === 0 && seconds > 0) {
      timer = setInterval(countDown, 1000);
    }
  };

  const countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds_ = seconds - 1;
    console.log("seconds_: ", seconds_);
    setTime(secondsToTime(seconds_));
    setSeconds(seconds_);
    // Check if we're at zero.
    if (seconds_ === 0) {
      clearInterval(timer);
    }
  };

  const onChangeAnswer = (id, answer) => {
    const oldListAnswer = listAnswer;
    const newListAnswer = oldListAnswer.map((item) => {
      if (item.id === id) {
        item.answer = answer;
      }
      return item;
    });
    setListAnswer(newListAnswer);
  };

  const showModal = () => {
    console.log("questionList: ", questionList);
    console.log("listAnswer: ", listAnswer);
    let count = 0;
    questionList.forEach((question, index) => {
      if (question.final === listAnswer[index].answer) {
        count++;
      }
    });
    console.log("count", count);
    setCount(count);
    setIsModalVisible(true);
    setTimeFinish(time);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
    setShowResult(true);
  };

  const getTime = (curMinutes, curSeconds) => {
    let time = "";
    if (curMinutes < 10) {
      time += "0";
    }
    time += curMinutes + ":";
    if (curSeconds < 10) {
      time += "0";
    }
    time += curSeconds;
    setTime(time);
    return time;
  };

  return (
    <div style={styles.contentComponent}>
      {showResult && (
        <Navigate
          state={{
            id: "1",
            listAnswer,
            questionList,
            currentQuestionSet,
          }}
          to={{
            pathname: `result`,
            state: {
              result: listAnswer,
            },
          }}
          replace={true}
        />
      )}
      <div style={styles.stickyHeader}>
        <div style={styles.titleHeader}>
          <div style={styles.title}>
            {topic && topic.name}
            <span style={styles.span}>{">"}</span>{" "}
            {get(currentQuestionSet, "description", "")}
          </div>
          <div style={styles.seeMore}>
            <span style={styles.time}>Thời gian: </span>{" "}
            {/* {time.m < 10 ? `0${time.m}` : time.m} :{" "}
            {time.s < 10 ? `0${time.s}` : time.s} */}
            <Timer getTime={getTime} initialMinute={90} initialSeconds={0} />
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
              answer={listAnswer.find((answer) => {
                return answer.id === question.id;
              })}
              onChangeAnswer={onChangeAnswer}
            />
          );
        })}
      </div>
      <div style={styles.stickyBottom}>
        <button
          className="customBtn noselect"
          onClick={showModal}
          style={styles.button}
        >
          Nộp bài thi
        </button>
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
        <ResultModal
          time={timeFinish}
          total={questionList.length}
          count={count}
          onCloseModal={onCloseModal}
        />
      </Modal>
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
    display: "flex",
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
    padding: "10px",
  },
  modal: {
    padding: 0,
  },
};
