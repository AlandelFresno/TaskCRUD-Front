import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles/FormComponent.module.scss';
import InputField from './InputField/InputField';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { registerHelper } from '../../helpers/authHelper';

interface Props {
  inputArray: any[]
}

const RegisterForm: React.FC<Props> = ({ inputArray: quantity }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const validate = Yup.object({
    name: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), null], "Passwords don't match"),
  });

  const handleSubmit = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    registerHelper(dispatch, router, {
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <Formik
      className={styles.formikContainer}
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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
          <button type="submit"> Register </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
