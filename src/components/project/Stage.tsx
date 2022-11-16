import { Stage } from '@interfaces/ProjectInterface';

const ProjectStage = ({ title, subtitle, desc, image }: Stage) => {
  return (
    <div className="flex flex-col gap-y-6 text-blue italic py-10">
      <div className="flex justify-between items-center gap-x-1 font-bold relative">
        <h1 className="w-[78%] text-[32px] ">{title}</h1>
        <h1 className="w-[22%] text-right text-[64px] opacity-20">
          {subtitle}
        </h1>
        <div className="absolute h-[1px] w-full bg-black bottom-0 left-0"></div>
      </div>

      <div className="text-[22px]">{desc}</div>

      <div>
        <img src={image} alt="Stage 1" className="mx-auto" />
      </div>
    </div>
  );
};

export default ProjectStage;
