import { Button, Image, Input, notification } from "antd";
import { get, map, size, trim, upperCase } from "lodash";
import React, { Component } from "react";
import {
  createUpdateQuestionSetAPI,
  handleAddQuestionAPI,
} from "../api/ApiQuestion";
import { makeUploadImage } from "../api/createApiService";
import { ExportExcel } from "../utils/common";
import UploadFile from "./UploadFile";
import UploadImage from "./UploadImage";
import ReadFileExcel from "read-excel-file";
import { multiDataCreatedOrDeleted } from "../services/methodService";

class ModalUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      file: null,
      questionSetName: "",
      description: "",
    };
  }

  onDownloadTemplate = () => {
    const temp = map([1], (item) => {
      return {
        "Nội dung câu hỏi": "",
        "Đáp án A": "",
        "Đáp án B": "",
        "Đáp án C": "",
        "Đáp án D": "",
        "Đáp án đúng": "",
      };
    });
    const fileName = "TeamplateAddQuestion";
    ExportExcel(temp, fileName, fileName);
  };

  handleChangeFile = (e) => {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  };

  onChangeQuestionSetName = (e) => {
    this.setState({ questionSetName: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  onAddQuestion = (payload) => {
    multiDataCreatedOrDeleted(handleAddQuestionAPI, payload, {
      callbackOnSuccess: ({ success, total }) => {
        this.props.handleOk();
        this.setState({
          image: null,
          file: null,
          questionSetName: "",
          description: "",
        });
      },
      callbackOnFail: ({ fail, total }) => {
        this.props.handleCancel();
      },
    });
  };

  readFileExcel = () => {
    const fileImage = this.state.image;
    if (!fileImage) {
      notification.error({ message: "Chưa chọn ảnh" });
      return;
    }
    if (!this.state.file) {
      notification.error({ message: "Chưa chọn file" });
      return;
    }
    if (!this.state.questionSetName) {
      notification.error({ message: "Chưa nhập tên đề" });
      return;
    }
    if (!this.state.description) {
      notification.error({ message: "Chưa nhập mô tả" });
      return;
    }
    try {
      ReadFileExcel(this.state.file).then((rows) => {
        if (size(rows) === 1) {
          notification.info({ message: "File chưa có câu hỏi" });
        } else {
          try {
            rows.shift();
            const dataQues = map(rows, (item) => {
              return {
                content: trim(item[0]),
                as_a: trim(item[1]),
                as_b: trim(item[2]),
                as_c: trim(item[3]),
                as_d: trim(item[4]),
                final: upperCase(trim(item[5])),
              };
            });
            this.onCreateQuestionSet(dataQues);
            return dataQues;
          } catch (error) {
            window.alert(error.message);
          }
        }
      });
    } catch (error) {
      window.alert(error.message);
    }
  };

  onCreateQuestionSet = async (dataQues) => {
    const fileImage = this.state.image;
    const response = await makeUploadImage(fileImage);

    let payload = {
      type: 1,
      id_topic: this.props.topic.id,
      des: this.state.questionSetName,
      level: this.state.description,
      id_qs: -1,
      total: 50,
      image: response.secure_url,
    };
    const createQuestionSetResponse = await createUpdateQuestionSetAPI(payload);
    let id_qs = get(createQuestionSetResponse.payload[0], "id_qs");
    let body = map(dataQues, (item) => {
      return {
        id_qs,
        content: get(item, "content"),
        asA: get(item, "as_a"),
        asB: get(item, "as_b"),
        asC: get(item, "as_c"),
        asD: get(item, "as_d"),
        asFinal: get(item, "final"),
      };
    });
    this.onAddQuestion(body);
  };

  render() {
    const { onChangeQuestionSetName, onChangeDescription, readFileExcel } =
      this;
    const { image, file, questionSetName, description } = this.state;
    const objectUrl = image ? window.URL.createObjectURL(image) : null;
    return (
      <main style={styles.container}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={styles.inputContainer}>
            <div style={styles.nameFolder}>Tên đề thi: </div>
            <div style={styles.leftContainer}>
              <Input
                value={questionSetName}
                onChange={onChangeQuestionSetName}
                style={styles.inputTitle}
                placeholder="Đề thi năm..."
              />
              <div style={styles.uploadBtn}>
                <UploadImage
                  ref={this.refUploadImage}
                  onChangeFile={(data) => {
                    this.setState({ image: data });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={styles.inputContainer}>
            <div style={styles.nameFolder}>Mô tả: </div>
            <Input
              value={description}
              onChange={onChangeDescription}
              style={styles.input}
              placeholder="Description..."
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={styles.previewImgContainer}>
            <div style={styles.nameFolder}>Ảnh đại diện: </div>
            <div style={styles.previewImg}>
              {objectUrl && <Image style={styles.img} src={objectUrl} />}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={styles.inputContainer}>
            <div style={styles.nameFile}>{file ? file.name : null}</div>
            <div style={styles.uploadFile}>
              <Button
                style={styles.downloadFileBtn}
                onClick={this.onDownloadTemplate}
              >
                Tải về mẫu
              </Button>
              <UploadFile
                ref={this.refUploadImage}
                onChangeFile={(data) => {
                  this.setState({ file: data });
                }}
              />
            </div>
          </div>
        </div>
        <div style={styles.btnFooter}>
          <button
            onClick={readFileExcel}
            className="customBtn noselect"
            style={styles.loginBtn}
          >
            Tải đề thi
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
    borderRadius: "0 0 20px 20px",
  },
  input: {
    height: 36,
    backgroundColor: "#2C2F48",
    color: "#fff",
    textAlign: "left",
    border: "0px",
    marginLeft: "10px",
    marginRight: "10px",
    flex: 3,
  },
  inputTitle: {
    height: 36,
    backgroundColor: "#2C2F48",
    color: "#fff",
    textAlign: "left",
    border: "0px",
    // marginLeft: "10px",
    // marginRight: "10px",
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
    alignItems: "center",
    justifyContent: "start",
  },
  previewImgContainer: {
    marginTop: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    marginLeft: "30px",
    marginRight: "30px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    width: "100%",
    // alignItems: "center",
    // justifyContent: "start",
  },
  avaContainer: {
    marginTop: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    marginLeft: "30px",
    marginRight: "30px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
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
  loginBtn: {
    width: "90%",
    height: "55px",
    backgroundColor: "#8A6AD8",
    color: "#fff",
    borderRadius: "10px",
    border: "1px solid #393D5D",
    fontSize: "18px",
  },
  btnFooter: {
    marginBottom: "10px",
    marginTop: "10px",
    textAlign: "center",
  },
  forgotPassword: {
    color: "#fff",
  },
  nameFolder: {
    color: "#fff",
    fontSize: "20px",
    flex: 1,
    fontWeight: "400",
  },
  nameFile: {
    color: "#fff",
    fontSize: "20px",
    flex: 3,
    fontWeight: "400",
  },
  image: {
    width: "100%",
    height: "200px",
  },
  previewImg: {
    marginTop: "15px",
  },
  img: {
    borderRadius: "30px",
  },
  uploadBtn: {
    flex: 1,
    marginLeft: "15px",
  },
  uploadFileBtn: {
    flex: 1,
    marginLeft: "15px",
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 3,
    width: "100%",
  },
  uploadFile: {
    flex: 1,
    display: "flex",
  },
  inputUploadFile: {
    backgroundColor: "#393D5D !important",
    color: "#fff !important",
    borderColor: " #393D5D !important",
    borderRadius: "10px",
  },
  downloadFileBtn: {
    marginRight: "10px",
    marginLeft: "10px",
  },
};

export default ModalUpload;
