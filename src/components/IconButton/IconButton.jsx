import React from 'react';
import { Button } from './IconButton.styled';

const IconButton = ({ children, onBtnClick, ...props }) => (
  <Button onClick={onBtnClick} {...props}>
    {children}
  </Button>
);

export default IconButton;
