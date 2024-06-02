import { StaticImageData } from 'next/image';
import {
  blackImg, blueImg, whiteImg, yellowImg,
} from '../utils';

export interface ModelType {
  id: number;
  title: string;
  color: string[];
  img: StaticImageData;
}
export interface SizeType {
  label: string;
  value: 'small' | 'large';
}

export const models: ModelType[] = [
  {
    id: 1,
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
    img: yellowImg,
  },
  {
    id: 2,
    title: 'iPhone 15 Pro in Blue Titanium',
    color: ['#53596E', '#6395ff', '#21242e'],
    img: blueImg,
  },
  {
    id: 3,
    title: 'iPhone 15 Pro in White Titanium',
    color: ['#C9C8C2', '#ffffff', '#C9C8C2'],
    img: whiteImg,
  },
  {
    id: 4,
    title: 'iPhone 15 Pro in Black Titanium',
    color: ['#454749', '#3b3b3b', '#181819'],
    img: blackImg,
  },
];

export const sizes: SizeType[] = [
  { label: '6.1"', value: 'small' },
  { label: '6.7"', value: 'large' },
];

export const footerLinks: string[] = ['LinkedIn', 'Contact'];
