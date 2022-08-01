import React, { Component } from "react";

class ModalDeleteFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  removeTopic = () => {
    this.props.removeTopic(this.props.topic);
  };

  render() {
    const { removeTopic } = this;
    const { handleCancel } = this.props;
    return (
      <main style={styles.container}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={styles.inputContainer}>
            <div style={styles.text}>Bạn có muốn xoá thư mục này không?</div>
          </div>
        </div>
        <div style={styles.btnFooter}>
          <button
            onClick={removeTopic}
            className="customBtn noselect"
            style={styles.deleteBtn}
          >
            Xoá
          </button>
          <button
            onClick={handleCancel}
            className="customBtn noselect"
            style={styles.cancelBtn}
          >
            Huỷ bỏ
          </button>
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
    flex: 2,
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
    width: "100%",
    // alignItems: "center",
    // justifyContent: "start",
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
  deleteBtn: {
    width: "44%",
    height: "55px",
    backgroundColor: "#8A6AD8",
    color: "#fff",
    borderRadius: "10px",
    border: "1px solid #393D5D",
    fontSize: "18px",
    marginRight: "10px",
  },
  cancelBtn: {
    width: "44%",
    height: "55px",
    backgroundColor: "#393D5D",
    color: "#fff",
    borderRadius: "10px",
    border: "1px solid #393D5D",
    fontSize: "18px",
  },
  btnFooter: {
    marginBottom: "10px",
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  forgotPassword: {
    color: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: "20px",
    flex: 1,
    fontWeight: "400",
  },
};

export default ModalDeleteFolder;
