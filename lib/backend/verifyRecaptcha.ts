export interface VerifyRecaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes': string[];
}

async function verifyRecaptcha(token: string | null): Promise<VerifyRecaptchaResponse> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const requestUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  const headers: HeadersInit = { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' };

  const recaptchaResponse = await fetch(requestUrl, { headers, method: 'POST' });
  const verifyRecaptchaResponse = (await recaptchaResponse.json()) as VerifyRecaptchaResponse;

  return verifyRecaptchaResponse;
}

export default verifyRecaptcha;
