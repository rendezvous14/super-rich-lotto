import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Badge
} from "reactstrap";

class AddUpTwo extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      data: []
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  // Initial Form
  state = {
    name: "",
    age: 0,
    address: "",
    data: []
  };

  componentDidMount() {
    this.setState({
      data: [1, 2]
    });
  }

  onSubmit = event => {
    console.info(event);
    event.stopPropagation();
    event.preventDefault();
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Form
          className="form-horizontal"
          id="Add-up-two-1"
          onSubmit={this.onSubmit}
        >
          <Row>
            <Col xs="12" md="3">
              <Card>
                <CardHeader>
                  <strong>เลข 00 - 24</strong>
                  <div className="card-header-actions">
                    <Badge color="success" className="float-right">
                      เลข 2 ตัวบน
                    </Badge>
                  </div>
                </CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 00</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 01</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 02</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 03</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 04</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 05</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 06</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 07</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 08</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 09</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 10</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 11</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 12</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 13</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 14</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 15</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 16</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 17</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 18</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 19</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 20</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 21</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 22</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 23</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 24</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="3">
              <Card>
                <CardHeader>
                  <strong>เลข 25 - 49</strong>
                </CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 25</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 26</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 27</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 28</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 29</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 30</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 31</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 32</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 33</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 34</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 35</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 36</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 37</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 38</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 39</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 40</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 41</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 42</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 43</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 44</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 45</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 46</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 47</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 48</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 49</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="3">
              <Card>
                <CardHeader>
                  <strong>เลข 50 - 74</strong>
                </CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 50</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 51</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 52</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 53</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 54</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 55</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 56</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 57</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 58</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 59</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 60</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 61</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 62</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 63</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 64</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 65</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 66</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 67</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 68</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 69</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 70</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 71</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 72</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 73</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 74</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="3">
              <Card>
                <CardHeader>
                  <strong>เลข 75 - 99</strong>
                </CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 75</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 76</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 77</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 78</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 79</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 80</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 81</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 82</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 83</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 84</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 85</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 86</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 87</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 88</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 89</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 90</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 91</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 92</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 93</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 94</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 95</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 96</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 97</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 98</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="text-input">เลข 99</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="number"
                        min="0"
                        max="99999"
                        id="text-input"
                        name="text-input"
                        placeholder="0"
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Card>
            <CardBody>
              <FormGroup row className="my-0">
                <Col md="3" xs="4">
                  <InputGroup>
                    <Input
                      type="email"
                      id="username3"
                      name="username3"
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
                <Col md="4">
                  <Button type="submit" color="success">
                    <i className="fa fa-dot-circle-o"></i> &nbsp;&nbsp; ยืนยัน
                    &nbsp;&nbsp;
                  </Button>
                  <Button type="reset" color="danger">
                    <i className="fa fa-ban"></i> ล้างค่า
                  </Button>
                </Col>
              </FormGroup>
            </CardBody>
          </Card>
        </Form>
      </div>
    );
  }
}

export default AddUpTwo;
