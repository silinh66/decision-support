import React, { Component } from "react";
import QuestionSetItem from "./QuestionSetItem";

export default class QuestionSetsGroup extends Component {
  render() {
    const { listQuestionSets, year } = this.props;
    return (
      <div>
        <div style={styles.titleHeader}>
          <div style={styles.title}>Đề thi năm {year}</div>
          <div className="customBtn noselect" style={styles.seeMore}>
            Xem thêm
          </div>
        </div>

        <div style={styles.container}>
          {listQuestionSets.map((questionSet) => (
            <QuestionSetItem
              // onPickQuestionSet={onPickQuestionSet}
              key={questionSet.id}
              questionSet={questionSet}
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
