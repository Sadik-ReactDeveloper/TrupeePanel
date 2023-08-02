import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  CustomInput,
} from "reactstrap";
import { Route } from "react-router-dom";
import swal from "sweetalert";
import axiosConfig from "../../../../axiosConfig";

export class TradeAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      script_type: "",
      fnoequty_scrpt_name: "",
      script_name: "",
      active_value: "",
      active_value2: "",
      call_type: "",
      SL: "",
      sl_type: "false",
      T1: "",
      t1_type: "false",
      T2: "",
      t2_type: "false",
      T3: "",
      t3_type: "false",
      T4: "",
      t4_type: "false",
      t5: "",
      t5_type: "false",
      qty: "",
      no_of_lots: "",
      expiryDate: "",

      // cstmMsg: "",
    };
    this.state = {
      // scriptT: [],
      type: "Equity",
      scriptN: [],
      expdateI: [],
    };
  }
  //Script//
  async componentDidMount() {
    axiosConfig
      .get("/admin/getEquityScript")
      .then((response) => {
        this.setState({
          scriptN: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // expDate//
    axiosConfig
      .get("/admin/datelist")
      .then((response) => {
        this.setState({
          expdateI: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/admin/add_fnoEquity", this.state)
      .then((response) => {
        console.log("option", response.data.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/trade/fnoEquityList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                You Can Send Trade Alert Message
              </h1>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <CustomInput
                    type="select"
                    name="expiryDate"
                    value={this.state.expiryDate}
                    onChange={this.changeHandler}
                  >
                    <option>Expiry Date</option>
                    {this.state.expdateI?.map((allExpDate) => (
                      <option value={allExpDate?._id} key={allExpDate?._id}>
                        {allExpDate?.expDate}
                      </option>
                    ))}
                  </CustomInput>
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <Label for="exampleSelect">Trade Type</Label>
                  <Input
                    name="trade_type"
                    type="select"
                    value={this.state.trade_type}
                    onChange={this.changeHandler}
                  >
                    <option>Select Trade</option>
                    <option>FNO INDEX</option>
                    <option>FNO OPTION</option>
                    <option>CASH EQUITY</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Script Name</Label>
                  <CustomInput
                    type="select"
                    name="fnoequty_scrpt_name"
                    value={this.state.fnoequty_scrpt_name}
                    onChange={this.changeHandler}
                  >
                    <option>Select Script</option>
                    {this.state.scriptN?.map((allScript) => (
                      <option value={allScript?._id} key={allScript?._id}>
                        {allScript?.scriptName}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Trade Alert</Label>
                  <Input
                    type="text"
                    placeholder="Keep booking or trailing stop loss"
                    name="cstmMsg"
                    value={this.state.cstmMsg}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Send Alert
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default TradeAlert;
