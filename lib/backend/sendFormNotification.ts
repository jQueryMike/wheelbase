import Mailchimp from '@mailchimp/mailchimp_transactional';
import Handlebars from 'handlebars';
import mjml2html from 'mjml';

// @ts-ignore
import mjmlTemplate from './notifications/mjml/formCompleted.mjml';
// @ts-ignore
import txtTemplate from './notifications/text/formCompleted.txt';

export interface SendFormNotificationProps {
  recipients: string[];
  fields: {
    label: string;
    key: string;
    value: string;
  }[];
}

export interface NotificationResponse {
  success: boolean;
}

async function sendFormNotification({ recipients, fields }: SendFormNotificationProps): Promise<NotificationResponse> {
  const env = process.env.ENVIRONMENT_NAME === 'production' ? '' : ` (${process.env.ENVIRONMENT_NAME})`;
  const data = { environment: env, fields };
  const htmlTemplate = Handlebars.compile(mjmlTemplate.toString());
  const textTemplate = Handlebars.compile(txtTemplate.toString());
  const { html } = mjml2html(htmlTemplate(data));
  const text = textTemplate(data).toString();

  const message: Mailchimp.MessagesMessage = {
    from_email: 'noreply@clickdealer.co.uk',
    from_name: 'Click Dealer Website',
    html,
    subject: `Form Completed: Contact`,
    text,
    to: recipients.map((recipent: string) => ({ email: recipent })),
  };

  const response: Mailchimp.MessagesSendResponse[] | any = await Mailchimp(process.env.MANDRILL_API_KEY!).messages.send(
    { message },
  );

  if (!Array.isArray(response)) {
    return { success: false };
  }
  return { success: true };
}

export default sendFormNotification;
