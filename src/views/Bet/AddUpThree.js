import React, { Component } from "react";

import {
  Card,
  CardBody,
  FormGroup,
  Col,
  CardHeader,
  CardFooter,
  Badge,
  Label,
  Button,
  Form,
  FormText,
  Input,
  Table,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import API from "../Utils/API";
import Period from "../Utils/Period";

class AddUpTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      configData: [],
      isLoading: true,
      small: false,
      medium: false,
      order_num: "",
      amount: ""
    };
    this.toggleSmall = this.toggleSmall.bind(this);
    this.toggleMedium = this.toggleMedium.bind(this);
  }

  async componentDidMount() {
    try {
      let configData = await API.get("/orders", {
        params: {
          period: Period(),
          order_type: "up_three"
        }
      });
      configData = configData.data.orders;

      console.log(configData);
      this.setState({
        ...this.state,
        ...{
          isLoading: false,
          configData
        }
      });
    } catch (event) {
      console.log(`Axios request failed: ${event}`);
      this.setState({ event, isLoading: false });
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  toggleSmall() {
    this.setState({
      small: !this.state.small
    });
  }

  toggleMedium() {
    this.setState({
      medium: !this.state.medium
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (
      !this.state.amount ||
      !this.state.order_num ||
      Number(this.state.amount) === 0
    ) {
      this.setState({
        medium: true
      });
    } else {
      var inputOrderNum = this.state.order_num.padStart(3, 0);
      var inputAmount = this.state.amount;
      const selectedOrder = this.state.configData.find(
        ({ order_num }) => order_num === inputOrderNum
      );
      if (selectedOrder) {
        var configRemaining = selectedOrder.remaining_amount;

        console.log(`input amount = ${inputAmount}`);
        console.log(`config remaining = ${configRemaining}`);

        if (inputAmount > configRemaining) {
          this.setState({
            small: true
          });
        } else {
          const orders = [
            {
              order_num: inputOrderNum,
              amount: inputAmount
            }
          ];
          try {
            API.post("/orders", {
              period: Period(),
              order_type: "up_three",
              orders
            }).then(res => {
              console.log(res);
              console.log(res.data);
              window.location.reload();
            });
          } catch (event) {
            console.log(`Axios request failed: ${event}`);
            this.setState({ event, isLoading: false });
          }
        }
      }
    }
  };

  orderNumChange = event => {
    const re1 = /^[0-9\b]+$/;
    if (event.target.value === "" || re1.test(event.target.value)) {
      this.setState(
        {
          order_num: event.target.value
        },
        () => {
          console.log(this.state.order_num);
        }
      );
    }
  };

  amountChange = event => {
    const re2 = /^[0-9\b-]+$/;
    if (event.target.value === "" || re2.test(event.target.value)) {
      this.setState(
        {
          amount: event.target.value
        },
        () => {
          console.log(this.state.amount);
        }
      );
    }
  };

  ResetForm = event => {
    this.setState(
      {
        order_num: "",
        amount: ""
      },
      () => {
        console.log("ล้างค่า");
      }
    );
  };

  onDismiss() {
    this.setState({ visible: true });
  }
  render() {
    const { configData, isLoading } = this.state;
    return (
      <div className="animated fadeIn">
        {!isLoading ? (
          <Row>
            <Col xs="12" md="8">
              <Card>
                <CardHeader>
                  <strong>เพิ่มเลข 3 ตัวบน</strong>
                  <div className="card-header-actions">
                    <Badge color="success" className="float-right">
                      เลข 000 - 999
                    </Badge>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup row>
                      <Col xs="4" md="3">
                        <Label htmlFor="text-input">เลขหลัก</Label>
                      </Col>
                      <Col xs="8" md="5">
                        <Input
                          type="text"
                          autoComplete="off"
                          min={0}
                          maxLength="3"
                          id="order-num"
                          name="order-num"
                          value={this.state.order_num}
                          onChange={this.orderNumChange}
                        />
                        <FormText color="muted">
                          ใส่เลข 3 หลัก 000 - 999
                        </FormText>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col xs="4" md="3">
                        <Label htmlFor="text-input">จำนวน</Label>
                      </Col>
                      <Col xs="8" md="5">
                        <Input
                          type="text"
                          autoComplete="off"
                          min={0}
                          max="1000000"
                          maxLength="7"
                          id="amount"
                          name="amount"
                          value={this.state.amount}
                          onChange={this.amountChange}
                        />
                        <FormText color="muted">ไม่เกิน 1000000</FormText>
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
                        <Button
                          type="reset"
                          color="danger"
                          onClick={this.ResetForm}
                        >
                          <i className="fa fa-ban"></i>&nbsp;ล้างค่า
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardFooter>
                <Modal
                  isOpen={this.state.small}
                  toggle={this.toggleSmall}
                  className={"modal-danger " + this.props.className}
                >
                  <ModalHeader toggle={this.toggleSmall}>
                    *** คำเตือน ***
                  </ModalHeader>
                  <ModalBody>
                    เกินลิมิตที่ตั้งไว้! กรุณาใส่ค่าใหม่อีกครั้ง
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={this.toggleSmall}>
                      ลองใหม่อีกครั้ง
                    </Button>
                  </ModalFooter>
                </Modal>
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
            <Col xs="12" md="8">
              <Card>
                <CardHeader>
                  <strong>ตารางแสดงผลค่าที่รับได้</strong>
                </CardHeader>
                <CardBody>
                  <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <Table responsive striped>
                      <thead>
                        <tr className="table-header-color-orders">
                          <th>
                            <strong>เลขหลัก</strong>
                          </th>
                          <th>
                            <strong>จำนวนลิมิต</strong>
                          </th>
                          <th>
                            <strong>รับมาแล้วทั้งหมด</strong>
                          </th>
                          <th>
                            <strong>ยังรับได้อีก</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <AddTable configs={configData}></AddTable>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    );
  }
}

const AddTable = ({ configs }) =>
  configs.map((config, index) => {
    const { order_num, limit, amount, remaining_amount } = config;
    return (
      <tr key={index}>
        <td>เลข {order_num}</td>
        <td>{limit}</td>
        <td>{amount}</td>
        <td>{remaining_amount}</td>
      </tr>
    );
  });

export default AddUpTwo;
