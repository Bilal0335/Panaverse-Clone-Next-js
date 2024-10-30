import Wrapper from "@/component/shared/Wrapper";
import { GoArrowRight } from "react-icons/go";
import QuaterBoxTwo from "@/component/shared/QuaterBoxTwo";

const SpecalizedTracks = () => {
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <h2 className="text-5xl whitespace-pre-line text-bold">
          Specialized Tracks:
        </h2>
        <p className="mt-3 text-xl text-slate-600">
          After completing the first three quarters, the participants will
          select one or more specializations consisting of two courses each.
        </p>
        {/* Flex container for left and right columns */}
        <div className="flex mt-10 gap-x-6 gap-y-4">
          {/* Left Column */}
          <div className="px-8 py-8 border shadow-xl rounded-xl border-slate-200 basis-8/12">
            <h4 className="text-lg text-teal-700">Specialized Track</h4>
            <h3 className="text-2xl font-bold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="mt-2 text-lg text-slate-600">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className="flex items-end justify-center mt-4 text-xl text-teal-700 underline gap-x-2">
              Learn More <GoArrowRight className="mb-1.5 text-lg" />
            </button>
            {/* Quarter Boxes */}
            <div className="flex gap-4 mt-8">
              <QuaterBoxTwo
                header={"Quarter IV"}
                description={
                  "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
                }
                number={4}
                haveBorder={false}
              />
              <QuaterBoxTwo
                header={"Quarter V"}
                description={
                  "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
                }
                number={5}
                haveBorder={false}
              />
            </div>
          </div>
          {/* Right Column */}
          <div className="flex px-4 py-6 bg-slate-100 basis-4/12 gap-x-4">
            <div className="w-20 h-16 bg-red-200 rounded"></div>
            <div>
              <h4>Specialized Track</h4>
              <h3>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecalizedTracks;
