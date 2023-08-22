import React from 'react';
import { Link } from './ActionLink.styled';

const ActionLink = ({ link, children, btnType, action }) => {
  return (
    <Link btnType={btnType} href={link} onClick={action}>
      {children}
    </Link>
  );
};

export default ActionLink;
