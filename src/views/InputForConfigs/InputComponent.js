import React from "react";
import PropTypes from "prop-types";
import { Form, Input, FormGroup } from "reactstrap";

const target = React.createRef();

const InputComponent = ({ id, maxValue }) => {
  return (
    <React.Fragment>
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <FormGroup>
          <Input
            type="number"
            min={0}
            id={id}
            name={id}
            placeholder={maxValue}
            ref={target}
          />
        </FormGroup>
      </Form>
    </React.Fragment>
  );
};

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  maxValue: PropTypes.number.isRequired
};

export default InputComponent;
