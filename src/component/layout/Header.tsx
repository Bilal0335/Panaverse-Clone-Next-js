import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Wrapper from "@/component/shared/Wrapper";
const Header = () => {
  return (
    <Wrapper>
      <header className="sticky top-0 flex items-center justify-between max-w-screen-xl px-2 py-6 mx-auto bg-white">
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
      </header>
    </Wrapper>
  );
};

export default Header;
