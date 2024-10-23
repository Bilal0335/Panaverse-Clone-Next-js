import Wrapper from "@/component/shared/Wrapper";
import Button from "@/component/shared/Button";
import SectionOne from "../shared/SectionOne";
import QuaterBoxTwo from "../shared/QuaterBoxTwo";

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
            <QuaterBoxTwo
              key={item.number}
              header={item.header}
              description={item.description}
              number={i + 1}
              haveBorder={true}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
