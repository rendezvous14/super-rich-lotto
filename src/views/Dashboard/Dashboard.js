import React, { Component } from "react";

import {
  Card,
  CardBody,
  FormGroup,
  Col,
  CardHeader,
  CardFooter,
  Label,
  Button,
  Form,
  FormText,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import ReportExtUpTwo from "./ReportExtUpTwo";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      medium: false,
      startDate: new Date()
    };
    this.toggleMedium = this.toggleMedium.bind(this);
    this.showTable = this.showTable.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  toggleMedium() {
    this.setState({
      medium: !this.state.medium
    });
  }

  showTable = bool => {
    this.setState({
      showTable: bool
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("ABC");

    this.setState({
      visible: true
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <h2>รายการสั่งซื้อ</h2>
                <div className="card-header-actions"></div>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Col xs="4" md="3">
                      <Label htmlFor="text-input">
                        <h5>เลือกวันที่งวด</h5>
                      </Label>
                    </Col>
                    <Col xs="8" md="5">
                      <h4>
                        <PickDate className="my-0"></PickDate>
                      </h4>
                      <FormText color="muted">
                        วันที่ 1 หรือ 16 ของเดือน
                      </FormText>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row className="my-0">
                    <Col xs="12" md="5">
                      <Button type="submit" color="success">
                        <i className="cui-circle-check"></i>
                        &nbsp;ยืนยัน
                      </Button>{" "}
                    </Col>
                  </FormGroup>
                </Form>
              </CardFooter>
              <div className="animated fadeIn" visible={this.state.showTable}>
                <Col xs="12" md="12">
                  <Card>
                    <CardHeader>
                      <strong>เลขท้าย 2 ตัวบน</strong>
                    </CardHeader>
                    <CardBody>
                      {/* <AddReportUpTwo
                        inputDate={this.state.startDate}
                      ></AddReportUpTwo> */}
                    </CardBody>
                  </Card>
                </Col>
              </div>
              <Modal
                isOpen={this.state.medium}
                toggle={this.toggleMedium}
                className={"modal-danger " + this.props.className}
              >
                <ModalHeader toggle={this.toggleMedium}>
                  *** คำเตือน ***
                </ModalHeader>
                <ModalBody>กรุณาใส่ค่า เลขหลัก และ จำนวน</ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={this.toggleMedium}>
                    ลองใหม่อีกครั้ง
                  </Button>
                </ModalFooter>
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

class PickDate extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}
// const AddReportUpTwo = ({ startDate }) => {
//   return (
//     <React.Fragment>
//       <ReportExtUpTwo component={startDate} {...props}></ReportExtUpTwo>
//     </React.Fragment>
//   );
// };

export default Dashboard;
