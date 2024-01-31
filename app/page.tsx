import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { redirect } from 'next/navigation';

config.autoAddCss = false;

export default async function Home() {
  redirect('/home');
}
