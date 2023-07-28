import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';
import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';

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
    | 'buttonContainer']?: T;
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
  globalRecipients,
}: ContactFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    // Perform your form submission logic here
    console.log('Form data:', data);
  };

  return (
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
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div className={classes.inputContainer}>
          <label htmlFor="name" className={classes.label}>
            {nameText ? `${nameText}*` : 'name*'}
          </label>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <>
                <input
                  type="text"
                  id="name"
                  {...field}
                  className={cn(classes.inputRequired, errors.name ? classes.inputError : classes.inputSuccess)}
                />
                {errors.name && <span className={classes.formError}>{errors?.name?.message?.toString()}</span>}
              </>
            )}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="telephone" className={classes.label}>
            {telephoneText ? telephoneText : 'Telephone'}
          </label>
          <Controller
            name="telephone"
            control={control}
            render={({ field }) => <input type="text" id="telephone" {...field} className={classes.input} />}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="email" className={classes.label}>
            {emailText ? `${emailText}*` : 'Email*'}
          </label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <>
                <input
                  type="email"
                  id="email"
                  {...field}
                  className={cn(classes.inputRequired, errors.email ? classes.inputError : classes.inputSuccess)}
                />
                {errors.email && <span className={classes.formError}>{errors?.email?.message?.toString()}</span>}
              </>
            )}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="message" className={classes.label}>
            {messageText ? `${messageText}*` : 'message*'}
          </label>
          <Controller
            name="message"
            control={control}
            rules={{ required: 'Message is required' }}
            render={({ field }) => (
              <>
                <textarea
                  id="message"
                  {...field}
                  className={cn(classes.inputRequired, errors.message ? classes.inputError : classes.inputSuccess)}
                />
                {errors.message && <span className={classes.formError}>{errors?.message?.message?.toString()}</span>}
              </>
            )}
          />
        </div>
        <div className={classes.buttonContainer}>
          <button type="submit">{buttonText || 'submit'}</button>
        </div>
      </form>
      {/* {formState &&  */}
      {contentArea2 && contentArea2?.length > 0 && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
          <BlockList blocks={contentArea2} />
        </div>
      )}
      {/* } */}
    </div>
  );
};

export default ContactForm;
