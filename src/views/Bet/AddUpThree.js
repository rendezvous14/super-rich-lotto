import React, { Component } from "react";
import {
  Card,
  CardBody,
  FormGroup,
  Col,
  CardHeader,
  Badge,
  Label,
  InputGroupAddon,
  InputGroup,
  Input,
  Button,
  InputGroupText,
  Form
} from "reactstrap";

import axios from "axios";

import ExtendedInput from "../Input";

class AddUpThree extends Component {
  state = {
    collapse: true,
    fadeIn: true,
    timeout: 300,
    configuration: [],
    isLoading: false
  };

  componentDidMount() {
    axios
      .get(
        "https://tranquil-dusk-72376.herokuapp.com/order-up-three-configs",
        {
          params: {
            period: "2019-11-01"
          }
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        console.log(response);
        this.setState({
          configuration: response.data.configs,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
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
    const order = {
      name: this.state.name
    };

    axios
      .post("https://demo5460031.mockable.io/admin/order-up-three-configs", {
        order
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    const { configuration, isLoading } = this.state;
    return (
      <div className="animated fadeIn">
        {!isLoading ? (
          <Col xs="12" md="8">
            <Card>
              <CardHeader>
                <strong>เลข 000 - 999</strong>
                <div className="card-header-actions">
                  <Badge color="success" className="float-right">
                    เลข 3 ตัวบน
                  </Badge>
                </div>
              </CardHeader>
              <CardBody>
                <AddBody configs={configuration}></AddBody>
              </CardBody>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row className="my-0">
                    <Col xs="12" md="5">
                      <InputGroup>
                        <Input
                          type="text"
                          id="username"
                          name="username"
                          autoComplete="name"
                          placeholder="กรอกชื่อลูกค้า"
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="fa fa-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col xs="12" md="5">
                      <Button type="submit" color="success">
                        <i className="fa fa-dot-circle-o"></i> ยืนยัน
                      </Button>
                      <Button type="reset" color="danger">
                        <i className="fa fa-ban"></i> ล้างค่า
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    );
  }
}

const AddBody = ({ configs }) =>
  configs.map(config => {
    const { order_num, limit } = config;
    return (
      <FormGroup row key={order_num}>
        <Col xs="4" md="3">
          <Label htmlFor="text-input">เลข {order_num}</Label>
        </Col>
        <Col xs="8" md="5">
          <ExtendedInput
            maxValue={limit}
            id={`up_two_order_num_${order_num}`}
          />
        </Col>
      </FormGroup>
    );
  });

export default AddUpThree;
