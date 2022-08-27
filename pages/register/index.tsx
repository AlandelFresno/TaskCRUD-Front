import { Typography } from '@mui/material';
import Link from 'next/link';
import FormComponent from '../../components/form/FormComponent';
import styles from './styles/Register.module.scss';

const index = () => {
  const inputsArray = [
    {
      label: 'username',
      name: 'registerUserName',
      type: 'text',
    },
    {
      label: 'Email',
      name: 'registerEmail',
      type: 'text',
    },
    {
      label: 'Password',
      name: 'registerPassword',
      type: 'password',
    },
    {
      label: 'Confirm password',
      name: 'registerConfirmPassword',
      type: 'password',
    },
  ];

  return (
    <div className={styles.formContainer}>
      <Typography variant="h4"> Register </Typography>
      <FormComponent inputArray={inputsArray} />
      <Typography variant="subtitle1" className={styles.registro}>
        Already have an account? <Link href="/login">Log in</Link>
      </Typography>
    </div>
  );
};

export default index;
