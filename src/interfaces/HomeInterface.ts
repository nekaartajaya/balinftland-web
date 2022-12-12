import { StaticImageData } from 'next/image';

export interface Logo {
  name: string;
  desc: string;
  logo?: string;
}
export interface Hospitality {
  name: string;
  desc: string;
  image?: StaticImageData;
}
export interface UnitMetaverse {
  name: string;
  image?: StaticImageData;
}
