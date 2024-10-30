"use client";
import Wrapper from "@/component/shared/Wrapper";
import { GoArrowRight } from "react-icons/go";
import QuaterBoxTwo from "@/component/shared/QuaterBoxTwo";
import Image from "next/image";
import Ai from "@/assets/image/image4.jpg";
import Wim from "@/assets/image/image5.jpg";
import { useState } from "react";
export const programmData = [
  {
    slug: "wmd",
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
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  },
  {
    slug: "wmd",
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
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  },
  {
    slug: "wmd",
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
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  },
  {
    slug: "wmd",
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
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  },
  {
    slug: "wmd",
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
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  },
  {
    slug: "wmd",
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
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  },
  {
    slug: "wmd",
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
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  },
  {
    slug: "wmd",
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
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: Wim,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  }
];

const SpecalizedTracks = () => {
  const [selectItems, setSelectedItems] = useState("wmd");

  const selectedItemData = programmData.find(
    (item) => item.slug === selectItems
  );

  console.log(selectItems);
  // console.log(selectedItemData);
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <h2 className="text-5xl font-bold whitespace-pre-line">
          Specialized Tracks:
        </h2>
        <p className="max-w-screen-sm mt-3 text-xl text-slate-600">
          After completing the first three quarters, the participants will
          select one or more specializations consisting of two courses each.
        </p>
        {/* Flex container for left and right columns */}
        <div className="flex flex-col-reverse mt-10 gap-x-6 gap-y-4 lg:flex-row">
          {/* Left Column */}
          <div className="sticky self-start px-8 py-8 border shadow-xl top-28 rounded-xl border-slate-200 basis-8/12">
            <h4 className="text-lg font-medium text-primary">
              Specialized Track
            </h4>
            <h3 className="text-2xl font-bold">{selectedItemData?.header}</h3>
            <p className="mt-2 text-lg text-slate-600">
              {selectedItemData?.description}
            </p>
            <button className="flex items-end justify-center mt-4 text-xl underline text-primary gap-x-2">
              Learn More <GoArrowRight className="mb-1.5 text-lg" />
            </button>
            {/* Quarter Boxes */}
            <div className="flex flex-col gap-4 mt-8 sm:flex-row">
              {selectedItemData?.quarter.map((item) => (
                <QuaterBoxTwo
                  key={item.number}
                  header={item.header}
                  description={item.description}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div className="flex-1 px-4 py-6 space-y-4 basis-4/12">
            {programmData.map((item, i) => (
              <div
                onClick={() => setSelectedItems(item.slug)}
                key={i}
                className="flex items-center cursor-pointer gap-x-4"
              >
                {/* <div className="w-20 h-16 bg-red-200 rounded"></div> */}

                <div className="flex-shrink-0 h-24 w-36">
                  <Image
                    src={item.image ? item.image : Ai}
                    alt={item.header}
                    className={"object-cover h-24 w-48 rounded-md"}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-primary">
                    Specialized Track
                  </h4>
                  <h3 className="text-lg font-semibold">{item.header}</h3>
                </div>
              </div>
              // {/* Underline */}
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecalizedTracks;
