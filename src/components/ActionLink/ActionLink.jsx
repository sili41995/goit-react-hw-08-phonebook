import React from 'react';
import { Link } from './ActionLink.styled';

const ActionLink = ({ link, children, type }) => {
  return (
    <Link type={type} href={link}>
      {children}
    </Link>
  );
};

export default ActionLink;
