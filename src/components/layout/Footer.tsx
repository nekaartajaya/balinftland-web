import {FooterMenu} from '@interfaces/FooterInterface';
import Link from 'next/link';
import {ListFooterMenu, SocialMedia} from 'src/interfaces/FooterInterface';

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
      icon: '/images/socmed/discord.png',
    },
    {
      name: 'telegram',
      link: '#',
      icon: '/images/socmed/telegram.png',
    },
    {
      name: 'instagram',
      link: '#',
      icon: '/images/socmed/instagram.png',
    },
    {
      name: 'tweeter',
      link: '#',
      icon: '/images/socmed/tweeter.png',
    },
    {
      name: 'youtube',
      link: '#',
      icon: '/images/socmed/youtube.png',
    },
  ];

  return (
    <div className="flex md:px-[60px] px-4">
      <div className="w-1/3">
        <div className="flex flex-col">
          <div className="mb-4">
            <img src="/images/logo/logo-color.png" alt="BALINFTLAND-logo" className="" />
          </div>
          <div>
            <div className="text-[13px] text-dark-blue-2 tracking-[4px] mb-2">FOLLOW US ON</div>
            <div className="flex gap-x-4">
              {SocialMedia.map(({name, icon, link}) => {
                return (
                  <div className="max-w-[20px]">
                    <a href={link} target="_blank">
                      <img src={icon} alt={name} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 flex">
        {footerMenu.map(({title, list}: FooterMenu) => {
          return (
            <div className="w-1/3 text-sm tracking-wide">
              <div className="uppercase text-dark-blue-2 font-bold mb-3">{title}</div>
              {list.map(({name, link}: ListFooterMenu) => {
                return <div className="capitalize text-grey font-light mb-3">{name}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
