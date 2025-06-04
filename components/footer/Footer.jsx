import Link from "next/link";
import Image from "next/image";
import Newsletter from "../newsletter/Newsletter";
const Footer = () => {
  return (
    <div className="bg-main_black w-full h-auto pt-8 pb-8 md:pr-14 md:pl-14 pr-2 pl-2">
      <div className="flex justify-center mb-5 md:hidden">
        <Image src="/assets/images/logoWhite.png" alt="Logo" width={50} height={50} />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row md:justify-around ">
        <Newsletter />
        <div className="flex flex-row gap-5">
          <div>
            <h2>SOCIALS</h2>
            <ul className=" *:text-alternativ_white">
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>INSTAGRAM</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>FACEBOOK</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>YOUTUBE</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>TIKTOK</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>LINKEDIN</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>COMPANY</h2>
            <ul className=" *:text-alternativ_white">
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>CONTACT</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>COMMUNITY</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>ABOUT</Link>
              </li>
              <li>
                <div className=" hidden pt-4 md:block ">
                  <Image src="/assets/images/logoWhite.png" alt="Logo" width={50} height={50} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
