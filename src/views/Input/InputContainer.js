import React from "react";
import PropTypes from "prop-types";

class InputContainer extends React.Component {
  static propTypes = {
    maxValue: PropTypes.number.isRequired
  };

  state = {
    show: false
  };

  onChange = event => {
    const { maxValue } = this.props;
    const currentValue = event.target.value;

    if (currentValue > maxValue) {
      // TODO:
      this.setState({ show: true });
    } else {
      // PASS
      this.setState({ show: false });
    }
  };

  render() {
    const { component: Component, maxValue, ...restProps } = this.props;
    return (
      <Component
        onChange={this.onChange}
        show={this.state.show}
        maxValue={maxValue}
        {...restProps}
      ></Component>
    );
  }
}

export default InputContainer;
