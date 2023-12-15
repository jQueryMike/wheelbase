import { Headings, HeadingsProps } from '../Headings';

export type BodyTextClasses<T> = {
  [key in 'root' | 'rootInner' | 'contentContainer' | 'headingsContainer' | 'textContent']?: T;
};

export interface BodyTextProps {
  classes?: BodyTextClasses<string>;
  text?: any;
  headings?: HeadingsProps;
}

const BodyText = ({ classes = {}, text, headings }: BodyTextProps) => (
  <div className="p-4 py-10 md:p-6 md:py-8 lg:py-10 xl:py-12">
    <div className="container mx-auto">
      <div className={classes.root}>
        <div className={classes.rootInner}>
          <div className={classes.contentContainer}>
            {headings && (
              <div className={classes.headingsContainer}>
                <Headings {...headings} />
              </div>
            )}
            {text && <div className={classes.textContent} dangerouslySetInnerHTML={{ __html: text.text }} />}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BodyText;
