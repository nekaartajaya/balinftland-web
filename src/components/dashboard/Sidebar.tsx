import {ReactElement} from 'react';

import {useRouter} from 'next/router';

import {ArchiveBook, CardPos, ConvertCard, Gift, Receipt21} from 'iconsax-react';
import Cookies from 'js-cookie';

const Sidebar = ({activeMenu, isOpenSidebar, setIsOpenSidebar}) => {
  const router = useRouter();

  interface Menu {
    name: string;
    title: string;
    icon?: ReactElement;
    icon_active?: ReactElement;
  }

  const menu: Array<Menu> = [
    {
      name: 'buyback',
      title: 'Buyback',
      icon: <CardPos size="24" color="#8F98AA" className="mx-auto" />,
      icon_active: <CardPos size="24" color="#436CFF" className="mx-auto" />,
    },
    {
      name: 'document',
      title: 'Permissive Document',
      icon: <ArchiveBook size="24" color="#8F98AA" className="mx-auto" />,
      icon_active: <ArchiveBook size="24" color="#436CFF" className="mx-auto" />,
    },
    {
      name: 'document',
      title: 'Permissive Document',
      icon: <ConvertCard size="24" color="#8F98AA" className="mx-auto" />,
      icon_active: <ConvertCard size="24" color="#436CFF" className="mx-auto" />,
    },
    {
      name: 'history',
      title: 'Transaction History',
      icon: <Receipt21 size="24" color="#8F98AA" className="mx-auto" />,
      icon_active: <Receipt21 size="24" color="#436CFF" className="mx-auto" />,
    },
    {
      name: 'document',
      title: 'Permissive Document',
      icon: <Gift size="24" color="#8F98AA" className="mx-auto" />,
      icon_active: <Gift size="24" color="#436CFF" className="mx-auto" />,
    },
  ];

  const changeActiveMenu = ({name, title}: Menu) => {
    Cookies.set('active_menu', JSON.stringify({name: name, title: title}));
    // router.push(`/dashboard/${name}`);
  };

  return (
    <div>
      {/* Desktop */}
      <div className="sidebar h-screen px-9 py-10 bg-[#FFF] fixed z-[99] overflow-y-scroll hidden desktop:block">
        <div>
          <img src="/logo-black.svg" alt="logo Digiland" />
        </div>
        <div className="mt-[100px] flex flex-col gap-10">
          {menu.map((v, i) => {
            return (
              <button
                key={i}
                className="bg-[#FFF] p-2 rounded-[8px]"
                onClick={() => changeActiveMenu({name: v.name, title: v.title})}
              >
                {activeMenu === v.name ? v.icon_active : v.icon}
              </button>
            );
          })}
        </div>
      </div>
      {/* Mobile & Tablet */}
      <div
        className={`w-full h-screen desktop:hidden transition-all ease-in-out ${
          isOpenSidebar ? 'visible' : 'invisible'
        }`}
      >
        <div
          className="w-full h-screen absolute top-0 left-0 z-[9991]"
          style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
        >
          <button
            className="bg-[#3A67DE] border-0 rounded-full h-[35px] w-[35px] tablet:h-[50px] tablet:w-[50px] desktop:hidden block right-[8px] tablet:top-[22px] top-[21px] absolute"
            onClick={() => {
              if (!setIsOpenSidebar) {
                setTimeout(() => {
                  setIsOpenSidebar(!isOpenSidebar);
                }, 200);
              } else {
                setIsOpenSidebar(!isOpenSidebar);
              }
            }}
          >
            <img
              src={`${isOpenSidebar ? '/close-icon.svg' : '/hamburger-icon.svg'}`}
              className="w-[18px] mx-auto"
              alt="logo"
            />
          </button>
        </div>
        <div
          className={`sidebar h-screen px-4 desktop:px-9 py-6 bg-[#FFF] fixed z-[9992] overflow-y-scroll transition-all ease-in-out ${
            isOpenSidebar ? 'translate-x-0' : 'translate-x-[-100%]'
          }`}
        >
          <div>
            <img src="/logo-black.svg" alt="logo Digiland" />
          </div>
          <div className="desktop:mt-[100px] mt-[50px] flex flex-col gap-6 desktop:gap-10 mb-10">
            {menu.map((v, i) => {
              return (
                <button
                  key={i}
                  className="bg-[#FFF] p-2 rounded-[8px]"
                  onClick={() => changeActiveMenu({name: v.name, title: v.title})}
                >
                  {activeMenu === v.name ? v.icon_active : v.icon}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
