import { Image, Modal, Pagination } from "antd";
import React, { Component } from "react";
import { getListAllTopics, updateTopicAPI } from "../api/ApiTopic";
import ModalNewFolder from "../components/ModalNewFolder";
import UpdateQuestionSetsGroup from "../components/UpdateQuestionSetsGroup";

export default class UpdateExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
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

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
    this.onGetListTopic();
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  removeTopic = async (topic) => {
    const payload = {
      countDeThi: 3,
      date_create: "2021-05-29T15:44:51.000Z",
      date_update: "2022-03-19T01:00:19.000Z",
      description: topic.description,
      id: topic.id,
      image: "",
      key: topic.id,
      name: topic.name,
      status: 0,
    };
    const responseRemoveTopic = await updateTopicAPI(payload);
    console.log("responseRemoveTopic: ", responseRemoveTopic);
    this.onGetListTopic();
  };
  render() {
    const { showModal, handleOk, handleCancel, removeTopic } = this;
    const { isModalVisible, listTopic } = this.state;
    return (
      <div style={styles.contentComponent}>
        <div style={styles.titleHeader}>
          <div style={styles.title}>
            Thư viện đề thi
            <Image
              className="customBtn noselect"
              onClick={showModal}
              preview={false}
              src={require(`../asssets/Images/add.png`)}
              style={styles.image}
            />
          </div>
          <Pagination showSizeChanger={false} defaultCurrent={1} total={500} />
        </div>
        <div>
          {listTopic.map((topic) => (
            <UpdateQuestionSetsGroup
              removeTopic={removeTopic}
              key={topic.id}
              topic={topic}
            />
          ))}
        </div>
        <div style={{ height: "12vh" }}></div>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          title="Tạo thư mục mới"
          onCancel={handleCancel}
          footer={null}
          centered
          style={styles.modal}
        >
          <ModalNewFolder closeModal={handleOk} />
        </Modal>
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
  image: {
    paddingLeft: "10px",
    paddingBottom: "5px",
  },
  modal: {
    padding: 0,
  },
};
