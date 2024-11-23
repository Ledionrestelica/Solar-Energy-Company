import Image from "next/image";

const Navbar = () => {
  return (
    <div className="py-[23px] border-b border-[#efefef] px-[10px] md:px-[20px] lg:px-[70px] flex items-center">
      <div className="flex-1">
        <Image src="/Logo.jpg" alt="Logo" width={33} height={33} />
      </div>

      <div className="hidden md:flex justify-between flex-1 text-[#334155]">
        <p>Privat</p>
        <p>Foretag</p>
        <p>BRF</p>
        <p>Lantbruk</p>
        <p>For Installers</p>
      </div>
    </div>
  );
};

export default Navbar;
