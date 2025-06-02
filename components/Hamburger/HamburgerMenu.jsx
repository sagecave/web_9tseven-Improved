"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import basketIcon from "../../public/assets/icons/basket.svg";

import BasketModal from "../basket/BasketModal";
import { useStore } from "../../globalHooks/basketHooks";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBasketOpen, setBasketOpen] = useState(false);

  const allProductQuantities = useStore((state) => state.allProductQuantities);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleBasketClick = () => {
    setBasketOpen(!isBasketOpen);
    console.log("Basket clicked", isBasketOpen);
  };

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNav(true);
        setLastScrollY(window.scrollY);
        return;
      }
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <div className={`transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"} flex justify-between fixed w-full p-8 z-20 md:hidden`}>
        <button type="button" aria-expanded={isOpen} aria-label="Open Menu" onClick={handleMenuClick} className=" cursor-pointer">
          <div className="flex flex-col gap-1">
            <span className=" w-6 h-0.5 bg-main_white"></span>
            <span className=" w-6 h-0.5 bg-main_white"></span>
            <span className=" w-6 h-0.5 bg-main_white"></span>
          </div>
        </button>
        {isOpen && (
          <div>
            <Image src="/assets/images/logoWhite.png" alt="Logo" width={50} height={50} />
          </div>
        )}
        {isOpen && <div></div>}
        {!isOpen && (
          <ul className="flex gap-3 ">
            <li>
              <button type="button" aria-expanded={isBasketOpen} aria-label="Open Basket" onClick={handleBasketClick} className=" cursor-pointer">
                <Image src={basketIcon} alt="Logo" width={20} height={20} />
                <div className="absolute top-6.5 right-5.5 bg-main_white text-main_black rounded-full border-main_black w-3 h-3 flex justify-center items-center">
                  <div className="text-[0.6rem]">{allProductQuantities}</div>
                </div>
              </button>
            </li>
          </ul>
        )}
      </div>
      <nav className={`transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"} w-full p-10 md:pt-6 md:pb-6 md:pl-14 md:pr-14 bg-main_black fixed top-0 left-0 z-10`}>
        <div className={"hidden  md:flex md:justify-between items-center"}>
          <div>
            <ul className="flex gap-3 w-10 ">
              <li className="hover:text-main_white hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-main_white hover:underline">
                <Link href="/productPage">Shop</Link>
              </li>
              <li className="hover:text-main_white hover:underline">
                <Link href="/communityPage">Community</Link>
              </li>
              <li className="hover:text-main_white hover:underline">
                <Link href="/aboutPage">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/">
              <Image src="/assets/images/logoWhite.png" alt="Logo" width={50} height={50} />
            </Link>
          </div>
          <div className={`${isOpen ? "hidden" : "block"}`}>
            <ul className="flex gap-3 w-10 ">
              <li>
                <button type="button" aria-expanded={isBasketOpen} aria-label="Open Basket" onClick={handleBasketClick} className=" cursor-pointer">
                  <Image src={basketIcon} alt="Logo" width={20} height={20} />
                  <div className="absolute top-5 right-16 bg-main_white text-main_black rounded-full border-main_black w-3 h-3 flex justify-center items-center">
                    <div className="text-[0.6rem]">{allProductQuantities}</div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="w-full h-1/2 bg-main_black z-12 fixed mt-20  " key="modal" initial={{ y: -300, opacity: 1 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -300, opacity: 0 }} transition={{ ease: "easeOut", duration: 0.5 }}>
            <div className=" p-6">
              <div>
                <ul className={`${isOpen ? "flex flex-col z-11 text-HeaderSizeBig text-alternativ_white " : "flex gap-3"}`}>
                  <li className="hover:text-main_white hover:underline">
                    <Link onClick={() => setIsOpen(false)} href="/">
                      Home
                    </Link>
                  </li>
                  <li className="hover:text-main_white hover:underline">
                    <Link onClick={() => setIsOpen(false)} href="/productPage">
                      Shop
                    </Link>
                  </li>
                  <li className="hover:text-main_white hover:underline">
                    <Link onClick={() => setIsOpen(false)} href="/communityPage">
                      Community
                    </Link>
                  </li>
                  <li className="hover:text-main_white hover:underline">
                    <Link onClick={() => setIsOpen(false)} href="/aboutPage">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isBasketOpen && <BasketModal isBasketOpen={isBasketOpen} setBasketOpen={setBasketOpen} />}
    </>
  );
};

export default HamburgerMenu;
