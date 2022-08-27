import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles/FormComponent.module.scss';
import InputField from './InputField/InputField';

interface Props {
  inputArray: any[];
}

const FormComponent: React.FC<Props> = ({ inputArray: quantity }) => {
  const validate = Yup.object({
    registerUserName: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    registerEmail: Yup.string()
      .required('Email is required')
      .email('Invalid email'),
    registerPassword: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    registerConfirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('registerPassword'), null], "Passwords don't match"),
    loginEmail: Yup.string()
      .required('Email is required')
      .email('Invalid email'),
    loginPassword: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const handleSubmit = () => {
    console.log('click')
  };

  return (
    <Formik
      className={styles.formikContainer}
      initialValues={{
        loginEmail: '',
        loginPassword: '',
        registerUserName: '',
        registerEmail: '',
        registerPassword: '',
        registerConfirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className={styles.form}>
          {quantity.map((elements, index) => (
            <InputField
              key={index}
              label={elements.label}
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

export default FormComponent;
