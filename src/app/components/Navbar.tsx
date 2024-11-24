import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="py-[23px] border-b border-[#efefef] px-[20px] md:px-[25px] lg:px-[70px] flex items-center">
      <div className="flex-1">
        <Image src="/Logo.jpg" alt="Logo" width={33} height={33} />
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu></Menu>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Navbar</SheetTitle>
          </SheetContent>
        </Sheet>
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
