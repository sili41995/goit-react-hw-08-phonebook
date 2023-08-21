import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';
import initialState from 'redux/initialState';
import contactsServiceApi from 'service/contactsServiceApi';

const useToken = () => {
  const token = useSelector(selectToken);

  useEffect(() => {
    contactsServiceApi.token = token ? token : initialState.auth.token;
  }, [token]);

  return token;
};

export default useToken;
