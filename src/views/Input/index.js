import React from 'react';
import InputContainer from './InputContainer';
import InputComponent from './InputComponent';

const ExtendedInput = props => (
  <InputContainer component={InputComponent} {...props}></InputContainer>
);

export default ExtendedInput;
