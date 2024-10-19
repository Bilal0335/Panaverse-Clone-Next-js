import CoreTrack from "@/component/widgets/CoreTrack";
import Hero from "@/component/widgets/Hero";
import { SpecalizedTrack } from "@/component/widgets/SpecalizedTrack";
export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Core Track Section */}
        <CoreTrack />
        {/* Specialize Track */}
        <SpecalizedTrack />
      </main>
    </>
  );
}
