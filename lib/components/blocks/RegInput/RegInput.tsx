import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, ButtonProps } from '../Button';

export type RegInputClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'headingsContainer'
    | 'formContainer'
    | 'form'
    | 'inputContainer'
    | 'input'
    | 'buttonContainer'
    | 'errorMessageContainer'
    | 'errorMessage']?: T;
};

export interface RegInputProps {
  classes?: RegInputClasses<string>;
  clickBuyUrl: string;
  placeholderText?: string;
  submitButton: ButtonProps;
}

const RegInput = ({ classes = {}, clickBuyUrl, placeholderText = 'Enter reg...', submitButton }: RegInputProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [formError, setFormError] = useState(false);
  const router = useRouter();

  const { handleSubmit, formState, register } = useForm();

  const onSubmit = async (data: any) => {
    setSubmitting(true);
    setFormError(false);

    try {
      router.push(`${clickBuyUrl}?vrm=${btoa(data.vrm)}`);
    } catch (error) {
      setFormError(true);
    }

    setSubmitting(false);
  };

  useEffect(() => setHasMounted(true), [setHasMounted]);

  if (!hasMounted) return null;

  return (
    <div className={classes.root}>
      <div className={classes.rootInner}>
        <div className={classes.formContainer}>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.inputContainer}>
              <input
                type="text"
                id="vrm"
                placeholder={placeholderText}
                {...register('vrm', { required: true })}
                className={classes.input}
              />
            </div>
            <div className={classes.buttonContainer}>
              <Button {...submitButton} loading={submitting} />
            </div>
          </form>
          {(Object.keys(formState.errors).length > 0 || formError) && (
            <div className={classes.errorMessageContainer}>
              <p className={classes.errorMessage}>Please enter a valid registration.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegInput;
