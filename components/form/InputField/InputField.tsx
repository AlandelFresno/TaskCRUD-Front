import { ErrorMessage, FieldHookConfig, useField } from 'formik';
import React from 'react';

import styles from './styles/InputField.module.scss';

const InputField = (props: FieldHookConfig<string>) => {
  const [field] = useField(props);

  return (
    <div>
      <input
        className={''}
        placeholder={props.placeholder}
        type={props.type}
        {...field}
      />
      <ErrorMessage component="p" name={props.name} className={styles.errors} />
    </div>
  );
};

export default InputField;
