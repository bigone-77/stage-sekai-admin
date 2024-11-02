interface IBadgeProps {
  count: number;
}

export default function Badge({ count }: IBadgeProps) {
  return (
    <div className='bg-error-0 rounded-full flex items-center justify-center px-[2px] pt-[2px]'>
      <span className='text-background-A text-badge'>
        {String(count).length > 3 ? '999+' : count}
      </span>
    </div>
  );
}
