import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Page from './[...slug]/page'

config.autoAddCss = false;

export default async function Home() {
  return <Page params={{slug: ''}} />;
}
