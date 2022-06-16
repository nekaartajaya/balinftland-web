/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import HomeTitleSection from '../../src/components/HomeTitleSection';
import ImageDescComponent from '../../src/components/ImageDescComponent';

const AboutSection = () => {
  const stage = [
    {
      name: 'STAGE 01',
      desc: 'Physical Land Stage',
    },
    {
      name: 'STAGE 02',
      desc: 'Apartment Foundation Stage',
    },
    {
      name: 'STAGE 03',
      desc: 'Apartment Topping-Off Stage',
    },
    {
      name: 'STAGE 04',
      desc: 'Soft Opening Stage',
    },
  ];

  return (
    <section className="py-10">
      <div className="pb-32">
        <HomeTitleSection
          type={'leftImage'}
          topLeftText={'Who'}
          topRightText={'Digilandbali, NFT Developer Property'}
          imageURL={'/image3.svg'}
          imageAlt={'tes'}
          miniText={'One of the properties that has been built by the developer group'}
          descText={`Digilandbali built by Blockchain Consultant Experts who have handled various projects for 10+ Years, One of Bali's top property developer with 20+ years experience who has built hotels and resorts like Agra Nusa Villas, The Nest in Benoa The Sapphire Cliff Resort and Umalas Signature, and the property will be maintained by world's top hospitality management with 25+ years experience.`}
        />
      </div>
      <div className="pb-32">
        <HomeTitleSection
          type={'leftImage'}
          topLeftText={'Why'}
          topRightText={'We build the property together, We own the property together'}
          miniText={'On a mission to make everyone\nbecome a property developer'}
          descText={`Digilandbali is a decentralized property developer with no middleman and no high conventional marketing cost. The idea is to create a viable option for the people who are struggling to own a property because of the high cost and unavailability of liquidity.`}
        />
      </div>
      <div className="pb-32">
        <ImageDescComponent
          imageUrl="/image2.svg"
          imageAlt="Tes"
          title={`Get your fragments, Get your apartments, Live up your investments`}
          description={
            'Digilandbali is on a mission to make everyone become a property developer where everyone can get a property with a developer price instead of market selling price because the property project was built together. Reducing the cost burden on property developers while providing a high quality of luxury service property to leaseholders with a developer costs. We Build Together, We Own Together.'
          }
        />
      </div>
      <div className="pb-32">
        <div className="relative w-full">
          <img src={'/image5.svg'} className="w-full h-auto" alt={'tes'} />
          <div className="text-base text-[#E2E2E2] pt-2 fontFeature">Fragment</div>
        </div>
        <div className="py-8">
          <div className="text-center text-[#FFFFFF] font-bold text-[64px] leading-[77px] pb-4 fontFeature">
            Apartment & Skyvillas
            <br />
            Built in Bali,
            <br />
            The Lost Paradise
          </div>
          <div className="flex items-center justify-center">
            <img src="/Discord_White.svg" className="mx-1 w-[36px] h-[36px]" alt="Discord-white" />
            <img src="/Telegram_White.svg" className="mx-1 w-[36px] h-[36px]" alt="Discord-white" />
            <img src="/Twitter_White.svg" className="mx-1 w-[36px] h-[36px]" alt="Discord-white" />
            <img src="/Opensea_White.svg" className="mx-1 w-[36px] h-[36px]" alt="Discord-white" />
            <div className="text-base underline text-[#E2E2E2] ml-4">
              JOIN THE
              <br />
              COMMUNITY
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img src={'/image6.svg'} className="w-full h-auto" alt={'tes'} />
          <div className="text-base text-[#E2E2E2] text-right pt-2 fontFeature">Fragment</div>
        </div>
      </div>
      <div className="pb-32">
        <HomeTitleSection
          type={'leftImage'}
          topLeftText={'What'}
          topRightText={'Digilandbali 1st Project: \nLima Beach Signature NFT'}
          miniText={'On a mission to make everyone\nbecome a property developer'}
          descText={`We’re bringing together the brightest minds and makers in NFTs-sphere. We dance the cutting edge, we challange the status quo, and we care deeply about giving developers around the globe the product they need to unlock a new world of NFT-enabled possibillities.`}
        />
      </div>
      <div className="pb-32">
        <ImageDescComponent
          imageUrl="/image1.svg"
          imageAlt="Tes"
          title={`Mint 7 NFT Fragment \nGet 1 Apartment as Utility`}
          description={
            '\nDigilandbali is on a mission to make everyone become a property developer where everyone can get a property with a developer price instead of market selling price because the property project was built together. Reducing the cost burden on property developers while providing a high quality of luxury service property to leaseholders with a developer costs. We Build Together, We Own Together.'
          }
        />
      </div>
      <div className="pb-32">
        <HomeTitleSection
          type={'topImage'}
          imageURL={'/image4.svg'}
          topLeftText={'Where'}
          topRightText={'Lima Beach Canggu, Bali, Indonesia'}
          descText={`We’re bringing together the brightest minds and makers in NFTs-sphere. We dance the cutting edge, we challange the status quo, and we care deeply about giving developers around the globe the product they need to unlock a new world of NFT-enabled possibillities.`}
        />
      </div>
      <div className="pb-32">
        <HomeTitleSection
          type={'topImage'}
          topLeftText={'When'}
          topRightText={'Minting Starts in July 2022'}
          descText={`We’re bringing together the brightest minds and makers in NFTs-sphere. We dance the cutting edge, we challange the status quo, and we care deeply about giving developers around the globe the product they need to unlock a new world of NFT-enabled possibillities.`}
        />
      </div>
      <div className="pb-32">
        <HomeTitleSection
          type={'custom'}
          topLeftText={'How'}
          topRightText={'Section about how it’s built from minting till become apartments'}
        >
          <div className="flex items-center">
            <div className="w-[60%]">
              <div className="relative max-w-[380px]">
                <img src={'/image7.svg'} className="w-full h-auto max-w-[380px]" alt={'tes'} />
                <div className="w-full max-w-[380px] absolute bg-[#3F7DF4] text-[#FFF] p-6 top-[50%] left-[65%]">
                  {stage.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`flex gap-8 pb-4 mb-4 ${
                          index < stage.length - 1 ? 'border-b' : ''
                        }`}
                      >
                        <div className="font-bold">{item.name}</div>
                        <div>{item.desc}</div>
                      </div>
                    );
                  })}
                  <div className="flex items-center justify-end font-bold mt-[80px]">
                    <div className="mr-2">Know More</div>
                    <img src={'/arrowTopRight.svg'} className="w-[10px] h-[10px]" alt={'tes'} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%]">
              <div className="text-2xl text-[#FFF] leading-9">
                We’re bringing together the brightest minds and makers in NFTs-sphere. We dance the
                cutting edge, we challange the status quo, and we care deeply about giving
                developers around the globe the product they need to unlock a new world of
                NFT-enabled possibillities.
              </div>
            </div>
          </div>
        </HomeTitleSection>
      </div>
    </section>
  );
};

export default AboutSection;
