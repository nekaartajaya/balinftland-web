import {
  discord,
  instagram,
  logocolor,
  telegram,
  tweeter,
  youtube,
} from '@assets/images';
import { FooterMenu } from '@interfaces/FooterInterface';
import { ListFooterMenu, SocialMedia } from '@interfaces/FooterInterface';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const footerMenu: Array<FooterMenu> = [
    {
      title: 'balinftland',
      list: [
        {
          name: 'NFTs',
          link: '#',
        },
        {
          name: 'website',
          link: '#',
        },
        {
          name: 'blog',
          link: '#',
        },
      ],
    },
    {
      title: 'information',
      list: [
        {
          name: 'terms of service',
          link: '#',
        },
        {
          name: 'privacy policy',
          link: '#',
        },
        {
          name: 'get verified',
          link: '#',
        },
      ],
    },
    {
      title: 'documents',
      list: [
        {
          name: 'whitepaper',
          link: '#',
        },
        {
          name: 'licence',
          link: '#',
        },
      ],
    },
  ];

  const SocialMedia: Array<SocialMedia> = [
    {
      name: 'discord',
      link: '/profile',
      icon: discord,
    },
    {
      name: 'telegram',
      link: '#',
      icon: telegram,
    },
    {
      name: 'instagram',
      link: '#',
      icon: instagram,
    },
    {
      name: 'twitter',
      link: '#',
      icon: tweeter,
    },
    {
      name: 'youtube',
      link: '#',
      icon: youtube,
    },
  ];

  return (
    <div className="flex md:flex-row flex-col md:px-[60px] px-6 py-8 gap-y-4 bg-white">
      <div className="md:w-1/3 w-full">
        <div className="flex md:flex-col justify-between">
          <div className="mb-4 flex-1">
            <Image src={logocolor} alt="BALINFTLAND-logo" className="" />
          </div>
          <div className="flex-1">
            <div className="sm:text-[13px] text-[11px] text-dark-blue-2 tracking-[4px] mb-2">
              FOLLOW US ON
            </div>
            <div className="flex gap-x-4">
              {SocialMedia.map(({ name, icon, link }, index) => {
                return (
                  <div key={index} className="max-w-[20px]">
                    <a href={link} target="_blank" rel="noreferrer">
                      <Image src={icon} alt={name} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 w-full sm:flex grid grid-cols-2 gap-y-8">
        {footerMenu.map(({ title, list }: FooterMenu, index: number) => {
          return (
            <div key={index} className="sm:w-1/3 text-sm tracking-wide">
              <div className="uppercase text-dark-blue-2 font-bold mb-3">
                {title}
              </div>
              {list.map(({ name, link }: ListFooterMenu, index: number) => {
                return (
                  <div
                    key={index}
                    className="capitalize text-grey font-light mb-3"
                  >
                    <Link href={link}> {name}</Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
