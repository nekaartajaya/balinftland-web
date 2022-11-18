import Subtitle from '@components/global/Subtitle';
import { ImageInterface } from '@interfaces/GlobalInterface';

const ProfileUtilitySection = () => {
  const Utility: Array<ImageInterface> = [
    {
      url: '/images/pages/profile/dummy-4.png',
      alt: 'BREEDING',
    },
    {
      url: '/images/pages/profile/dummy-5.png',
      alt: 'BUYBACK',
    },
    {
      url: '/images/pages/profile/dummy-6.png',
      alt: 'RENT',
    },
    {
      url: '/images/pages/profile/dummy-7.png',
      alt: 'STACKING',
    },
  ];

  return (
    <div className="border-y border-dark-blue py-16">
      <Subtitle text="Utility" />

      <div className="grid md:grid-cols-4 grid-cols-2 gap-y-4 mt-10">
        {Utility.map((item: ImageInterface, index: number) => {
          return (
            <div key={index} className="text-center">
              <img
                src={item.url}
                alt={item.alt}
                className="mx-auto md:w-full w-3/4"
              />
              <h5 className="text-dark-blue md:text-2xl text-xl font-semibold">
                {item.alt}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileUtilitySection;
