import Image from "next/image";
import Ai from "@/assets/image/image4.jpg";
const ProgrammDataTwo = () => {
  const programmData = [
    {
      header: "Web 3.0 (Blockchain) and Metaverse Specialization",
      description:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
      image: Ai,
      quarter: [
        {
          header: "Quarter IV",
          description:
            "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
          number: 4
        }
      ]
    },
    {
      header: "Artificial Intelligence (AI) and Deep Learning Specialization",
      description:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      image: Ai,
      quarter: [
        {
          header: "Quarter IV",
          description:
            "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
          number: 4
        },
        {
          header: "Quarter V",
          description:
            "AI-361: Deep Learning and MLOps",
          number: 5
        }
      ]
    },
  ];
  return (
    <div>
      {programmData.map((item, i) => (
        <div key={i} className="flex items-center space-y-4 cursor-pointer gap-x-4 ">
          <div className="flex-shrink-0 h-24 w-36">
            {/* <div className="w-20 h-16 bg-orange-100 rounded"></div> */}
            <Image
              src={Ai}
              alt={item.header}
              className="object-cover w-full h-24 rounded-md"
            />
          </div>
          <div>
            <div className="">
              <h4 className="font-medium text-primary">Specialized Track</h4>
              <h3 className="text-xl font-semibold leading-tight">
                {item.header}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgrammDataTwo;
