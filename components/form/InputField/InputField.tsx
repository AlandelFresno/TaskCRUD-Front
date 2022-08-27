import { ErrorMessage, FieldHookConfig, useField } from 'formik';
import React from 'react';

import styles from './styles/InputField.module.scss';

interface Props {
  label: string;
  name: string;
  type: string;
}

const InputField: React.FC<Props> = ({label, name, type}) => {
  

  return (
    <div>
      <input
        className={''}
        placeholder={label}
        type={label}
      />
      <ErrorMessage
        component="p"
        name={name}
        className={styles.errors}
      />
    </div>
  );
};

export default InputField;
