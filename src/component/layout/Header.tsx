import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
const Header = () => {
  return (
    <header className="sticky top-0 z-10 transition-all duration-300 bg-white/90 backdrop-blur-md">
      <Wrapper>
        <div className="flex items-center justify-between py-4 ">
          <div>
            {/* <h2 className="text-xl font-bold">Panaverse Logo</h2> */}
            <Image src={logo} alt="Panaverse DAO Logo" width={98} height={56} />
          </div>
          {/* Navigation Bar */}
          <ul className="flex space-x-8 font-semibold">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/course"}>Course</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
