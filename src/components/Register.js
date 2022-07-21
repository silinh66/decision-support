import { Form, Input, Button, Checkbox, Image, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import { Option } from "antd/lib/mentions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordShow: false,
      passwordShowAgain: false,
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

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  render() {
    const { onFinish, handleChange } = this;
    const { passwordShow, passwordShowAgain } = this.state;
    return (
      <main style={styles.container} className="wrap-form">
        <div className="form-login">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={styles.inputContainer}>
              <Image
                preview={false}
                src={require("../asssets/Images/username.png")}
              ></Image>
              <div style={styles.label}>Tên đăng nhập</div>
            </div>
            <div style={styles.usernameContainer}>
              <Input style={styles.input} placeholder="Nhập tên đăng nhập" />
            </div>
            <div style={styles.inputContainer}>
              <Image
                preview={false}
                src={require("../asssets/Images/fullName.png")}
              ></Image>
              <div style={styles.label}>Họ và tên</div>
            </div>
            <div style={styles.nameContainer}>
              <Input style={styles.input} placeholder="Họ" />
              <Input style={styles.middleInput} placeholder="Tên đệm" />
              <Input style={styles.input} placeholder="Tên" />
            </div>
            <div style={styles.inputContainer}>
              <Image
                preview={false}
                src={require("../asssets/Images/job.png")}
              ></Image>
              <div style={styles.label}>Nghề nghiệp</div>
            </div>
            <div style={styles.jobContainer}>
              <Select
                defaultValue="student"
                style={styles.jobSelect}
                onChange={handleChange}
                dropdownStyle={{ backgroundColor: "#393D5D" }}
              >
                <Option className="firstOption" value="student">
                  Học sinh
                </Option>
                <Option value="manager">Người quản lý</Option>
              </Select>
            </div>
            <div style={styles.inputContainer}>
              <Image
                preview={false}
                src={require("../asssets/Images/email.png")}
              ></Image>
              <div style={styles.label}>Địa chỉ email</div>
            </div>
            <div style={styles.usernameContainer}>
              <Input style={styles.input} placeholder="Nhập địa chỉ email" />
            </div>
            <div style={styles.inputContainer}>
              <Image
                preview={false}
                src={require("../asssets/Images/password.png")}
              ></Image>
              <div style={styles.label}>Mật khẩu</div>
            </div>
            <div style={styles.usernameContainer}>
              <Input
                className="inputWithSuffix"
                type={passwordShow ? "text" : "password"}
                suffix={
                  <Image
                    onClick={() => {
                      this.setState({ passwordShow: !passwordShow });
                    }}
                    preview={false}
                    src={require(`../asssets/Images/${
                      passwordShow ? "seePassword" : "showPassword"
                    }.png`)}
                  ></Image>
                }
                style={styles.input}
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div style={{ marginTop: "10px" }}></div>
            <div style={styles.usernameContainer}>
              <Input
                className="inputWithSuffix"
                type={passwordShowAgain ? "text" : "password"}
                suffix={
                  <Image
                    onClick={() => {
                      this.setState({ passwordShowAgain: !passwordShowAgain });
                    }}
                    preview={false}
                    src={require(`../asssets/Images/${
                      passwordShowAgain ? "seePassword" : "showPassword"
                    }.png`)}
                  ></Image>
                }
                style={styles.input}
                placeholder="Xác nhận mật khẩu"
              />
            </div>
            <div style={styles.inputContainer}>
              <Image
                preview={false}
                src={require("../asssets/Images/capcha.png")}
              ></Image>
              <div style={styles.label}>Nhập mã capcha</div>
            </div>
            <div style={styles.nameContainer}>
              <Input
                className="inputWithSuffix"
                suffix={
                  <Image
                    onClick={() => {
                      console.log("reCapcha");
                    }}
                    preview={false}
                    src={require(`../asssets/Images/reCapcha.png`)}
                  ></Image>
                }
                style={styles.input}
                placeholder="Mã capcha"
              />
              <Input style={styles.rightInput} placeholder="Nhập mã capcha" />
            </div>
            <div style={styles.divider}></div>
            <div style={styles.btnFooter}>
              <button
                onClick={() => {
                  console.log("Login");
                }}
                style={styles.loginBtn}
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
    width: "88%",
    height: 36,
    backgroundColor: "#393D5D",
    color: "#fff",
    textAlign: "left",
    border: "0px",
  },
  middleInput: {
    width: "88%",
    height: 36,
    backgroundColor: "#393D5D",
    color: "#fff",
    textAlign: "left",
    border: "0px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  rightInput: {
    width: "88%",
    height: 36,
    backgroundColor: "#393D5D",
    color: "#fff",
    textAlign: "left",
    border: "0px",
    marginLeft: "10px",
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
    // borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
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
  label: {
    fontWeight: "400",
    fontSize: "20px",
    color: "#fff",
    marginLeft: "20px",
  },
  nameContainer: {
    display: "flex",
    marginRight: "30px",
    marginLeft: "30px",
    justifyContent: "space-between",
  },
  usernameContainer: {
    // marginLeft: "30px",
  },
  jobContainer: {
    marginLeft: "30px",
    marginRight: "30px",
  },
  jobSelect: {
    width: "100%",
    backgroundColor: "#393D5D",
    textAlign: "left",
  },
  divider: {
    borderBottom: "1px solid #61647D",
    marginLeft: "25px",
    marginRight: "25px",
    marginTop: "10px",
  },
};

export default Register;
