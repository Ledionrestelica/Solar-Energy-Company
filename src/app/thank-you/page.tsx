import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center pb-32 ">
      <div className="w-[50px] h-[50px] rounded-full bg-[#73EEBA]/40 flex items-center justify-center">
        <Check width={30} height={30} color="#00BC56" />
      </div>

      <h1 className="font-medium  text-3xl">Thank you for choosing us</h1>
      <p className="text-gray-400">We will contact you soon</p>
      <Link href="/">
        <button className="flex gap-2 items-center py-3 bg-primary px-3 rounded-full text-white">
          <p>Nasta</p> <ArrowRight width={15} height={15}></ArrowRight>
        </button>
      </Link>
    </div>
  );
};

export default page;
