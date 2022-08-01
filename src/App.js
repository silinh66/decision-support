import { Col, Input, Modal, Row } from "antd";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inspector from "./components/Inspector";
import Login from "./components/Login";
import LogoutContainer from "./components/LogoutContainer";
import Register from "./components/Register";
// import Register from "./components/Register";
import SideBar from "./components/SideBar";
import SideMenu from "./components/SideMenu";
import UserContainer from "./components/UserContainer";
import Ability from "./screens/Ability";
import Exam from "./screens/Exam";
import Exercise from "./screens/Exercise";
import HomeContent from "./screens/HomeContent";
import ListPlan from "./screens/ListPlan";
import ListQuestionSet from "./screens/ListQuestionSet";
import ResetPassword from "./screens/ResetPassword";
import Result from "./screens/Result";
import Score from "./screens/Score";
import Target from "./screens/Target";
import Timetable from "./screens/Timetable";
import UpdateExercise from "./screens/UpdateExercise";
import UpdateListQuestionSet from "./screens/UpdateListQuestionSet";
import { getLocalData } from "./services/StoreService";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isModalRegisterVisible: false,
      isLogin: false,
      currentTab: "0",
      permission: "0",
      account: [],
    };
  }

  componentDidMount() {
    if (window.addEventListener) {
      window.addEventListener("beforeunload", this.onUnloadPage);
    } else {
      window.attachEvent("onbeforeunload", this.onUnloadPage);
    }
    if (getLocalData("access_token")) {
      this.setState({
        isLogin: true,
      });
    } else {
      this.setState({
        isLogin: false,
      });
    }
    if (getLocalData("account")) {
      this.setState({
        account: getLocalData("account"),
        permission: getLocalData("account").permission === 1 ? "0" : "1",
      });
    }
  }

  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener("beforeunload", this.onUnloadPage);
    } else {
      window.detachEvent("onbeforeunload", this.onUnloadPage);
    }
  }

  onUnloadPage = (event) => {
    window.setTimeout(function () {
      window.location = "/home";
    }, 0);
    window.onbeforeunload = null;
  };

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };
  showModalRegister = () => {
    this.setState({
      isModalRegisterVisible: true,
    });
  };

  handleOk = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleOkRegister = () => {
    this.setState({
      isModalRegisterVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleCancelRegister = () => {
    this.setState({
      isModalRegisterVisible: false,
    });
  };

  onChangeTab = (currentTab) => {
    this.setState({ currentTab });
  };

  onChangePermission = (permission) => {
    this.setState({ permission });
  };
  render() {
    const {
      showModal,
      showModalRegister,
      handleOk,
      handleOkRegister,
      handleCancel,
      handleCancelRegister,
      onChangeTab,
      onChangePermission,
    } = this;
    const {
      isModalVisible,
      isModalRegisterVisible,
      isLogin,

      permission,
      account,
    } = this.state;
    return (
      <div style={styles.container}>
        <Row style={styles.row}>
          {/* <Col span={1} xs={12} sm={3} md={2} lg={1} style={styles.firstCol}>
          <FirstColumn />
        </Col> */}
          <Col span={5} xl={5}>
            <div style={styles.firstCol}>
              <div style={styles.sideBar}>
                <SideBar
                  account={account}
                  isLogin={isLogin}
                  onChangePermission={onChangePermission}
                />
              </div>
              <div style={styles.sideMenu}>
                <SideMenu
                  account={account}
                  isLogin={isLogin}
                  onChangeTab={onChangeTab}
                  permission={permission}
                />
              </div>
            </div>
            {isLogin ? (
              <LogoutContainer account={account} />
            ) : (
              <UserContainer
                showModalRegister={showModalRegister}
                showModal={showModal}
              />
            )}
          </Col>
          <Col span={15} xl={15} style={styles.secondCol}>
            <div style={styles.searchComponent}>
              <Input style={styles.input} placeholder="&#xF002;  Tìm kiếm..." />
            </div>
            {/* {currentTab == "0" && <HomeContent />}
            {currentTab == "1" && <Timetable />}
            {currentTab == "2" && <Target />}
            {currentTab == "3" && <ListPlan />}
            {currentTab == "4" && <Score />}
            {currentTab == "5" && ( */}
            <Routes>
              <Route>
                <Route index element={<HomeContent />} />
                <Route path={"exercise"} element={<Exercise />} />
                <Route path={"exam/:questionSetId"} element={<Exam />} />
                <Route path={"home"} element={<HomeContent />} />
                <Route path={"timetable"} element={<Timetable />} />
                <Route path={"target"} element={<Target />} />
                <Route path={"listPlan"} element={<ListPlan />} />
                <Route path={"score"} element={<Score />} />
                <Route path={"ability"} element={<Ability />} />
                <Route path={"resetPassword"} element={<ResetPassword />} />
                <Route path={"updateExercise"} element={<UpdateExercise />} />
                <Route
                  path={"exam/:questionSetId/result"}
                  element={<Result />}
                />
                <Route path={"questionSet"} element={<ListQuestionSet />} />
                <Route
                  path={"updateQuestionSet"}
                  element={<UpdateListQuestionSet />}
                />
              </Route>
            </Routes>
            {/* )} */}
            {/* {currentTab == "6" && <Ability />} */}
          </Col>
          <Col span={4} xl={4}>
            <div style={styles.thirdCol}>
              <Inspector account={account} isLogin={isLogin} />
            </div>
          </Col>
        </Row>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          title="Đăng nhập"
          onCancel={handleCancel}
          footer={null}
          centered
          style={styles.modal}
        >
          <Login
            handleCancel={handleCancel}
            showModalRegister={showModalRegister}
          />
        </Modal>
        <Modal
          visible={isModalRegisterVisible}
          onOk={handleOkRegister}
          title="Đăng ký"
          onCancel={handleCancelRegister}
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
    // height: "150vh",
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
