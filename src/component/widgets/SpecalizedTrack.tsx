import Wrapper from "@/component/shared/Wrapper";
import SectionOne from "../shared/SectionOne";
import { GoArrowRight } from "react-icons/go";
import QuaterBoxTwo from "../shared/QuaterBoxTwo";
export const SpecalizedTrack = () => {
  return (
    <section>
      <Wrapper>
        {/* Specialized Track */}
        {/* header */}
        <div>
          <SectionOne
            title={"Specialized Tracks:"}
            description="After completing the first three quarters the participants will select one or more specializations consisting of two courses each."
            titleClassName="text-4xl"
            whiteSpace="whitespace-pre-line"
            subdescription="text-sm"
          />
        </div>

        {/* content left */}
        <div className="flex mt-10 gap-x-6 gap-y-8">
          <div className="px-8 py-8 border rounded shadow-xl border-slate-200 basis-8/12">
            <h4 className="text-lg text-teal-700">Specialized Track</h4>
            <h3 className="text-2xl font-bold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="mt-3 text-lg text-slate-600">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className="flex items-center px-4 py-2 mt-4 text-lg font-semibold text-teal-700 border border-teal-700 rounded-lg hover:bg-slate-100 group">
              Learn More
              <GoArrowRight className="mx-auto ml-1 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="flex gap-4 mt-8">
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
            </div>
          </div>
          {/* content right */}
          <div className="flex-1 px-4 py-6 basis-4/12 bg-slate-100">
            <div className="flex items-center gap-x-4">
              <div>
                <div className="w-20 h-16 bg-orange-100 rounded"></div>
              </div>
              <div>
                <div className="">
                  <h4 className="font-medium text-primary">
                    Specialized Track
                  </h4>
                  <h3 className="text-xl font-semibold">
                    Web 3.0 (Blockchain) and Metaverse Specialization
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
