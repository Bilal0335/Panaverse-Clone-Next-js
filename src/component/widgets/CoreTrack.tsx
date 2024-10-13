import Wrapper from "@/component/shared/Wrapper";
import Button from "@/component/shared/Button";
import SectionOne from "../shared/SectionOne";
const CoreTrack = () => {
  const header = "Core Courses\n(Common in All Specializations)"; 
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-sm">
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
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
