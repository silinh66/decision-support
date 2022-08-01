import { Image, Modal } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import UpdateQuestionSetItem from "./UpdateQuestionSetItem";
import ModalDeleteFolder from "./ModalDeleteFolder";
import { getOptionQuestionSetAPI } from "../api/ApiQuestion";

export default class UpdateQuestionSetsGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
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

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  render() {
    const { showModal, handleOk, handleCancel, onGetListOptionQuestionSet } =
      this;
    const { topic, removeTopic } = this.props;
    const { isModalVisible, listQuestionSet } = this.state;
    return (
      <div>
        <div style={styles.titleHeader}>
          <div style={styles.title} className="customBtn noselect">
            <Link
              style={styles.title}
              state={{
                id: "1",
                listQuestionSet,
                topic,
              }}
              to={{
                pathname: `/updateQuestionSet`,
                state: {
                  result: listQuestionSet,
                },
              }}
            >
              {topic.name}
            </Link>
            <Image
              onClick={showModal}
              className="customBtn noselect"
              preview={false}
              src={require(`../asssets/Images/remove.png`)}
              style={styles.image}
            />
          </div>
          <Link
            state={{
              id: "1",
              listQuestionSet,
              topic,
            }}
            to={{
              pathname: `/updateQuestionSet`,
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

        <div
          style={
            listQuestionSet.length !== 2
              ? styles.container
              : styles.containerTwo
          }
        >
          {listQuestionSet &&
            listQuestionSet.slice(0, 3).map((questionSet, index) => (
              <UpdateQuestionSetItem
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
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          title="Thông báo"
          onCancel={handleCancel}
          footer={null}
          centered
          style={styles.modal}
        >
          <ModalDeleteFolder
            handleCancel={handleCancel}
            topic={topic}
            removeTopic={removeTopic}
          />
        </Modal>
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
  containerTwo: {
    display: "flex",
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
  image: {
    paddingLeft: "10px",
    paddingBottom: "5px",
  },
};
