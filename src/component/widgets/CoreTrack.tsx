import Wrapper from "@/component/shared/Wrapper";
import Button from "@/component/shared/Button";
import SectionOne from "../shared/SectionOne";
// import QuaterBox from "../shared/QuaterBox";
const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
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
            description="Every participant of the program will start by completing the
            following three core courses."
            titleClassName="text-4xl"
            whiteSpace="whitespace-pre-line"
            subdescription="text-sm"
          />
          <div className="mt-4">
            <Button text={"Enroll Now"} />
          </div>
        </div>
        {/* Secftion Box */}
        <div className="flex flex-col my-20 space-x-2 space-y-4 md:flex-row md:space-y-0">
          {
            CoreTrackData.map((items)=>{
              console.log(items.description)
              return (<div>
              {items.header}
              </div>)
            })
          }
          
          {/* <QuaterBox
            title={"Quarter I"}
            desc={"CS-101: Object-Oriented Programming using TypeScript"}
            number={1}
          /> */}
          {/* <QuaterBox
            title={"Quarter I"}
            desc={
              "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
            }
            number={2}
          />
          <QuaterBox
            title={"Quarter I"}
            desc={
              "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
            }
            number={3}
          /> */}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
