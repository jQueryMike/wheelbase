'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends NextImageProps {}

const Image = (props: ImageProps) => <NextImage {...props} />;

export default Image;
