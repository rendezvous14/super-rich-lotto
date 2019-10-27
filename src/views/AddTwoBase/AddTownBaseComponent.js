import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Form,
  FormGroup,
  Button,
  Label
} from "reactstrap";

import ExtendedInput from "../Input";

const AddTownBaseComponent = ({ start, end }) => {
  const limit = end - start;
  const listForms = Array.from({ length: limit }).map((value, index) => (
    <Form
      key={index}
      action=""
      method="post"
      className="form-horizontal"
      id="Add-up-two-1"
    >
      <FormGroup row>
        <Col md="4">
          <Label htmlFor="text-input">เลข {pad(start + index, 2)}</Label>
        </Col>
        <Col xs="12" md="8">
          <ExtendedInput maxValue={100} id={`input-${index}`} />
        </Col>
      </FormGroup>
    </Form>
  ));

  return (
    <Col xs="12" md="3">
      <Card>
        <CardHeader>
          <strong>
            เลข {pad(start, 2)} - {pad(end - 1, 2)}
          </strong>
        </CardHeader>
        <CardBody>{listForms}</CardBody>
        <CardFooter>
          <Button type="submit" size="sm" color="primary">
            <i className="fa fa-dot-circle-o"></i> Submit
          </Button>
          <Button type="reset" size="sm" color="danger">
            <i className="fa fa-ban"></i> Reset
          </Button>
        </CardFooter>
      </Card>
    </Col>
  );
};

AddTownBaseComponent.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number
};

function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

export default AddTownBaseComponent;
