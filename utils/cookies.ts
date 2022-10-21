import cookies from 'js-cookie';

const QUERY = 'query';

const setQuery = (value: string) => cookies.set(QUERY,value);
const getQuery = () => cookies.get(QUERY) || '';

export {setQuery,getQuery};