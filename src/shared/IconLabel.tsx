interface IIconLabelProps {
  title: string;
  icon: any;
}

export default function IconLabel({ title, icon: Icon }: IIconLabelProps) {
  return (
    <span className='flex items-center gap-x-3 p-4 w-full'>
      <Icon />
      <p className='text-button-1 text-text-20'>{title}</p>
    </span>
  );
}
