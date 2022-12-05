import { ButtonInterface } from '@interfaces/GlobalInterface';

const CustomButton = ({
  text,
  color = '#FFF',
  blue,
  icon,
  classes,
  onClick,
}: ButtonInterface) => {
  return (
    <>
      <button
        className={`${classes} ${
          blue ? 'bg-blue' : 'bg-green'
        } flex justify-center items-center gap-x-2 p-3 min-w-[260px] text-[${color}]`}
        onClick={onClick}
      >
        {text}
        {icon}
      </button>
    </>
  );
};
export default CustomButton;
