import Block from '@interfaces/Block';
import cn from 'classnames';
import { LegacyRef, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

import { BlockList } from '../../utility-components/BlockList';
import { Button } from '../Button';
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
  buttonText = 'Send Message',
  recipients = [],
}: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [formError, setFormError] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>();

  const { handleSubmit, formState, register, reset } = useForm();

  const onSubmit = async (data: any) => {
    if (!recaptchaRef.current) {
      setFormError(true);
    }
    setSubmitting(true);
    try {
      const recaptchaToken = await recaptchaRef?.current?.executeAsync();
      const fields = [
        { label: nameLabel, key: 'name', value: data.name },
        { label: emailLabel, key: 'email', value: data.email },
        { label: messageLabel, key: 'message', value: data.message },
      ];
      if (data.telephone) fields.push({ label: telephoneLabel, key: 'telephone', value: data.telephone });
      const formData = {
        recipients,
        fields,
        recaptchaToken,
      };
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setFormError(true);
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      recaptchaRef?.current?.reset();
    }
  };

  const restart = () => {
    reset();
    setSubmitted(false);
    setFormError(false);
    recaptchaRef?.current?.reset();
  };

  const errorMessage = 'This field is required';

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
                <label className={classes.label} htmlFor="Name">
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
                  placeholder="Name"
                  {...register('name', { required: true })}
                  className={classes.input}
                />
              </div>
              {formState.errors.name && <span className={classes.inputErrorMessage}>{errorMessage}</span>}
            </div>

            <div className={classes.formField}>
              <div className={classes.labelContainer}>
                <label className={classes.label} htmlFor="Telephone">
                  {telephoneLabel}
                </label>
              </div>
              <div
                className={cn(classes.inputContainer, {
                  [classes.inputContainerError!]: classes.inputContainerError && !!formState.errors.telephone,
                })}
              >
                <input type="tel" placeholder="Telephone" {...register('telephone')} className={classes.input} />
              </div>
              {formState.errors.telephone && <span className={classes.inputErrorMessage}>{errorMessage}</span>}
            </div>

            <div className={classes.formField}>
              <div className={classes.labelContainer}>
                <label className={classes.label} htmlFor="Email">
                  {emailLabel} <span className={classes.labelRequiredMarker}>*</span>
                </label>
              </div>
              <div
                className={cn(classes.inputContainer, {
                  [classes.inputContainerError!]: classes.inputContainerError && !!formState.errors.email,
                })}
              >
                <input
                  type="text"
                  placeholder="Email"
                  {...register('email', { required: true })}
                  className={classes.input}
                />
              </div>
              {formState.errors.email && <span className={classes.inputErrorMessage}>{errorMessage}</span>}
            </div>

            <div className={classes.formField}>
              <div className={classes.labelContainer}>
                <label className={classes.label} htmlFor="Message">
                  {messageLabel} <span className={classes.labelRequiredMarker}>*</span>
                </label>
              </div>
              <div
                className={cn(classes.inputContainer, {
                  [classes.inputContainerError!]: classes.inputContainerError && !!formState.errors.email,
                })}
              >
                <textarea
                  placeholder="Message"
                  {...register('message', { required: true })}
                  className={classes.input}
                />
              </div>
              {formState.errors.message && <span className={classes.inputErrorMessage}>{errorMessage}</span>}
            </div>
            <Button type="submit" text={buttonText} />
            {/* <input className={classes.submitButtonContainer} type="submit" value={buttonText} /> */}
          </form>
        )}

        {submitted && thankYouContentArea.length > 0 && (
          <div className={cn(classes.contentAreaContainer, classes.thankYouContentAreaContainer)}>
            <BlockList blocks={thankYouContentArea} />
            <button onClick={() => restart()}>Re-submit Form</button>
          </div>
        )}
        {formError && <p>Error submitting form</p>}

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
