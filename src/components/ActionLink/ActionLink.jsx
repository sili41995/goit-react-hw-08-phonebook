import { Link } from './ActionLink.styled';
import utils from 'utils';

const { makeBlur } = utils;

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
