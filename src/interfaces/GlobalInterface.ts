import {ReactNode} from 'react';

export interface ButtonInterface {
  text: string;
  color?: string;
  icon?: ReactNode;
  classes?: string;
  onClick?: () => any;
}

export interface ImageInterface {
  url: string;
  alt: string;
}
