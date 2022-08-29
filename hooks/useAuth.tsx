import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import fetchAPI from '../axios/axios';
import { login, saveToken } from '../slices/authSlice';

interface IAuth {
  user: object | null;
  error: string | null;
  loading: boolean;
  token: string | null;
}

const AuthContext = createContext<IAuth>({
  user: { name: '', email: '' },
  error: null,
  loading: false,
  token: '',
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [initialLoading, setInitialLoading] = useState(false);
  const router = useRouter();
  const { user, loading, token, error } = useSelector(
    (state: RootState) => state.auth
  );
  const [response, setResponse] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setInitialLoading(true);
    const storageToken = sessionStorage.getItem('token');

    const authMe = async () => {
      try {
        const res = await fetchAPI({
          method: 'get',
          url: '/auth/me',
          headers: { Authorization: `Bearer ${storageToken}` },
        });

        if (res) {
          switch (router.pathname) {
            case '/login':
              router.push('/home');
              break;
            case '/register':
              router.push('/home');
              break;
            case '/':
              router.push('/home');
              break;
            default:
              break;
          }
          setResponse(res);
          dispatch(login(res.data.user));
          if (storageToken) {
            dispatch(saveToken(storageToken));
          }
        }
      } catch (error) {
        switch (router.pathname) {
          case '/home':
            router.push('/login');
            break;
          default:
            break;
        }
      }
    };
    authMe();
    setInitialLoading(false);
  }, []);

  if (response)
    return (
      <AuthContext.Provider value={{ user, loading, token, error }}>
        {!initialLoading && children}
      </AuthContext.Provider>
    );
};

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
