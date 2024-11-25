import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="w-full bg-primary min-h-[60vh] flex items-center">
        <div className="flex items-center justify-between text-center w-full max-w-[1440px] mx-auto px-4 md:px-10">
          <p className="text-gray-100 mx-auto  font-bold text-4xl text-center">
            Välkommen till SolPricer – din guide till rätt solcellsleverantör!
          </p>
          <Image
            className="hidden"
            src="/about-pic.jpg"
            alt="Solar Panels"
            width={700}
            height={400}
          ></Image>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto px-4 py-10">
        <p className="font-medium text-xl text-gray-600">
          Vi är tre tidigare branschkollegor som har samlat vår expertis för att
          göra det enklare för dig att välja rätt solcellsleverantör. Med många
          års erfarenhet inom solcellsindustrin har vi stenkoll på hela
          processen – från första kontakt till färdig installation.<br></br>
          <br></br> Vårt mål är att hjälpa dig att fatta välgrundade beslut och
          hitta den lösning som passar bäst för just dina behov. På SolPricer
          får du en oberoende jämförelse av leverantörer, tips och råd samt
          tillgång till all information du behöver för att ta steget mot en mer
          hållbar framtid. Vi tror på transparens, kvalitet och enkelhet – så
          att din resa mot grön energi blir smidig och trygg.
        </p>
      </div>
    </div>
  );
};

export default page;
