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

export default class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listQuestionSets: [
        {
          id: "1",
          name: "Toán 2020",
          description: "Đề thi môn toán đại học năm 2020",
          image: "math_2020",
          icon: "mathIcon",
          views: 5143,
          year: 2020,
        },
        {
          id: "2",
          name: "Vật lý 2020",
          description: "Đề thi môn vật lý đại học năm 2020",
          image: "physic_2020",
          icon: "physicIcon",
          views: 4987,
          year: 2020,
        },
        {
          id: "3",
          name: "Hoá học 2020",
          description: "Đề thi môn hoá học đại học năm 2020",
          image: "chemistry_2020",
          icon: "chemistryIcon",
          views: 5302,
          year: 2020,
        },
        {
          id: "4",
          name: "Toán 2019",
          description: "Đề thi môn toán đại học năm 2019",
          image: "math_2019",
          icon: "mathIcon",
          views: 5143,
          year: 2019,
        },
        {
          id: "5",
          name: "Vật lý 2019",
          description: "Đề thi môn vật lý đại học năm 2019",
          image: "physic_2019",
          icon: "physicIcon",
          views: 4987,
          year: 2019,
        },
        {
          id: "6",
          name: "Hoá học 2019",
          description: "Đề thi môn hoá học đại học năm 2019",
          image: "chemistry_2019",
          icon: "chemistryIcon",
          views: 5302,
          year: 2019,
        },
        {
          id: "7",
          name: "Toán 2018",
          description: "Đề thi môn toán đại học năm 2018",
          image: "math_2018",
          icon: "mathIcon",
          views: 5143,
          year: 2018,
        },
        {
          id: "8",
          name: "Vật lý 2018",
          description: "Đề thi môn vật lý đại học năm 2018",
          image: "physic_2018",
          icon: "physicIcon",
          views: 4987,
          year: 2018,
        },
        {
          id: "9",
          name: "Hoá học 2018",
          description: "Đề thi môn hoá học đại học năm 2018",
          image: "chemistry_2018",
          icon: "chemistryIcon",
          views: 5302,
          year: 2018,
        },
      ],
    };
  }
  render() {
    const { listQuestionSets } = this.state;
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
