import { Pagination } from "antd";
import React, { Component } from "react";
import { getListAllTopics } from "../api/ApiTopic";
import QuestionSetsGroup from "../components/QuestionSetsGroup";

export default class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTopic: [],
    };
  }
  componentDidMount() {
    this.onGetListTopic();
  }

  onGetListTopic = async () => {
    const response = await getListAllTopics();
    const activeTopics = response.payload
      .filter((topic) => topic.status === 1)
      .reverse();
    this.setState({
      listTopic: activeTopics,
    });
  };

  render() {
    const { listTopic } = this.state;
    return (
      <div style={styles.contentComponent}>
        <div style={styles.titleHeader}>
          <div style={styles.title}>Thư viện đề thi</div>
          <Pagination showSizeChanger={false} defaultCurrent={1} total={500} />
        </div>
        <div>
          {listTopic.map((topic) => (
            <QuestionSetsGroup key={topic.id} topic={topic} />
          ))}
        </div>
        <div style={{ height: "12vh" }}></div>
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
  titleHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    alignItems: "center",
  },
};
