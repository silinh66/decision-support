import { Image, Modal, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOptionQuestionSetAPI } from "../api/ApiQuestion";
import ModalUpload from "../components/ModalUpload";
import UpdateQuestionSetItem from "../components/UpdateQuestionSetItem";
import { createGroups } from "../utils/common";

export default function UpdateListQuestionSet() {
  const { state } = useLocation();
  const [listQuestionSets, setListQuestionSet] = useState([]);
  const [topic, setTopic] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    setListQuestionSet(state.listQuestionSet);
    setTopic(state.topic);
    // eslint-disable-next-line
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onGetListOptionQuestionSet();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onGetListOptionQuestionSet = async () => {
    const payload = {
      id_topic: topic.id,
      per: 0,
    };

    const listQuestionSet = await getOptionQuestionSetAPI(payload);
    setListQuestionSet(listQuestionSet.payload);
  };

  const questionSetRow = createGroups(listQuestionSets, 3);

  return (
    <div style={styles.contentComponent}>
      <div style={styles.titleHeader}>
        <div style={styles.title}>{topic && topic.name}</div>
        <Pagination showSizeChanger={false} defaultCurrent={1} total={500} />
      </div>
      <div
        onClick={showModal}
        className="customBtn noselect"
        style={styles.uploadBtn}
      >
        <Image preview={false} src={require(`../asssets/Images/update.png`)} />
        <div style={styles.text}>Tải đề thi</div>
      </div>
      {questionSetRow.map((row, index) => (
        <div style={row.length !== 2 ? styles.container : styles.containerTwo}>
          {row.map((questionSet, index) => (
            <UpdateQuestionSetItem
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
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        title="Tải đề thi"
        onCancel={handleCancel}
        footer={null}
        centered
        style={styles.modal}
      >
        <ModalUpload
          topic={topic}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </Modal>
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
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#393D5D",
    width: "140px",
    padding: "15px",
    borderRadius: "10px",
  },
  text: {
    color: "#fff",
    fontWeight: "400",
    fontSize: "15px",
    font: "Lato",
    marginLeft: "15px",
  },
  modal: {
    padding: 0,
  },
};
