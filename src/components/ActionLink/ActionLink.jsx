import React from 'react';
import { Link } from './ActionLink.styled';
import makeBlur from 'utils/makeBlur';

const ActionLink = ({ link, children, btnType }) => {
  const onBtnClick = (e) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Link btnType={btnType} href={link} onClick={onBtnClick}>
      {children}
    </Link>
  );
};

export default ActionLink;
