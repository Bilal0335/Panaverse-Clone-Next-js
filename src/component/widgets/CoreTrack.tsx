import Wrapper from "@/component/shared/Wrapper";
import Button from "@/component/shared/Button";
import SectionOne from "../shared/SectionOne";

const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3
  }
];

const CoreTrack = () => {
  const header = "Core Courses\n(Common in All Specializations)";
  
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-md">
          {/* Core section */}
          <SectionOne
            subtitle="Program of Studies"
            title={header}
            description="Every participant of the program will start by completing the following three core courses."
            titleClassName="text-4xl"
            whiteSpace="whitespace-pre-line"
            subdescription="text-sm"
          />
          <div className="mt-4">
            <Button text="Enroll Now" />
          </div>
        </div>

        {/* Section Box */}
        <div className="flex flex-col my-20 gap-x-8 gap-y-6 md:flex-row">
          {CoreTrackData.map((item, i) => (
            <div
              className="relative flex flex-col justify-center flex-1 px-10 py-16 transition-transform duration-300 border rounded-md cursor-pointer group"
              key={item.number}
            >
              <h4 className="text-xl font-bold transition-transform duration-700 ease-in-out group-hover:text-teal-900">
                {item.header}
              </h4>
              <p className="mt-2 text-sm font-normal text-slate-600">
                {item.description}
              </p>
              <span className="absolute -top-8 font-bold text-gray-200 text-[170px] right-10 -z-10 transition-transform duration-500 scale-y-110 group-hover:scale-y-125 ease-in-out">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
