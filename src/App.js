import "./App.css";
import { Row, Col, Modal, Input } from "antd";
import SideBar from "./components/SideBar";
import SideMenu from "./components/SideMenu";
import UserContainer from "./components/UserContainer";
import HomeContent from "./screens/HomeContent";
import Timetable from "./screens/Timetable";
import Target from "./screens/Target";
import ListPlan from "./screens/ListPlan";
import Score from "./screens/Score";
import Exercise from "./screens/Exercise";
import Ability from "./screens/Ability";
import Inspector from "./components/Inspector";
import Login from "./components/Login";
import { Component } from "react";
import Register from "./components/Register";
import LogoutContainer from "./components/LogoutContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isLogin: true,
      currentTab: "0",
    };
  }

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

  onChangeTab = (currentTab) => {
    this.setState({ currentTab });
  };
  render() {
    const { showModal, handleOk, handleCancel, onChangeTab } = this;
    const { isModalVisible, isLogin, currentTab } = this.state;
    return (
      <div style={styles.container}>
        <Row style={styles.row}>
          {/* <Col span={1} xs={12} sm={3} md={2} lg={1} style={styles.firstCol}>
          <FirstColumn />
        </Col> */}
          <Col span={5} xl={5}>
            <div style={styles.firstCol}>
              <div style={styles.sideBar}>
                <SideBar />
              </div>
              <div style={styles.sideMenu}>
                <SideMenu onChangeTab={onChangeTab} />
              </div>
            </div>
            {isLogin ? (
              <LogoutContainer />
            ) : (
              <UserContainer showModal={showModal} />
            )}
          </Col>
          <Col span={15} xl={15} style={styles.secondCol}>
            <div style={styles.searchComponent}>
              <Input style={styles.input} placeholder="&#xF002;  Tìm kiếm..." />
            </div>
            {currentTab == "0" && <HomeContent />}
            {currentTab == "1" && <Timetable />}
            {currentTab == "2" && <Target />}
            {currentTab == "3" && <ListPlan />}
            {currentTab == "4" && <Score />}
            {currentTab == "5" && <Exercise />}
            {currentTab == "6" && <Ability />}
          </Col>
          <Col span={4} xl={4}>
            <div style={styles.thirdCol}>
              <Inspector />
            </div>
          </Col>
        </Row>
        {/* <Modal
        visible={isModalVisible}
        onOk={handleOk}
        title="Đăng nhập"
        onCancel={handleCancel}
        footer={null}
        centered
        style={styles.modal}
      >
        <Login />
      </Modal> */}
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          title="Đăng ký"
          onCancel={handleCancel}
          footer={null}
          centered
          style={styles.modal}
        >
          <Register />
        </Modal>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "150vh",
    display: "flex",
    flexDirection: "column",
  },
  firstCol: {
    display: "flex",
    height: "92vh",
    // width: "385px",
    position: "sticky",
    top: 0,
  },
  secondCol: {
    backgroundColor: "#1D203E",
    position: "sticky",
    // left: "385px",
    // right: "306px",
  },
  thirdCol: {
    backgroundColor: "#2C2F48",
    boxShadow: "inset 1px 0px 0px rgba(255, 255, 255, 0.1)",
    display: "flex",
    height: "100vh",
    // width: "306px",
    position: "sticky",
    top: 0,
  },
  row: {
    height: "100%",
  },
  sideBar: {
    display: "flex",
    // flex: 1,
    width: "77px",
  },
  sideMenu: {
    display: "flex",
    flex: 4,
    // width: "306px",
  },
  modal: {
    padding: 0,
  },
  input: {
    width: "642px",
    height: "24px",
    backgroundColor: "#2A2C47",
    borderRadius: "4px",
    color: "#fff",
    fontFamily: "Arial, FontAwesome",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  searchComponent: {
    textAlign: "center",
    height: "44px",
    backgroundColor: "#2C2F48",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
};
