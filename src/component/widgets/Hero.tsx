import Wrapper from "../../component/shared/Wrapper";
import Image from "next/image";
import Hero_Image from "@/assets/image/hero_section.jpg";
import Button from "../shared/Button";
const Hero = () => {
  return (
    <section className="">
      <Wrapper>
        {/* left side */}
        <div className="flex flex-col items-center justify-center mt-2 md:flex-row">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-teal-800">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="max-w-xl mt-4 text-lg text-gray-500 ">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>

            <p className="max-w-xl mt-4 text-lg text-gray-500">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-4 mr-5">
              <Button text={"Learn More"}/>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1">
            <Image
              src={Hero_Image}
              alt="Hero Section"
              width={600} // Set desired width
              height={300} // Set desired height
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
