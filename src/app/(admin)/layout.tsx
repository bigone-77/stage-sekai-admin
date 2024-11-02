import Logo from '@svg/logo.svg';
import AlertIcon from '@svg/alert.svg';
import UploadStageIcon from '@svg/upload-stage.svg';
import MyStageIcon from '@svg/mystage.svg';
import MenuIcon from '@svg/menu.svg';
import SettingIcon from '@svg/setting.svg';
import LanguageIcon from '@svg/language.svg';

import CountIcon from '@/shared/CountIcon';
import SearchInput from '@/shared/SearchInput';
import IconLabel from '@/shared/IconLabel';
import DropDownButton from '@/shared/DropDownButton';

const MOCKING_DATA = {
  admin: {
    name: '스테이지세카이',
    alertNum: 1000,
  },
};

const MenuList = [
  { title: '공연등록', icon: UploadStageIcon },
  { title: '내 공연', icon: MyStageIcon },
  { title: '메뉴', icon: MenuIcon },
];

export default function MainAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='grid grid-cols-[1fr_5fr] min-h-screen bg-background-D'>
      <aside className='pt-8 border-r border-r-secondary-30'>
        <div className='pb-6 px-10 border-b border-b-text-40'>
          <Logo />
          <div className='pt-20 flex items-center gap-x-3'>
            <h4 className='text-subtitle-h4'>{MOCKING_DATA.admin.name}</h4>
            <CountIcon icon={AlertIcon} count={MOCKING_DATA.admin.alertNum} />
          </div>
        </div>

        <nav className='px-8 pt-6'>
          <SearchInput />
          <ul className='pt-6 flex flex-col gap-y-6'>
            {MenuList.map((menu, index) => (
              <li key={index}>
                <IconLabel title={menu.title} icon={menu.icon} />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {children}
      <div className='absolute top-8 right-10 flex items-center gap-x-4'>
        <DropDownButton icon={SettingIcon} label='관리자 모드' />
        <DropDownButton icon={LanguageIcon} label='한국어' />
      </div>
    </div>
  );
}
