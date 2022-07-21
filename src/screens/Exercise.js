import React, { Component } from "react";
import { Image, Pagination } from "antd";
import RecentActivityItem from "../components/RecentActivityItem";
import RecentTrendItem from "../components/RecentTrendItem";
import RecentSubjectItem from "../components/RecentSubjectItem";
import { listRecentActivities } from "../fakeData/recentActivity";
import { listRecentTrends } from "../fakeData/recentTrend";
import { listRecentSubjects } from "../fakeData/recentSubject";
import { groupBy } from "lodash";
import QuestionSetsGroup from "../components/QuestionSetsGroup";
import { listQuestionSets } from "../fakeData/listQuestionSets";

export default class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const groupByYearQuestionSets = groupBy(listQuestionSets, "year");
    return (
      <div style={styles.contentComponent}>
        <div style={styles.titleHeader}>
          <div style={styles.title}>Thư viện đề thi</div>
          <Pagination showSizeChanger={false} defaultCurrent={1} total={500} />
        </div>
        <div style={styles.content}>
          {Object.keys(groupByYearQuestionSets)
            .reverse()
            .map((year) => (
              <QuestionSetsGroup
                key={year}
                year={year}
                listQuestionSets={groupByYearQuestionSets[year]}
              />
            ))}
        </div>
      </div>
    );
  }
}

const styles = {
  contentComponent: {
    marginLeft: "24px",
    marginRight: "28px",
    paddingTop: "20px",
  },
  title: {
    fontFamily: "SF Compact Rounded",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "36px",
    color: "#FFFFFF",
    marginBottom: "20px",
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
};
