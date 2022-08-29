import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles/FormComponent.module.scss';
import InputField from './InputField/InputField';
import { useDispatch } from 'react-redux';
import { loginHelper } from '../../helpers/authHelper';
import { useRouter } from 'next/router';

interface Props {
  inputArray: any[];
}

const LoginForm: React.FC<Props> = ({ inputArray: quantity }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const validate = Yup.object({
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    loginHelper(dispatch, values, router);
  };

  return (
    <Formik
      className={styles.formikContainer}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className={styles.form}>
          {quantity.map((elements, index) => (
            <InputField
              key={index}
              placeholder={elements.label}
              name={elements.name}
              type={elements.type}
            />
          ))}
          <button type="submit"> Log in </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
