import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="grey"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: '1',
    }}
    wrapperClassName=""
    visible={true}
  />
);

export default Loader;
