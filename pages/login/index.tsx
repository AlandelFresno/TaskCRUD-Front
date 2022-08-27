import { Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import styles from './styles/Login.module.scss';

const index = () => {
  const validate = Yup.object({
    loginEmail: Yup.string()
      .required('Email is required')
      .email('Invalid email'),
    loginPassword: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const handleSubmit = () => {
    handleSubmit;
  };

  return (
    <div className={styles.formContainer}>
      <Typography variant="h4"> Log in</Typography>
      <Formik
        initialValues={{
          loginEmail: '',
          loginPassword: '',
        }}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className={styles.form}>
            <input placeholder="Email" name="loginEmail" type="text" />
            <input
              placeholder="Password"
              name="loginPassword"
              type="Password"
            />
            <button type="submit"> Inicia sesión </button>
          </Form>
        )}
      </Formik>
      <Typography variant="subtitle1" className={styles.registro}>
        No tienes una cuenta? <Link href="/registro">Registrate</Link>
      </Typography>
    </div>
  );
};

export default index;
