"use client";
import Wrapper from "@/component/shared/Wrapper";
import SectionOne from "../shared/SectionOne";
import { GoArrowRight } from "react-icons/go";
import QuaterBoxTwo from "../shared/QuaterBoxTwo";
import ProgrammDataTwo from "../shared/ProgrammDataTwo";
import { useState } from "react";

export const SpecalizedTrack = () => {
  const [selectItems, setSelectedItems] = useState("wmd"); // Manage state here

  return (
    <section>
      <Wrapper>
        {/* Specialized Track Header */}
        <div>
          <SectionOne
            title={"Specialized Tracks:"}
            description="After completing the first three quarters, the participants will select one or more specializations consisting of two courses each."
            titleClassName="text-4xl"
            whiteSpace="whitespace-pre-line"
            subdescription="text-sm"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse mt-10 lg:flex-row md:flex-row gap-x-6 gap-y-8">
          {/* Left Content */}
          <div className="px-8 py-8 border rounded shadow-xl border-slate-200 basis-7/12">
            <h4 className="text-lg text-teal-700">Specialized Track</h4>
            <h3 className="text-2xl font-bold">
              {selectItems === "wmd"
                ? "Web 3.0 (Blockchain) and Metaverse Specialization"
                : "Artificial Intelligence (AI) and Deep Learning Specialization"}
            </h3>
            <p className="mt-3 text-lg text-slate-600">
              {selectItems === "wmd"
                ? "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences."
                : "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models."}
            </p>
            <button className="flex items-center px-4 py-2 mt-4 text-lg font-semibold text-teal-700 border border-teal-700 rounded-lg hover:bg-slate-100 group">
              Learn More
              <GoArrowRight className="mx-auto ml-1 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="flex gap-4 mt-8">
              {selectItems === "wmd" ? (
                <>
                  <QuaterBoxTwo
                    header="Quarter IV"
                    description="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
                    number={4}
                    haveBorder={false}
                  />
                  <QuaterBoxTwo
                    header="Quarter V"
                    description="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
                    number={5}
                    haveBorder={false}
                  />
                </>
              ) : (
                <>
                  <QuaterBoxTwo
                    header="Quarter IV"
                    description="AI-351: Developing Planet-Scale Intelligent APIs and Python Programming"
                    number={4}
                    haveBorder={false}
                  />
                  <QuaterBoxTwo
                    header="Quarter V"
                    description="AI-361: Deep Learning and MLOps"
                    number={5}
                    haveBorder={false}
                  />
                </>
              )}
            </div>
          </div>

          {/* Right Content */}
          <div className="px-4 py-6 space-y-4 rounded-lg bg-slate-100 basis-5/12">
            <ProgrammDataTwo
              selectItems={selectItems}
              setSelectedItems={setSelectedItems}
            />{" "}
            {/* Pass props here */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

