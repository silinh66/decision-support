import { Form, Input, Button, Checkbox, Image } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordShow: false,
    };
  }

  onFinish = (data) => {
    // const email = get(data, "email");
    // const password = get(data, "password");
    // const payload = {
    // 	email,
    // 	password: EncriptPassword(email, password),
    // };
    // this.props.doLoginAccount(payload, {
    // 	callbackOnSuccess: () => {
    // 		window.location.reload();
    // 	},
    // });
  };

  render() {
    const { onFinish } = this;
    const { passwordShow } = this.state;
    return (
      <main style={styles.container} className="wrap-form">
        <div className="form-login">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={styles.inputContainer}>
              <Image
                preview={false}
                src={require("../asssets/Images/username.png")}
              ></Image>
              <Input style={styles.input} placeholder="Username" />
            </div>
            <div style={styles.inputContainer}>
              <Image
                preview={false}
                src={require("../asssets/Images/password.png")}
              ></Image>
              <Input
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
              <div name="remember" valuePropName="checked" noStyle>
                <Checkbox checked style={styles.checkbox}>
                  Nhớ mật khẩu
                </Checkbox>
              </div>
              <a
                style={styles.forgotPassword}
                className="login-form-forgot"
                href=""
              >
                Quên mật khẩu?
              </a>
            </div>
            <div style={styles.btnFooter}>
              <button
                onClick={() => {
                  console.log("Login");
                }}
                style={styles.loginBtn}
              >
                Đăng nhập
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
    backgroundColor: "#393D5D",
    color: "#fff",
    borderRadius: "10px",
    border: "1px solid #393D5D",
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
