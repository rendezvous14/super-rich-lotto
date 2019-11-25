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
  Row
} from "reactstrap";

import API from "../Utils/API";
import Period from "../Utils/Period";

class AddUpThreeConfigs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      configData: [],
      isLoading: true,
      order_num: "",
      limit: ""
    };
  }

  async componentDidMount() {
    try {
      let configData = await API.get("/order-up-three-configs", {
        params: {
          period: Period()
        }
      });
      configData = configData.data.configs;
      console.log(configData);
      this.setState({
        ...this.state,
        ...{
          isLoading: false,
          configData,
          order_num: "",
          limit: ""
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

  handleSubmit = event => {
    event.preventDefault();

    const configs = [
      {
        order_num: this.state.order_num.padStart(3, 0),
        limit: this.state.limit
      }
    ];
    try {
      API.post("/admin/order-up-three-configs", {
        period: Period(),
        configs
      }).then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
      });
    } catch (event) {
      console.log(`Axios request failed: ${event}`);
      this.setState({ event, isLoading: false });
    }
  };

  orderNumChange = event => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
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

  limitChange = event => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      this.setState(
        {
          limit: event.target.value
        },
        () => {
          console.log(this.state.limit);
        }
      );
    }
  };

  ResetForm = () => {
    this.setState(
      {
        order_num: "",
        limit: ""
      },
      () => {
        console.log("ล้างค่า");
      }
    );
  };

  render() {
    const { configData, isLoading } = this.state;
    return (
      <div className="animated fadeIn">
        {!isLoading ? (
          <Row>
            <Col xs="12" md="8">
              <Card>
                <CardHeader>
                  <strong>ตั้งค่าลิมิต - เลข 3 ตัวบน</strong>
                  <div className="card-header-actions">
                    <Badge color="danger" className="float-right">
                      เลข 000 - 999
                    </Badge>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup row>
                      <Col xs="4" md="3">
                        <Label htmlFor="text-input">เลข</Label>
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
                          className="form-control-warning"
                          type="text"
                          autoComplete="off"
                          min={0}
                          max="1000000"
                          maxLength="7"
                          id="amount"
                          name="amount"
                          value={this.state.limit}
                          onChange={this.limitChange}
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
                        </Button>
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
              </Card>
            </Col>

            <Col xs="12" md="8">
              <Card>
                <CardHeader>
                  <strong>แสดงผลการตั้งค่าลิมิต - เลข 3 ตัวบน</strong>
                </CardHeader>
                <CardBody>
                  <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <Table responsive striped>
                      <thead>
                        <tr className="table-header-color">
                          <th>
                            <strong>เลขหลัก</strong>
                          </th>
                          <th>
                            <strong>จำนวนลิมิต</strong>
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
    const { order_num, limit } = config;
    return (
      <tr key={index}>
        <td>เลข {order_num}</td>
        <td>{limit}</td>
      </tr>
    );
  });

export default AddUpThreeConfigs;
