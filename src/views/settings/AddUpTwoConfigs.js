import React, { Component } from "react";
import {
  Card,
  CardBody,
  FormGroup,
  Col,
  CardHeader,
  Badge,
  Label,
  Button,
  Form
} from "reactstrap";

import API from "../Utils/API";
import ExtendedInput from "../InputForConfigs";
import Period from "../Utils/Period";

class AddUpTwoConfigs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      configData: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      let configData = await API.get("/order-up-two-configs", {
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
          configData
        }
      });
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
      this.setState({ e, isLoading: false });
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

    // let updateConfigData = API.post("/admin/order-up-two-configs", {
    //   period: "2019-11-01",
    //   configs: this.state.configData
    // });
    // respons = updateConfigData.data;
    // console.log(respons);
  };

  render() {
    const { configData, isLoading } = this.state;
    return (
      <div className="animated fadeIn">
        {!isLoading ? (
          <Col xs="12" md="8">
            <Card>
              <CardHeader>
                <strong>เลข 00 - 99</strong>
                <div className="card-header-actions">
                  <Badge color="success" className="float-right">
                    ตั้งค่าลิมิต - เลข 2 ตัวบน
                  </Badge>
                </div>
              </CardHeader>
              <CardBody>
                <AddBody configs={configData}></AddBody>
              </CardBody>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row className="my-0">
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
          <p>Loading...</p>
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

export default AddUpTwoConfigs;
