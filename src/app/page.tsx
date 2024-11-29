import Form1 from "./components/Form1";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex-1">
        <Hero />
        <div className="md:max-w-[580px]">
          <Form1 />
        </div>
      </div>
      <div className="md:w-1/2 max-sm:h-[50vh] relative">
        <Image
          className="object-cover"
          src="/solar-house.webp"
          alt="Solar Panel photo"
          fill
        />
      </div>
    </div>
  );
}
