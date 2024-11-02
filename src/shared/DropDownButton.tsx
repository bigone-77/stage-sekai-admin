import ArrowDownIcon from '@svg/arrow-down.svg';

interface IDropDownButtonProps {
  icon: any;
  label: string;
}

export default function DropDownButton({
  icon: Icon,
  label,
}: IDropDownButtonProps) {
  return (
    <button className='flex items-center gap-x-4 justify-between pl-4 pr-3 py-3 border border-text-50 rounded-searchInput bg-background-A text-button-2'>
      <span className='flex items-center gap-x-2'>
        <Icon />
        <p className='text-button-2'>{label}</p>
      </span>
      <ArrowDownIcon />
    </button>
  );
}
