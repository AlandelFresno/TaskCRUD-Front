import { Typography } from '@mui/material';

import Link from 'next/link';
import FormComponent from '../../components/form/FormComponent';
import styles from './styles/Login.module.scss';

const index = () => {
  const inputsArray = [
    {
      label: 'Email',
      name: 'loginEmail',
      type: 'text',
    },
    {
      label: 'Password',
      name: 'loginPassword',
      type: 'password',
    },
  ];

  return (
    <div className={styles.formContainer}>
      <Typography variant="h4"> Log in</Typography>
      <FormComponent inputArray={inputsArray} />
      <Typography variant="subtitle1" className={styles.registro}>
        Don't have an account? <Link href="/registro">Register</Link>
      </Typography>
    </div>
  );
};

export default index;
