import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex-1">
        <Hero />
        <div className="max-w-[580px]">
          <Tabs />
        </div>
      </div>
      <div className="md:w-1/2 max-sm:h-[50vh] relative">
        <Image
          className="object-cover"
          src="/solar-panel.jpg"
          alt="Solar Panel photo"
          fill
        />
      </div>
    </div>
  );
}
