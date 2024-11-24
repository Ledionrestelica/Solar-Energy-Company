import { Check } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center pb-32 ">
      <h1 className="font-bold uppercase text-3xl">Thank You</h1>
      <p className="text-gray-400">We will contact you soon</p>
      <Check width={50} height={50} color="#1A9BA7" />
    </div>
  );
};

export default page;
