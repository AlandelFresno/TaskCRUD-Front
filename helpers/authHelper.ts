import Swal from 'sweetalert2';
import fetchAPI from '../axios/axios';
import { login, logout, removeToken, saveToken } from '../slices/authSlice';

export const loginHelper = async (
  dispatch: Function,
  userData: { email: string; password: string },
  router: { push: Function }
) => {
  console.log(userData);
  try {
    const { data } = await fetchAPI({
      method: 'post',
      url: '/auth/login',
      data: {
        email: userData.email,
        password: userData.password,
      },
    });
    sessionStorage.setItem('token', data.token);
    dispatch(
      login({ name: data.user.name, email: data.user.name, id: data.user.id })
    );
    dispatch(saveToken(data.token));
    router.push('/home');
    Swal.fire({
      title: 'Logged succesfully',
      icon: 'success',
      toast: true,
      timer: 3000,
      timerProgressBar: true,
      position: 'top-end',
      buttonsStyling: true,
    });
  } catch (error: any) {
    console.log(error);
    Swal.fire({
      title: error.response.data.msg,
      icon: 'error',
      toast: true,
    });
  }
};

export const logoutHelper = (
  dispatch: Function,
  router: { push: Function }
) => {
  sessionStorage.removeItem('token');
  dispatch(logout());
  dispatch(removeToken());
  router.push('/');
};

export const registerHelper = async (
  dispatch: Function,
  router: { push: Function },
  userData: { name: string; email: string; password: string }
) => {
  try {
    const { data } = await fetchAPI({
      method: 'post',
      url: '/auth/register',
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      },
    });
    sessionStorage.setItem('token', data.token);
    dispatch(
      login({ name: data.user.name, email: data.user.name, id: data.user.id })
    );
    dispatch(saveToken(data.token));
    router.push('/home');
    Swal.fire({
      title: 'Successful registration',
      icon: 'success',
      toast: true,
      timer: 3000,
      timerProgressBar: true,
      position: 'top-end',
    });
  } catch (error: any) {
    console.log(error);
    Swal.fire({
      title: error.response.data.msg,
      icon: 'error',
      toast: true,
    });
  }
};
