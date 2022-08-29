import { Typography } from '@mui/material';
import Link from 'next/link';
import RegisterForm from '../../components/form/RegisterForm';
import styles from './styles/Register.module.scss';

const index = () => {
  const inputsArray = [
    {
      label: 'Username',
      name: 'name',
      type: 'text',
    },
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
    {
      label: 'Confirm password',
      name: 'confirmPassword',
      type: 'password',
    },
  ];

  return (
    <div className={styles.formContainer}>
      <Typography variant="h4"> Register </Typography>
      <RegisterForm inputArray={inputsArray} />
      <Typography variant="subtitle1" className={styles.registro}>
        Already have an account? <Link href="/login">Log in</Link>
      </Typography>
    </div>
  );
};

export default index;
