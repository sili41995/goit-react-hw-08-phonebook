import { Button } from './IconButton.styled';

const IconButton = ({ children, type = 'button', onBtnClick, ...props }) => (
  <Button type={type} onClick={onBtnClick} {...props}>
    {children}
  </Button>
);

export default IconButton;
