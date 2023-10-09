import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import { CloudLightning } from "react-feather";
export default class AddTradingViewCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
       desc: "",
      editorState: EditorState.createEmpty(),
      image: "",
      selectedFile:null,
      selectedName:"",
      chart_type: "",
  };
  }
  onEditorStateChange = (editorState) => {
    console.log(editorState)
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };
  handleImg = (e) => {
      console.log(e.target.files[0].name);
      this.setState({ selectedFile: e.target.files[0] });
      this.setState({ selectedName: e.target.files[0].name });
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
   const formData = new FormData();
    formData.append("title",this.state.title)
    formData.append("desc",this.state.desc)
    formData.append("chart_type",this.state.chart_type)
 

    if (this.state.selectedFile != null) {
        formData.append("image", this.state.selectedFile, this.state.selectedName);
    
      }
    axiosConfig
      .post("admin/addTrending_chart", formData)
      .then((response) => {
        console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem
                  href="/app/explore/Trupee/tradingViewCharts"
                  tag="a"
                >
                  TradingViewCharts
                </BreadcrumbItem>
                <BreadcrumbItem active>Add TradingViewCharts</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col className="col-sm-6">
              <h1 className="float-left">Add TradingViewCharts</h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/explore/Trupee/tradingViewCharts")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Image</Label>
                  <Input
                    type="file"
                    name="image"
                    onChange={this.handleImg}
                  ></Input> </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Chart Type</Label>
                  <Input
                    required
                    defaultValue=""
                    id="exampleSelect"
                    name="chart_type"
                    type="select"
                    value={this.state.call_type}
                    onChange={this.changeHandler}
                  >
                    <option value="" disabled>
                      Select Chart Type
                    </option> 
                    <option>Stock Chart</option>
                    <option>Index Chart</option>
                   </Input>
                </Col>
              <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Descripition</Label>
                  <Editor
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "fontFamily",
                      ],
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
                        strikethrough: {
                          className: "bordered-option-classname",
                        },
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
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add TradeChart
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
