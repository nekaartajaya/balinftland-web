import { Stage } from '@interfaces/ProjectInterface';
import Image from 'next/image';

const ProjectStage = ({ title, subtitle, desc, image }: Stage) => {
  return (
    <div className="flex flex-col gap-y-6 text-blue italic py-10">
      <div className="flex justify-between md:items-center items-end gap-x-4 font-bold relative">
        <h1 className="flex-2 md:text-[32px] sm:text-2xl text-base text-left ">
          {title}
        </h1>
        <h1 className="flex-1 text-right md:text-[64px] sm:text-3xl text-2xl opacity-20 md:mb-4 whitespace-nowrap">
          {subtitle}
        </h1>
        <div className="absolute h-[1px] w-full bg-black md:bottom-0 bottom-[-10px] left-0"></div>
      </div>

      <div className="md:text-[22px] text-[12px] text-justify">{desc}</div>

      <div className="md:w-[70%] w-full mx-auto">
        <Image
          src={image}
          alt="Stage 1"
          className="mx-auto"
          layout="responsive"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default ProjectStage;
