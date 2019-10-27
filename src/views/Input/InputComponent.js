import React from 'react';
import PropTypes from 'prop-types';
import { Input, Tooltip } from 'reactstrap';

const target = React.createRef();

const InputComponent = ({ id, maxValue, show, onChange }) => {
  return (
    <React.Fragment>
      <Input
        type="number"
        min={0}
        max={maxValue}
        id={id}
        name={id}
        placeholder={maxValue}
        onChange={onChange}
        ref={target}
      />
      <Tooltip target={id} isOpen={show} placement="bottom">
        เพิ่มจำนวนได้ไม่เกิน {maxValue}
      </Tooltip>
    </React.Fragment>
  );
};

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  maxValue: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputComponent;
