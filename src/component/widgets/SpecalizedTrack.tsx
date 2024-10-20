import Wrapper from "@/component/shared/Wrapper";
import SectionOne from "../shared/SectionOne";
import { GoArrowRight } from "react-icons/go";
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
        <div className="mt-10">
          <div className="px-8 py-8 border rounded shadow-xl border-slate-200">
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
          </div>
        </div>
        {/* content right */}
      </Wrapper>
    </section>
  );
};
