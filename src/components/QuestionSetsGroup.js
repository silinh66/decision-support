import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getOptionQuestionSetAPI } from "../api/ApiQuestion";
import QuestionSetItem from "./QuestionSetItem";

export default class QuestionSetsGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listQuestionSet: [],
    };
  }
  componentDidMount() {
    this.onGetListOptionQuestionSet();
  }

  onGetListOptionQuestionSet = async () => {
    const payload = {
      id_topic: this.props.topic.id,
      per: 0,
    };

    const listQuestionSet = await getOptionQuestionSetAPI(payload);
    this.setState({
      listQuestionSet: listQuestionSet.payload,
    });
  };
  render() {
    const { onGetListOptionQuestionSet } = this;
    const { topic } = this.props;
    const { listQuestionSet } = this.state;
    return (
      <div>
        <div style={styles.titleHeader}>
          <div style={styles.title}>{topic && topic.name}</div>
          <Link
            state={{
              id: "1",
              listQuestionSet,
              topic,
            }}
            to={{
              pathname: `/questionSet`,
              state: {
                result: listQuestionSet,
              },
            }}
          >
            <div className="customBtn noselect" style={styles.seeMore}>
              Xem thêm
            </div>
          </Link>
        </div>

        <div style={styles.container}>
          {listQuestionSet &&
            listQuestionSet.slice(0, 3).map((questionSet, index) => (
              <QuestionSetItem
                // onPickQuestionSet={onPickQuestionSet}
                key={questionSet.id}
                questionSet={questionSet}
                icon={index}
                topic={topic}
                onGetListOptionQuestionSet={onGetListOptionQuestionSet}
                isTwoQuestionSet={listQuestionSet.length === 2}
              />
            ))}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  title: {
    fontFamily: "SF Compact Rounded",
    fontWeight: "600",
    fontSize: "26px",
    lineHeight: "36px",
    color: "#FFFFFF",
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
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "18px",
    color: "rgba(255, 255, 255, 0.55)",
  },
};
