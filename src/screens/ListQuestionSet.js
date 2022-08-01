import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOptionQuestionSetAPI } from "../api/ApiQuestion";
import QuestionSetItem from "../components/QuestionSetItem";
import { createGroups } from "../utils/common";

export default function ListQuestionSet() {
  const { state } = useLocation();
  const [listQuestionSets, setListQuestionSets] = useState([]);
  const [topic, setTopic] = useState("");
  useEffect(() => {
    setListQuestionSets(state.listQuestionSet);
    setTopic(state.topic);
    // eslint-disable-next-line
  }, []);

  const onGetListOptionQuestionSet = async () => {
    const payload = {
      id_topic: topic.id,
      per: 0,
    };

    const listQuestionSet = await getOptionQuestionSetAPI(payload);
    setListQuestionSets(listQuestionSet.payload);
  };

  const questionSetRow = createGroups(listQuestionSets, 3);
  return (
    <div style={styles.contentComponent}>
      <div style={styles.titleHeader}>
        <div style={styles.title}>{topic && topic.name}</div>
        <Pagination showSizeChanger={false} defaultCurrent={1} total={500} />
      </div>
      {questionSetRow.map((row, index) => (
        <div style={row.length !== 2 ? styles.container : styles.containerTwo}>
          {row.map((questionSet, index) => (
            <QuestionSetItem
              // onPickQuestionSet={onPickQuestionSet}
              key={questionSet.id}
              questionSet={questionSet}
              isTwoQuestionSet={row.length === 2}
              icon={index}
              onGetListOptionQuestionSet={onGetListOptionQuestionSet}
              topic={topic}
            />
          ))}
        </div>
      ))}
      <div style={{ height: "12vh" }}></div>
    </div>
  );
}

const styles = {
  contentComponent: {
    marginLeft: "24px",
    marginRight: "28px",
    paddingTop: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    marginTop: "50px",
  },
  containerTwo: {
    display: "flex",
    marginBottom: "20px",
    marginTop: "50px",
  },
  title: {
    fontFamily: "SF Compact Rounded",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#FFFFFF",
    marginBottom: "20px",
  },
  titleHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    alignItems: "center",
  },
};
