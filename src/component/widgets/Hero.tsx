import Wrapper from "../../component/shared/Wrapper";
import Image from "next/image";
import Hero_Image from "@/assets/image/hero_section.jpg";
const Hero = () => {
  return (
    <section className="bg-red-200">
      <Wrapper>
        {/* left side */}
        <div className="flex">
          <div className="flex-1">
            <h4>
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1>Certified Web 3.0 and Metaverse Developer</h1>
            <p>
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p>
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <button>Learn More</button>
          </div>
          {/* right side */}
          <div className="flex-1">
            <Image
              src={Hero_Image}
              alt="Hero Section"
              width={400} // Set desired width
              height={200} // Set desired height
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
