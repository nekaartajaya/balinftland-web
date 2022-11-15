import {Stage} from '@interfaces/ProjectInterface';
import ProjectStage from './Stage';

const ProjectMintingSection = () => {
  const Stage: Array<Stage> = [
    {
      title: 'Physical Land Stage, with $10,000 each Fragment.',
      subtitle: 'STAGE 1',
      desc: 'The first NFT auction will be held to purchase physical land on which to build the property. Anyone who participates in the first auction will mint an $US10,000 NFT fragment. In this stage, each NFT apartment will cost $US70,000, and it is the lowest stage to get the best price.',
      image: '/images/stages/stage-1.png',
    },
    {
      title: 'Apartment Foundation Stage, with $13,500 each Fragment',
      subtitle: 'STAGE 2',
      desc: 'In the second stage, NFT fragments will be auctioned off to fund the development of the apartment foundation. It will run six months, and participants will be able to invest $US13,500/Fragment for a total NFT apartment price of $US94,500. The current auction price is 35% more than the previous one.',
      image: '/images/stages/stage-2.png',
    },
    {
      title: 'Apartment Topping-Off Stage, with $17,500 each Fragment',
      subtitle: 'STAGE 3',
      desc: 'In the third stage, NFT fragments will be auctioned off to fund the apartment`s topping off. It will run eight months, and participants will be able to invest $US17,500 with a total NFT apartment pricing of $US122,500. The current auction price is 29% higher than the previous one.',
      image: '/images/stages/stage-3.png',
    },
    {
      title: 'Soft Opening Stage, with $22,500 each Fragment',
      subtitle: 'STAGE 4',
      desc: 'The fourth stage will auction off NFT fragments for eight months, with participants able to invest $US22,500 for a total NFT apartment price of $US157,500. The current auction price is 22% higher than the previous one.',
      image: '/images/stages/stage-4.png',
    },
  ];

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-[64px] leading-[80px] text-blue text-left fo">
          <span className="font-bold">LIMA</span> BEACH
          <br />
          NFT MINTING STAGE
        </h1>
      </div>

      <div className="text-blue text-[22px] italic mb-4">
        Currently, the market price of a luxury apartment is $210,000. If you enter the project
        early, each NFT fragment will cost $10,000, making the total cost of seven NFT fragments
        around $70,000, a third (33%) of the current market price.
      </div>

      {Stage.map(({title, subtitle, desc, image}: Stage, index: number) => {
        return (
          <ProjectStage key={index} title={title} subtitle={subtitle} desc={desc} image={image} />
        );
      })}
    </div>
  );
};

export default ProjectMintingSection;
