import React from "react";
import PropTypes from "prop-types";
import { Form, Input, FormGroup, FormFeedback } from "reactstrap";

const target = React.createRef();

const InputComponent = ({ id, maxValue, onChange }) => {
  return (
    <React.Fragment>
      <Form
        className="was-validated"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <FormGroup>
          <Input
            className="form-control-warning"
            type="number"
            min={0}
            max={maxValue}
            id={id}
            name={id}
            placeholder="0"
            onChange={onChange}
            ref={target}
          />
          <FormFeedback valid className="help-block">
            สามารถรับเพิ่มได้อีก {maxValue}
          </FormFeedback>
          <FormFeedback className="help-block" target={id}>
            เพิ่มจำนวนได้ไม่เกิน {maxValue}
          </FormFeedback>
        </FormGroup>
      </Form>
    </React.Fragment>
  );
};

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  maxValue: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputComponent;
