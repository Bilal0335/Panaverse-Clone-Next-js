import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import footerLogo from "@/assets/image/image1.jpg";
const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div>
          {/* left content */}
          <div>
            <Image
              src={footerLogo}
              alt="Panaverse DAO Logo"
              width={98}
              height={56}
            />
          </div>
          {/* right content */}
          <div></div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
