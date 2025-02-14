import CoreTrack from "@/component/widgets/CoreTrack";
import Hero from "@/component/widgets/Hero";
import SpecalizedTracks from "@/component/widgets/SpecalizedTracks";
import ProgramOutcome from "@/component/widgets/ProgramOutcome";
export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Core Track Section */}
        <CoreTrack />
        {/* Specialize Track */}
        {/* <SpecalizedTracks /> */}
        <SpecalizedTracks />
        {/* <Outcome Section /> */}
        <ProgramOutcome />
      </main>
    </>
  );
}
