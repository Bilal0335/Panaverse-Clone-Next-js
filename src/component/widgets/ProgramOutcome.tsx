import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import outcome from "@/assets/image/image10.jpg";

const outcomePopints = [
  "Product Ownership",
  "Freelancing",
  "Global Marketing by Panaverse DAO",
  "Boosting Economy."
];

const ProgramOutcome = () => {
  return (
    <section className="mt-16 md:mt-28">
      <Wrapper>
        <div className="flex flex-col-reverse items-center mb-[66px] gap-x-8 md:flex-row">
          {/* image left */}
          <div className="flex-1 mt-5">
            <Image src={outcome} alt="outcome image" />
          </div>

          {/* right content */}
          {/* <div className="w-[84px] h-[84px] rounded-full bg-gradient-to-r from-teal-400 to-teal-600 shadow-xl"></div> */}

          <div className="relative flex-1">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-50 to-teal-100 -z-10 shadow-[0_0_50px_100px_rgba(5,193,156,0.1)] blur-3xl"></div>

            <h2 className="text-5xl font-bold">
              The Outcome for Participants of the Program
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan&#39;s software exports.
            </p>
            <div className="grid grid-cols-2 mt-6 gap-x-2 gap-y-4">
              {outcomePopints.map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <svg
                    className="flex-none flex-shrink-0 w-12 h-12 xs:h-14 xs:w-14"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3431 5.65686C23.4673 2.53266 28.5327 2.53266 31.6569 5.65685L46.3431 20.3431C49.4673 23.4673 49.4673 28.5327 46.3431 31.6569L31.6569 46.3431C28.5327 49.4673 23.4673 49.4673 20.3431 46.3431L5.65686 31.6569C2.53266 28.5327 2.53266 23.4673 5.65685 20.3431L20.3431 5.65686Z"
                      fill="url(#paint0_radial_35_416)"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 24.9206C19.0707 25.3461 21.734 26.1698 23.75 27.465C26.1178 24.3345 30.371 21.406 35 19C30.6042 23.2739 26.9668 28.1236 24.5 33C22.5118 30.2129 20.3398 27.6189 17 24.9206Z"
                      fill="white"
                    ></path>
                    <defs>
                      <radialGradient
                        id="paint0_radial_35_416"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(16.5455 -6.96429) rotate(59.1918) scale(77.3011 169.686)"
                      >
                        <stop offset="0.125" stopColor="#00E1F0"></stop>
                        <stop offset="1" stopColor="#00616C"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                  <h3 className="text-lg font-medium">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="w-full h-0.5 mt-1 bg-lineColor"></div>
    </section>
  );
};

export default ProgramOutcome;
