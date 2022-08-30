import { Typography } from '@mui/material';
import Link from 'next/link';
import LoginForm from '../../components/form/LoginForm';
import styles from './styles/Login.module.scss';

const index = () => {
  const inputsArray = [
    {
      label: 'Email',
      name: 'email',
      type: 'text',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
    },
  ];
  
  return (
    <div className={styles.formContainer}>
      <Typography variant="h4"> Log in</Typography>
      <LoginForm inputArray={inputsArray} />
      <Typography variant="subtitle1" className={styles.registro}>
        Don't have an account? <Link href="/register">Register</Link>
      </Typography>
    </div>
  );
};

export default index;
