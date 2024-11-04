import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 transition-all duration-300 bg-white/90 backdrop-blur-md">
      <Wrapper>
        <div className="flex items-center justify-between py-4 ">
          <div>
            {/* <h2 className="text-xl font-bold">Panaverse Logo</h2> */}
            <Image
              src={logo}
              alt="Panaverse DAO Logo"
              width={100}
              height={56}
            />
          </div>
          {/* Navigation Bar */}
          <ul className="flex space-x-8 font-medium ">
            <li>
              <Link
                href={"/"}
                className="transition-colors duration-200 hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/course"}
                className="flex items-center transition-transform duration-200 ease-in-out hover:text-primary group "
              >
                Course{" "}
                <GoChevronDown
                  className="mx-auto mt-1 ml-1 font-medium text-black transition-transform duration-200 group-hover:text-primary group-hover:rotate-180 "
                  size={20}
                />
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
