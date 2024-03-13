import Cookies from 'js-cookie';

export const getUser = () => JSON.parse(Cookies.get('user'));

export const setUser = (user) => {
  Cookies.set('user', JSON.stringify(user));
};
