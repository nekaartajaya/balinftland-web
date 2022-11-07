import {ButtonInterface} from '@interfaces/GlobalInterface';

const CustomButton = ({text, color = '#FFF', icon, classes, onClick}: ButtonInterface) => {
  return (
    <button
      className={`${classes} flex justify-center items-center gap-x-2 p-3 min-w-[260px] bg-blue text-[${color}]`}
      onClick={onClick}
    >
      {text}
      {icon && icon}
    </button>
  );
};
export default CustomButton;
