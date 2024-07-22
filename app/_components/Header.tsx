import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <Image src="/logo.svg" alt="logo" width={0} height={0} priority className="w-[180px] h-auto" />
    </div>
  );
};

export default Header;
