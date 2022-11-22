import { Stage } from '@interfaces/ProjectInterface';

const ProjectStage = ({ title, subtitle, desc, image }: Stage) => {
  return (
    <div className="flex flex-col gap-y-6 text-blue italic py-10">
      <div className="flex md:flex-row flex-col-reverse justify-between md:items-center gap-x-1 font-bold relative">
        <h1 className="md:w-[78%] md:text-[32px] text-2xl md:text-left text-justify">
          {title}
        </h1>
        <h1 className="md:w-[22%] text-right md:text-[64px] text-4xl opacity-20 mb-4">
          {subtitle}
        </h1>
        <div className="absolute h-[1px] w-full bg-black md:bottom-0 bottom-[-10px] left-0"></div>
      </div>

      <div className="md:text-[22px] text-lg text-justify">{desc}</div>

      <div>
        <img src={image} alt="Stage 1" className="mx-auto" />
      </div>
    </div>
  );
};

export default ProjectStage;
