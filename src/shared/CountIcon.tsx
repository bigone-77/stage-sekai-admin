import Badge from '@/shared/Badge';

interface IRoundedSvgProps {
  icon: any;
  count: number;
}

export default function CountIcon({ icon: Icon, count }: IRoundedSvgProps) {
  return (
    <div className='rounded-full border-secondary-30 border w-fit p-1 relative bg-background-A'>
      <Icon />
      <div className='absolute -top-2 -right-6'>
        <Badge count={count} />
      </div>
    </div>
  );
}
