const ListWithIcon = ({title, list}) => {
  return (
    <div className="text-white mb-6">
      <div className="text-[24px] font-bold mb-6">{title}</div>
      <div>
        {list.map((v, i) => {
          return (
            <div key={i} className="flex items-center gap-x-4 text-[12px] tablet:text-[16px] mb-2">
              <div>
                <img src={v?.icon} className="" alt="Icon" />
              </div>
              <div>{v?.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListWithIcon;
