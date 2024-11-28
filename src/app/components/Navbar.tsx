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
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-[23px] border-b border-[#efefef] px-[20px] md:px-[25px] lg:px-[70px] flex items-center">
      <div className="flex-1">
        <Link href="/">
          <Image src="/Logo.jpg" alt="Logo" width={33} height={33} />
        </Link>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu></Menu>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>
              <Image width={30} height={30} alt="Logo" src="/Logo.jpg"></Image>
            </SheetTitle>
            <div className="flex flex-col gap-3 mt-8 font-medium text-xl">
              <Link href="/about-us">About Us</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex justify-end gap-28 flex-1 text-[#334155]">
        <Link href="/about-us">
          <p>Om OSS</p>
        </Link>
        <p>Blog</p>
      </div>
    </div>
  );
};

export default Navbar;
