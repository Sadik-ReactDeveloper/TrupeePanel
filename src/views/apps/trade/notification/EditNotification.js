import React from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  Form,
  Button,
  Label,
  Input,
} from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, convertToRaw, RichUtils } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "../../../../assets/scss/plugins/extensions/editor.scss";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

class EditNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    console.log(editorState);

    this.setState({
      editorState,
      // desc: convertToRaw(editorState.getCurrentContent()),
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return "handled";
    }

    return "not-handled";
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getone_term_cond/${id}`)
      .then((response) => {
        console.log(response.data.data.desc);
        this.setState({
          desc: response.data.data.desc,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    console.log(id);
    axiosConfig
      .post(`/admin/edit_term_cond/${id}`, this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Edit Notification
            </h1>
          </Col>
          <Col>
            <Route
              render={({ history }) => (
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.push("/app/trade/generalNotifList")}
                >
                  Back
                </Button>
              )}
            />
          </Col>
        </Row>
        <CardBody>
          <Form onSubmit={this.submitHandler}>
            <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Title</Label>
                <Input
                  required
                  type="text"
                  name="value"
                  placeholder="Title"
                  value={this.state.value}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Image</Label>
                <Input
                  required
                  type="file"
                  name="value"
                  value={this.state.value}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
            </Row>
            <Editor
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onEditorStateChange={this.onEditorStateChange}
              toolbarClassName="demo-toolbar-absolute"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              toolbar={{
                options: ["inline", "blockType", "fontSize", "fontFamily"],
                inline: {
                  options: [
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "monospace",
                  ],
                  bold: { className: "bordered-option-classname" },
                  italic: { className: "bordered-option-classname" },
                  underline: { className: "bordered-option-classname" },
                  strikethrough: { className: "bordered-option-classname" },
                  code: { className: "bordered-option-classname" },
                },
                blockType: {
                  className: "bordered-option-classname",
                },
                fontSize: {
                  className: "bordered-option-classname",
                },
                fontFamily: {
                  className: "bordered-option-classname",
                },
              }}
            />
            <br />
            <Button color="primary">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default EditNotification;
