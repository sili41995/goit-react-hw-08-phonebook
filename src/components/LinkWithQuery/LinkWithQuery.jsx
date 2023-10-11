import { Link, useLocation } from 'react-router-dom';

const LinkWithQuery = ({ children, to, ...props }) => {
  const { search } = useLocation();
  const path = to + search;

  return (
    <Link to={path} {...props}>
      {children}
    </Link>
  );
};

export default LinkWithQuery;
