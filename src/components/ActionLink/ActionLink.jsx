import React from 'react';
import { Link } from './ActionLink.styled';

const ActionLink = ({ link, children, btnType }) => {
  return (
    <Link btnType={btnType} href={link}>
      {children}
    </Link>
  );
};

export default ActionLink;
