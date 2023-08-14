import authPages from 'constants/authPages';

const isAuthPage = (path) => authPages.includes(path);

export default isAuthPage;
