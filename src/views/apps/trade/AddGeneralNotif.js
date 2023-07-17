// import React, { Component } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   Row,
//   Col,
//   Form,
//   Label,
//   Input,
//   CustomInput,
//   Button,
//   Breadcrumb,
//   BreadcrumbItem,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// // import { history } from "../../../../history";
// import swal from "sweetalert";
// import { Route } from "react-router-dom";

// export default class AddStartUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       desc: "",
//       img: "",
//       selectedName: "",
//       selectedFile: null,
//     };
//   }
//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//     console.log(event.target.files[0]);
//   };
//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     const data = new FormData();
//     data.append("title", this.state.title);
//     data.append("desc", this.state.desc);
//     data.append("img", this.state.selectedFile, this.state.selectedName);

//     axiosConfig
//       .post("/admin/add_notification", data)

//       .then((response) => {
//         console.log(response.data);

//         swal("Success!", "Submitted SuccessFull!", "success");
//         this.props.history.push("/app/trade/generalNotifList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <Row>
//           <Col sm="12">
//             <div>
//               <Breadcrumb listTag="div">
//                 <BreadcrumbItem href="/analyticsDashboard" tag="a">
//                   Home
//                 </BreadcrumbItem>
//                 <BreadcrumbItem href="/app/trade/generalNotifList" tag="a">
//                   General Notification List
//                 </BreadcrumbItem>
//                 <BreadcrumbItem active>Add General Notification</BreadcrumbItem>
//               </Breadcrumb>
//             </div>
//           </Col>
//         </Row>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Add General Notification
//               </h1>
//             </Col>
//             <Col>
//               <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-danger float-right"
//                     onClick={() => history.push("/app/trade/generalNotifList")}
//                   >
//                     Back
//                   </Button>
//                 )}
//               />
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Title</Label>
//                   <Input
//                     required
//                     type="text"
//                     name="title"
//                     placeholder="Title"
//                     value={this.state.title}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Image</Label>
//                   <CustomInput
//                     required
//                     type="file"
//                     name="img"
//                     onChange={this.onChangeHandler}
//                   />
//                 </Col>

//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Descripition</Label>
//                   <Input
//                     required
//                     type="textarea"
//                     name="desc"
//                     placeholder="Descripition"
//                     value={this.state.desc}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 {/* <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label className="mb-1">Status</Label>
//                   <div
//                     className="form-label-group"
//                     onChange={(e) => this.changeHandler1(e)}
//                   >
//                     <input
//                       style={{ marginRight: "3px" }}
//                       type="radio"
//                       name="status"
//                       value="Active"
//                     />
//                     <span style={{ marginRight: "20px" }}>Active</span>

//                     <input
//                       style={{ marginRight: "3px" }}
//                       type="radio"
//                       name="status"
//                       value="Inactive"
//                     />
//                     <span style={{ marginRight: "3px" }}>Inactive</span>
//                   </div>
//                 </Col>  */}
//               </Row>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1"
//                   >
//                     Add General Notification
//                   </Button.Ripple>
//                 </Col>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
import React, { useState } from "react";
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
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  EmojiClickData,
  Emoji,
  SuggestionMode,
  SkinTonePickerLocation,
} from "emoji-picker-react";
function AddGeneralNotif() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState("");

  function handleEmoji(emojiData, event) {
    console.log(emojiData);
    setSelectedEmoji(emojiData.unified);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("title", title);
    data.append("desc", desc);
    if (selectedImage !== null) {
      data.append("image", selectedImage);
    }
    axiosConfig
      .post("/admin/add_notification", data)
      .then((response) => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedImage(file);
  };
  return (
    <>
      <div>
        {/* <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/trade/generalNotifList" tag="a">
                  General Notification List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add General Notification</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row> */}
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Add General Notification</h1>
            </Col>
            {/* <Col>
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
          </Col> */}
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={(e) => submitHandler(e)}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setTitle(e.target.value);
                    }}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <CustomInput
                    required
                    type="file"
                    name="img"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Descripition</Label>
                  <Input
                    required
                    type="textarea"
                    name="desc"
                    placeholder="Descripition"
                    value={desc}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setDesc(e.target.value);
                    }}
                  ></Input>
                </Col>
                <div className="">
                  <div className="show-emoji">
                    Your selected Emoji is:
                    {selectedEmoji ? (
                      <Emoji
                        unified={selectedEmoji}
                        emojiStyle={EmojiStyle.APPLE}
                        size={22}
                      />
                    ) : null}
                  </div>
                  <div>
                    <EmojiPicker
                      onEmojiClick={handleEmoji}
                      autoFocusSearch={false}
                      emojiStyle={EmojiStyle.NATIVE}
                      height="400px"
                    />
                  </div>
                </div>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add General Notification
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AddGeneralNotif;
