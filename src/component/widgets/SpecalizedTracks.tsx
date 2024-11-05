"use client";
import Wrapper from "@/component/shared/Wrapper";
import { GoArrowRight } from "react-icons/go";
import QuaterBoxTwo from "@/component/shared/QuaterBoxTwo";
import Image from "next/image";
import BlockChain from "@/assets/image/BlockChain.jpg";
import CloudNative from "@/assets/image/CloudNative.jpg";
import Ambient from "@/assets/image/Ambient.jpg";
import Genomics from "@/assets/image/Genomics.jpg";
import Network from "@/assets/image/Network.jpg";
import AI from "@/assets/image/AI.jpg";
import { useState } from "react";

export const programmData = [
  {
    slug: "wms",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: BlockChain,
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
    slug: "AI",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: AI,
    quarter: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5
      }
    ]
  },
  {
    slug: "cnc",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: CloudNative,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5
      }
    ]
  },
  {
    slug: "ac",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: Ambient,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5
      }
    ]
  },
  {
    slug: "gbs",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: Genomics,
    quarter: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5
      }
    ]
  },
  {
    slug: "npas",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: Network,
    quarter: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5
      }
    ]
  }
];

const SpecalizedTracks = () => {
  const [selectItems, setSelectedItems] = useState("wms");

  const selectedItemData = programmData.find(
    (item) => item.slug === selectItems
  );

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
            <button className="flex items-center px-4 py-2 mt-4 text-lg font-semibold text-teal-700 border border-teal-700 rounded-lg hover:bg-slate-100 group">
              Learn More
              <GoArrowRight className="mx-auto ml-1 transition-transform group-hover:translate-x-1" />
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
                className="relative py-3 cursor-pointer gap-x-4"
              >
                {/* Container for Image and Text */}
                <div className="flex items-center gap-x-4">
                  {/* Image */}
                  <div className="relative flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.header}
                      className="object-cover h-24 rounded-md w-36"
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h4 className="font-medium text-primary">
                      Specialized Track
                    </h4>
                    <h3 className="text-lg font-semibold">{item.header}</h3>
                  </div>
                </div>
                {/* Underline below both image and text with increased spacing */}
                <div className="w-full h-0.5 bg-gray-400-700 mt-4 border "></div>{" "}
                {/* Adjusted margin-top */}
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecalizedTracks;
