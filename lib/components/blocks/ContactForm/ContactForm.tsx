import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';
import cn from 'classnames';
import { LegacyRef, useCallback, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

import { Headings, HeadingsProps } from '../Headings';

export type ContactFormClasses<T> = {
  [key in
    | 'root'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'form'
    | 'formError'
    | 'inputContainer'
    | 'label'
    | 'inputRequired'
    | 'inputError'
    | 'inputSuccess'
    | 'input'
    | 'buttonContainer'
    | 'submittingWrapper'
    | 'submitting']?: T;
};

export interface ContactFormProps {
  classes?: ContactFormClasses<string>;
  headings?: HeadingsProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
  nameText?: string;
  telephoneText?: string;
  emailText?: string;
  messageText?: string;
  buttonText?: string;
  globalRecipients?: string[];
}

const ContactForm = ({
  classes = {},
  headings,
  contentArea1,
  contentArea2,
  nameText,
  telephoneText,
  emailText,
  messageText,
  buttonText,
  globalRecipients = ['james.walton@clickdealer.co.uk'],
}: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [formError, setFormError] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    if (!recaptchaRef.current) {
      setFormError(true);
    }
    setSubmitting(true);
    try {
      const recaptchaToken = await recaptchaRef?.current?.executeAsync();
      const fields = [
        { label: nameText, key: 'name', value: data.name },
        { label: emailText, key: 'email', value: data.email },
        { label: messageText, key: 'message', value: data.message },
      ];
      if (data.telephone) fields.push({ label: telephoneText, key: 'telephone', value: data.telephone });
      const formData = {
        recipients: globalRecipients,
        fields: fields,
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
    <div className={cn(classes.root, submitting ? classes.submitting : '')}>
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
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <label className={classes.label} htmlFor="Name">
            {nameText + '*'}
          </label>
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
            className={cn(classes.inputRequired, errors.name ? classes.inputError : '')}
          />
          {errors.name && <span className={classes.formError}>{errorMessage}</span>}
          <label className={classes.label} htmlFor="Telephone">
            {telephoneText}
          </label>
          <input type="text" placeholder="Telephone" {...register('telephone')} className={classes.input} />
          <label className={classes.label} htmlFor="Email">
            {emailText + '*'}
          </label>
          <input
            type="text"
            placeholder="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className={cn(classes.inputRequired, errors.name ? classes.inputError : '')}
          />
          {errors.email && <span className={classes.formError}>{errorMessage}</span>}
          <label className={classes.label} htmlFor="Message">
            {messageText + '*'}
          </label>
          <textarea
            placeholder="Message"
            {...register('message', { required: true })}
            className={cn(classes.inputRequired, errors.name ? classes.inputError : '')}
          />
          {errors.message && <span className={classes.formError}>{errorMessage}</span>}
          <div className="invisible">
            <ReCAPTCHA
              ref={recaptchaRef as LegacyRef<ReCAPTCHA>}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              badge="inline"
            />
          </div>
          <input className={classes.buttonContainer} type="submit" value={buttonText} />
        </form>
      )}

      {submitted && contentArea2 && contentArea2?.length > 0 && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
          <BlockList blocks={contentArea2} />
          <button className={classes.buttonContainer} onClick={() => restart()}>
            Re-submit Form
          </button>
        </div>
      )}
      {formError && <p>Error submitting form</p>}
    </div>
  );
};

export default ContactForm;
