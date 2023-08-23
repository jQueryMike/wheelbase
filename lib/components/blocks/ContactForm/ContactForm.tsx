import Block from '@interfaces/Block';
import cn from 'classnames';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

import { BlockList } from '../../utility-components/BlockList';
import { Button, ButtonProps } from '../Button';
import { Headings, HeadingsProps } from '../Headings';

export type ContactFormClasses<T> = {
  [key in
    | 'root'
    | 'headingsContainer'
    | 'form'
    | 'formWithError'
    | 'formWhilstSubmitting'
    | 'formField'
    | 'inputContainer'
    | 'inputContainerSuccess'
    | 'inputContainerError'
    | 'input'
    | 'inputErrorMessage'
    | 'labelContainer'
    | 'label'
    | 'labelRequiredMarker'
    | 'submitButtonContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'formContentAreaContainer'
    | 'errorMessageContainer'
    | 'errorMessage'
    | 'thankYouContentAreaContainer']?: T;
};

export interface ContactFormProps {
  classes?: ContactFormClasses<string>;
  headings?: HeadingsProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
  formContentArea?: Block[];
  thankYouContentArea?: Block[];
  nameLabel?: string;
  telephoneLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  buttonText?: string;
  recipients?: string[];
  submitButton: ButtonProps;
}

const ContactForm = ({
  classes = {},
  headings,
  contentArea1 = [],
  contentArea2 = [],
  formContentArea = [],
  thankYouContentArea = [],
  nameLabel = 'Your name',
  telephoneLabel = 'Your phone number',
  emailLabel = 'Your email address',
  messageLabel = 'Your message',
  submitButton,
  recipients = [],
}: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [formError, setFormError] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>();

  const { handleSubmit, formState, register } = useForm();

  const onSubmit = async (data: any) => {
    setSubmitting(true);
    setFormError(false);
    setSubmitted(false);

    if (!recaptchaRef.current) {
      setFormError(true);
      setSubmitting(false);
      return;
    }

    try {
      const recaptchaToken = await recaptchaRef?.current?.executeAsync();

      const fields = [
        { label: nameLabel, key: 'name', value: data.name },
        { label: telephoneLabel, key: 'telephone', value: data.telephone || '-' },
        { label: emailLabel, key: 'email', value: data.email },
        { label: messageLabel, key: 'message', value: data.message },
      ];

      const formData = { recipients, fields, recaptchaToken };
      const body = JSON.stringify(formData);
      const headers = { 'Content-Type': 'application/json' };
      const response = await fetch('/api/submit-form', { method: 'POST', body, headers });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setFormError(true);
      }
    } catch (error) {
      setFormError(true);
      recaptchaRef?.current?.reset();
    }

    setSubmitting(false);
  };

  useEffect(() => setHasMounted(true), [setHasMounted]);

  if (!hasMounted) return null;

  return (
    <>
      <div className={classes.root}>
        {headings && (
          <div className={classes.headingsContainer}>
            <Headings {...headings} />
          </div>
        )}
        {contentArea1 && contentArea1?.length > 0 && (
          <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
            <BlockList blocks={contentArea1} />
          </div>
        )}
        {!submitted && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn(
              classes.form,
              { [classes.formWithError!]: classes.formWithError && (formError || formState.errors) },
              { [classes.formWhilstSubmitting!]: classes.formWhilstSubmitting && submitting },
            )}
          >
            {formContentArea?.length > 0 && (
              <div className={cn(classes.contentAreaContainer, classes.formContentAreaContainer)}>
                <BlockList blocks={formContentArea} />
              </div>
            )}
            <div className={classes.formField}>
              <div className={classes.labelContainer}>
                <label className={classes.label} htmlFor="name">
                  {nameLabel} <span className={classes.labelRequiredMarker}>*</span>
                </label>
              </div>
              <div
                className={cn(classes.inputContainer, {
                  [classes.inputContainerError!]: classes.inputContainerError && !!formState.errors.name,
                })}
              >
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  {...register('name', { required: true })}
                  className={classes.input}
                />
              </div>
              {formState.errors.name && <span className={classes.inputErrorMessage}>Please enter your name</span>}
            </div>

            <div className={classes.formField}>
              <div className={classes.labelContainer}>
                <label className={classes.label} htmlFor="telephone">
                  {telephoneLabel}
                </label>
              </div>
              <div
                className={cn(classes.inputContainer, {
                  [classes.inputContainerError!]: classes.inputContainerError && !!formState.errors.telephone,
                })}
              >
                <input
                  type="tel"
                  id="telephone"
                  placeholder="Your phone number"
                  {...register('telephone')}
                  className={classes.input}
                />
              </div>
              {formState.errors.telephone && (
                <span className={classes.inputErrorMessage}>Please enter a valid phone number</span>
              )}
            </div>

            <div className={classes.formField}>
              <div className={classes.labelContainer}>
                <label className={classes.label} htmlFor="email">
                  {emailLabel} <span className={classes.labelRequiredMarker}>*</span>
                </label>
              </div>
              <div
                className={cn(classes.inputContainer, {
                  [classes.inputContainerError!]: classes.inputContainerError && !!formState.errors.email,
                })}
              >
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
                  className={classes.input}
                />
              </div>
              {formState.errors.email && (
                <span className={classes.inputErrorMessage}>Please enter a valid email address</span>
              )}
            </div>

            <div className={classes.formField}>
              <div className={classes.labelContainer}>
                <label className={classes.label} htmlFor="message">
                  {messageLabel} <span className={classes.labelRequiredMarker}>*</span>
                </label>
              </div>
              <div
                className={cn(classes.inputContainer, {
                  [classes.inputContainerError!]: classes.inputContainerError && !!formState.errors.email,
                })}
              >
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows={6}
                  {...register('message', { required: true })}
                  className={classes.input}
                />
              </div>
              {formState.errors.message && <span className={classes.inputErrorMessage}>Please enter your message</span>}
            </div>

            {(Object.keys(formState.errors).length > 0 || formError) && (
              <div className={classes.errorMessageContainer}>
                <p className={classes.errorMessage}>There was an error submitting the form. Please try again.</p>
              </div>
            )}

            <div className={classes.submitButtonContainer}>
              <Button {...submitButton} loading={submitting} />
            </div>
          </form>
        )}

        {submitted && thankYouContentArea.length > 0 && (
          <div className={cn(classes.contentAreaContainer, classes.thankYouContentAreaContainer)}>
            <BlockList blocks={thankYouContentArea} />
          </div>
        )}

        {contentArea2?.length > 0 && (
          <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
            <BlockList blocks={contentArea2} />
          </div>
        )}
      </div>
      <ReCAPTCHA
        ref={recaptchaRef as LegacyRef<ReCAPTCHA>}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      />
    </>
  );
};

export default ContactForm;
