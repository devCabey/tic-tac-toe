import Cookies from 'js-cookie';

export const getUser = () => Cookies.get('user');

export const setUser = (user) => {
  Cookies.set('user', user);
};
