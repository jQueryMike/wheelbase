import sendFormNotification from '@backend/sendFormNotification';
import verifyRecaptcha from '@backend/verifyRecaptcha';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(nextApiRequest: NextApiRequest, nextApiResponse: NextApiResponse) {
  const { body, method } = nextApiRequest;
  const { fields, recipients, recaptchaToken } = body;

  if (method !== 'POST') return nextApiResponse.status(404).send('Not found');

  if (!recaptchaToken) {
    return nextApiResponse.status(422).json({ message: 'Unprocessable request, please provide the required fields.' });
  }

  try {
    const reCaptchaResponse = await verifyRecaptcha(recaptchaToken);

    if (!reCaptchaResponse.success) {
      console.error(reCaptchaResponse);
      return nextApiResponse.status(422).json({ message: 'Unprocessable request, invalid reCAPTCHA code.' });
    }

    const notificationResponse = await sendFormNotification({ fields, recipients });

    if (!notificationResponse.success) {
      return nextApiResponse.status(422).json({ message: 'Unprocessable request, failed sending notifications.' });
    }
    return nextApiResponse.status(200).send('OK');
  } catch (error) {
    console.error(error);
    return nextApiResponse.status(422).json({ message: 'Something went wrong' });
  }
}

export default handler;
