import { Link, useLocation } from 'react-router-dom';

const LinkWithQuery = ({ children, to, ...props }) => {
  const { search } = useLocation();

  return (
    <Link to={to + search} {...props}>
      {children}
    </Link>
  );
};

export default LinkWithQuery;
