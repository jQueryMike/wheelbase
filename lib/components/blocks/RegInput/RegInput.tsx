import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, ButtonProps, ButtonSize } from '../Button';

export type RegInputClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'formContainer'
    | 'form'
    | 'inputContainer'
    | 'input'
    | 'buttonContainer'
    | 'manualLookupLink'
    | 'errorMessageContainer'
    | 'errorMessage']?: T;
};

export interface RegInputProps {
  classes?: RegInputClasses<string>;
  defaultProps?: {
    button?: Partial<ButtonProps>;
  };
  vrmLookupUrl: string;
  manualLookupUrl?: string;
  placeholderText?: string;
  submitButton: ButtonProps;
}

const RegInput = ({
  classes = {},
  vrmLookupUrl,
  manualLookupUrl,
  placeholderText = 'Enter reg...',
  submitButton,
  defaultProps,
}: RegInputProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [formError, setFormError] = useState(false);
  const router = useRouter();

  defaultProps = {
    button: {
      size: ButtonSize.Large,
    },
  };

  const { handleSubmit, formState, register } = useForm();

  const onSubmit = async (data: any) => {
    setSubmitting(true);
    setFormError(false);

    try {
      router.push(`${vrmLookupUrl.replace('{VRM}', btoa(data.vrm))}`);
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
              <Button {...submitButton} {...defaultProps?.button} loading={submitting} />
            </div>
          </form>
          {(Object.keys(formState.errors).length > 0 || formError) && (
            <div className={classes.errorMessageContainer}>
              <p className={classes.errorMessage}>Please enter a valid registration.</p>
            </div>
          )}
        </div>
        {manualLookupUrl && (
          <NextLink className={classes.manualLookupLink} href={manualLookupUrl}>
            Look up your vehicle manually...
          </NextLink>
        )}
      </div>
    </div>
  );
};

export default RegInput;
