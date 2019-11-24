import React from "react";
import PropTypes from "prop-types";

class InputContainer extends React.Component {
  static propTypes = {
    maxValue: PropTypes.number.isRequired
  };

  state = {
    order_num: null,
    limit: null
  };

  render() {
    const { component: Component, maxValue, ...restProps } = this.props;
    return <Component maxValue={maxValue} {...restProps}></Component>;
  }
}

export default InputContainer;
