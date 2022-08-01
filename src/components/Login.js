import { Checkbox, Image, Input, notification } from "antd";
import { get } from "lodash";
import React, { Component } from "react";
import { loginAccountAPI } from "../api/ApiAccount";
import { setLocalData } from "../services/StoreService";
import { EncryptPassword } from "../utils/common";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordShow: false,
      rememberPassword: true,
      username: "",
      password: "",
    };
  }

  onLogin = async () => {
    const { username, password } = this.state;
    if (!username) {
      notification.error({ message: "Chưa nhập tên tài khoản" });
      return;
    }
    if (!password) {
      notification.error({ message: "Chưa nhập mật khẩu" });
      return;
    }
    const payload = {
      email: username,
      password: EncryptPassword(username, password),
    };
    const response = await loginAccountAPI(payload);
    await setLocalData("access_token", get(response.payload, "userToken"));
    await setLocalData("account", get(response.payload, "userInfo"));
    window.location.reload();
  };

  onRegister = () => {
    this.props.showModalRegister();
    this.props.handleCancel();
  };

  onChangeRememberPassword = (e) => {
    this.setState({ rememberPassword: e.target.checked });
  };

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    const {
      onLogin,
      onChangeRememberPassword,
      onChangeUsername,
      onChangePassword,
      onRegister,
    } = this;
    const { passwordShow, rememberPassword, username, password } = this.state;
    return (
      <main style={styles.container} className="wrap-form">
        <div className="form-login">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={styles.inputContainer}>
              <Image
                preview={false}
                src={require("../asssets/Images/username.png")}
              ></Image>
              <Input
                value={username}
                onChange={onChangeUsername}
                style={styles.input}
                placeholder="Username"
              />
            </div>
            <div style={styles.inputContainer}>
              <Image
                preview={false}
                src={require("../asssets/Images/password.png")}
              ></Image>
              <Input
                value={password}
                onChange={onChangePassword}
                style={styles.input}
                type={passwordShow ? "text" : "password"}
                placeholder="Password"
              />
              <Image
                onClick={() => {
                  this.setState({ passwordShow: !passwordShow });
                }}
                preview={false}
                src={require(`../asssets/Images/${
                  passwordShow ? "seePassword" : "showPassword"
                }.png`)}
              ></Image>
            </div>
            <div style={styles.passwordContainer}>
              <div>
                <Checkbox
                  onChange={onChangeRememberPassword}
                  checked={rememberPassword}
                  style={styles.checkbox}
                >
                  Nhớ mật khẩu
                </Checkbox>
              </div>
              <div className="customBtn noselect" style={styles.forgotPassword}>
                Quên mật khẩu?
              </div>
            </div>
            <div style={styles.btnFooter}>
              <button
                className="customBtn noselect"
                onClick={onLogin}
                style={styles.loginBtn}
              >
                Đăng nhập
              </button>
              <button
                className="customBtn noselect"
                onClick={onRegister}
                style={styles.registerBtn}
              >
                Đăng ký
              </button>
              {/* hoặc <a href="">Đăng ký</a> */}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const styles = {
  container: {
    display: "block",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "#2C2F48",
    textAlign: "center",
    borderRadius: "0 0 20px 20px",
  },
  input: {
    width: "100%",
    height: 36,
    backgroundColor: "#2C2F48",
    color: "#fff",
    textAlign: "left",
    border: "0px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  formItem: {
    backgroundColor: "#2C2F48",
  },
  icon: {
    color: "#fff",
    marginRight: "10px",
  },
  inputContainer: {
    marginTop: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    marginLeft: "30px",
    marginRight: "30px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
  },
  passwordContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "42px",
    marginRight: "42px",
  },
  checkbox: {
    color: "#fff",
  },
  loginBtn: {
    width: "90%",
    height: "55px",
    backgroundColor: "#B38EE6",
    color: "#fff",
    borderRadius: "10px",
    border: "1px solid #393D5D",
  },
  registerBtn: {
    width: "90%",
    height: "55px",
    backgroundColor: "#393D5D",
    color: "#fff",
    borderRadius: "10px",
    border: "1px solid #393D5D",
    marginTop: "10px",
    marginBottom: "10px",
  },
  btnFooter: {
    marginBottom: "10px",
    marginTop: "10px",
  },
  forgotPassword: {
    color: "#fff",
  },
};

export default Login;
