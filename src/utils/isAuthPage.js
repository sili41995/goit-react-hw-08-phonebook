import { getAuthPages } from 'utils';

const isAuthPage = (path) => getAuthPages().includes(path);

export default isAuthPage;
