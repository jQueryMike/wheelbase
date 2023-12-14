import Block from '@interfaces/Block';
import cn from 'classnames';

import { BlockList } from '../../utility-components/BlockList';
import { Headings, HeadingsProps } from '../Headings';
import { Image, ImageProps } from '../Image';

export type ReviewsClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'headingsContainer'
    | 'itemsContainer'
    | 'itemContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container']?: T;
};

export type ReviewsItemClasses<T> = {
  [key in
    | 'itemRoot'
    | 'captionContainer'
    | 'avatarContainer'
    | 'avatarImage'
    | 'citeContainer'
    | 'cite'
    | 'date'
    | 'blockquoteContainer'
    | 'reviewHeading'
    | 'reviewContent'
    | 'bottomContainer'
    | 'logoContainer'
    | 'logo'
    | 'ratingContainer'
    | 'ratingStars'
    | 'star'
    | 'starDisabled'
    | 'ratingFigure']?: T;
};

export interface ReviewsItem {
  classes?: ReviewsItemClasses<string>;
  icon?: string;
  id: string;
  indicator?: string;
  contentArea?: Block[];
  image1?: ImageProps;
  reviewerName?: string;
  reviewDate?: string;
  heading?: string;
  text?: string;
  image2?: ImageProps;
  reviewNumber?: string;
}

export interface ReviewsProps {
  classes?: ReviewsClasses<string>;
  headings?: HeadingsProps;
  items?: ReviewsItem[];
  contentArea1?: Block[];
  contentArea2?: Block[];
}

const Reviews = ({ classes = {}, headings, items = [], contentArea1 = [], contentArea2 = [] }: ReviewsProps) => (
  <div className={classes.root}>
    <div className={classes.rootInner}>
      {headings && (
        <div className={classes.headingsContainer}>
          <Headings {...headings} />
        </div>
      )}
      {contentArea1?.length > 0 && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
          <BlockList blocks={contentArea1} />
        </div>
      )}
      {items?.length > 0 && (
        <div className={classes.itemsContainer}>
          {items.map((item) => (
            <div key={item.id} className={classes?.itemContainer}>
              <figure className={item.classes?.itemRoot}>
                <figcaption className={item.classes?.captionContainer}>
                  {item.image1 && (
                    <div className={item.classes?.avatarContainer}>
                      <Image {...item.image1} className={item.classes?.avatarImage} />
                    </div>
                  )}
                  <div className={item.classes?.citeContainer}>
                    {item.reviewerName && (
                      <cite className={item.classes?.cite}>{item.reviewerName}</cite>
                    )}
                    {item.reviewDate && (
                      <div className={item.classes?.date}>{item.reviewDate}</div>
                    )}
                  </div>
                </figcaption>
                {item.heading && (
                  <blockquote className={item.classes?.blockquoteContainer}>
                    <div className={item.classes?.reviewHeading}>{item.heading}</div>
                    <div className={item.classes?.reviewContent}>{item.text}</div>
                  </blockquote>
                )}
                <div className={item.classes?.bottomContainer}>
                  {item.image2 && (
                    <div className={item.classes?.logoContainer}>
                      <Image {...item.image2} className={item.classes?.logo} />
                    </div>
                  )}
                  {item.reviewNumber && (
                    <div className={item.classes?.ratingContainer}>
                      {/* could leave stars out for now. fontawesome class in classes 'fas fa-star' which i know is not right */}
                      <div className={item.classes?.ratingStars}>
                        <i className={item.classes?.star} />
                        <i className={item.classes?.star} />
                        <i className={item.classes?.star} />
                        <i className={item.classes?.star} />
                        <i className={item.classes?.starDisabled} />
                      </div>
                      <span className={item.classes?.ratingFigure}>{item.reviewNumber}</span>
                    </div>
                  )}
                </div>
              </figure>
            </div>
          ))}
        </div>
      )}
      {contentArea2?.length > 0 && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
          <BlockList blocks={contentArea2} />
        </div>
      )}
    </div>
  </div>
);

export default Reviews;
