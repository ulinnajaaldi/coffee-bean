import React, { useState, Suspense, useRef } from "react";
import logo from "../assets/coffe-logo.svg";
import shapeTea from "../assets/shape-tea-cup.svg";
import coffeOrange from "../assets/coffe1.webp";
import coffePurple from "../assets/coffe2.webp";
import coffeGreen from "../assets/coffe3.webp";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";
import { GiZigzagHieroglyph } from "react-icons/gi";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function HomePage() {
  const [isOrangeActive, setIsOrangeActive] = useState(true);
  const [isPurpleActive, setIsPurpleActive] = useState(false);
  const [isGreenActive, setIsGreenActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const [count, setCount] = useState(0);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  const spline = useRef();

  function onLoad(splineApp) {
    spline.current = splineApp;
  }

  function changeColorOrange() {
    spline.current.emitEvent("mouseDown", "toggleOrange");
    setIsOrangeActive(true);
    setIsPurpleActive(false);
    setIsGreenActive(false);
  }

  function changeColorPurple() {
    spline.current.emitEvent("mouseDown", "togglePurple");
    setIsPurpleActive(true);
    setIsOrangeActive(false);
    setIsGreenActive(false);
  }

  function changeColorGreen() {
    spline.current.emitEvent("mouseDown", "toggleGreen");
    setIsGreenActive(true);
    setIsOrangeActive(false);
    setIsPurpleActive(false);
  }

  const fillColor = isOrangeActive
    ? "#FFB193"
    : isPurpleActive
    ? "#fd7c94"
    : isGreenActive
    ? "#42c4a3"
    : null;

  return (
    <>
      <div className="relative z-40 pt-[22px] h-[80vh] 3xl:hidden lg:block hidden">
        <nav className="max-w-screen-2xl mx-auto flex items-center justify-between w-full px-5">
          <div className="flex items-center justify-center gap-2 cursor-default">
            <img src={logo} alt="coffe-beans-logo" className="rotate-45" />
            <h1 className="text-2xl font-medium">CoffeBean</h1>
          </div>
          <div className="flex items-center justify-center gap-8 ">
            <BiShoppingBag className="w-10 h-10 bg-primary text-white rounded-full p-2" />
            <GiHamburgerMenu className="w-6 h-6" />
          </div>
        </nav>
        <main className="max-w-screen-xl mx-auto flex items-center justify-center h-full gap-[60px] pt-[20px] px-10 xl:px-0">
          <section className="flex-1">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[68px] font-medium leading-none cursor-default"
            >
              PREMIUM COFFEE BEAN
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[20px] py-[12px]"
            >
              Low caffein,
              <br />
              More strong
            </motion.p>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 8 }}
              onUpdate={() =>
                setCount((prevCount) => Math.min(prevCount + 0.7, 69.99))
              }
              className="text-[32px] text-primary font-medium pb-[36px]"
            >
              ${count.toFixed(2)}
            </motion.h3>
            <div className="flex items-center  gap-5">
              <div
                className="bg-black hover:bg-primary transition-all duration-500 text-white px-1 flex items-center justify-center w-[220px] rounded-full cursor-pointer relative"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <h3
                  className={`text-[20px] relative z-[99] transition-all duration-300 font-medium p-[18px] rounded-full ${
                    isHover ? "translate-x-10" : ""
                  }`}
                >
                  ORDER NOW
                </h3>
                <FiArrowUpRight
                  className={`p-[10px] w-[46px] h-[46px] relative z-[99] bg-primary rounded-full transition-all duration-300 ${
                    isHover ? "rotate-45 -translate-x-[9.3rem]" : ""
                  }`}
                />
                <div
                  className={`h-full  absolute z-[90]  rounded-full bg-clip-content transition-all left-0 duration-300 ${
                    isHover ? "w-full bg-primary " : "w-1/4 opacity-0 bg-black"
                  }`}
                ></div>
              </div>
              <BiShoppingBag className="p-[10px] w-[46px] h-[46px] bg-primary text-white rounded-full cursor-pointer relative z-[99]" />
            </div>
          </section>

          <section className="flex-1">
            <div>
              <div className="w-full">
                <svg
                  viewBox="0 0 437 501"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M0 200C0 89.543 89.543 0 200 0H237C347.457 0 437 89.5431 437 200V501H0V200Z"
                    animate={{ fill: fillColor }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              <div className="relative flex items-center justify-center z-[99]">
                <button
                  type="button"
                  onClick={changeColorOrange}
                  className={`absolute transition-all duration-300 cursor-pointer h-[80px] w-[80px] outline-white bg-[#FFB193] right-10 -bottom-10 rounded-full ${
                    isOrangeActive
                      ? "outline outline-[5px] "
                      : "hover:-translate-y-2"
                  }`}
                >
                  <img src={coffeOrange} className="-top-3 absolute" />
                  <div className="absolute -bottom-4 left-0 right-0 text-center">
                    <p className="bg-primary text-white text-sm px-3 py-1 inline-block mx-auto font-medium">
                      <span className="absolute left-[4px] top-0 bottom-0">
                        <GiZigzagHieroglyph
                          className="text-primary -rotate-90 "
                          size={28}
                        />
                      </span>
                      Raw
                      <span className="absolute right-[4px] top-0 bottom-0">
                        <GiZigzagHieroglyph
                          className="text-primary rotate-90 "
                          size={28}
                        />
                      </span>
                    </p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={changeColorPurple}
                  className={`absolute transition-all duration-300 cursor-pointer h-[80px] w-[80px] outline-white bg-[#fd7c94] -bottom-10 rounded-full ${
                    isPurpleActive
                      ? "outline outline-[5px] "
                      : "hover:-translate-y-2"
                  }`}
                >
                  <img src={coffePurple} className="-top-3 absolute" />
                  <div className="absolute -bottom-4 left-0 right-0 text-center">
                    <p className="bg-[#f04a68] text-white text-sm px-3 py-1 inline-block mx-auto font-medium">
                      <span className="absolute -left-[1.6px] top-0 bottom-0">
                        <GiZigzagHieroglyph
                          className="text-[#f04a68] -rotate-90 "
                          size={28}
                        />
                      </span>
                      Super
                      <span className="absolute -right-[1.5px] top-0 bottom-0">
                        <GiZigzagHieroglyph
                          className="text-[#f04a68] rotate-90 "
                          size={28}
                        />
                      </span>
                    </p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={changeColorGreen}
                  className={`absolute transition-all duration-300 cursor-pointer h-[80px] w-[80px] outline-white bg-[#42c4a3] left-10 -bottom-10 rounded-full ${
                    isGreenActive
                      ? "outline outline-[5px] "
                      : "hover:-translate-y-2"
                  }`}
                >
                  <img src={coffeGreen} className="-top-3 absolute" />
                  <div className="absolute -bottom-4 left-0 right-0 text-center">
                    <p className="bg-[#daa411] text-white text-sm px-3 py-1 inline-block mx-auto font-medium">
                      <span className="absolute left-[4px] top-0 bottom-0">
                        <GiZigzagHieroglyph
                          className="text-[#daa411] -rotate-90 "
                          size={28}
                        />
                      </span>
                      Gold
                      <span className="absolute right-[4px] top-0 bottom-0">
                        <GiZigzagHieroglyph
                          className="text-[#daa411] rotate-90 "
                          size={28}
                        />
                      </span>
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <Suspense fallback={""}>
              <div className="absolute h-[100vh] w-full -top-10 right-1 xl:right-3 z-50">
                <Spline
                  scene="https://draft.spline.design/J99oE1OEJB46YExt/scene.splinecode"
                  onLoad={onLoad}
                />
              </div>
            </Suspense>
          </section>

          <section className="flex-1">
            <div className="w-full pb-7">
              <div className="relative w-[90%] cursor-pointer">
                <Suspense fallback={""}>
                  <div className="absolute h-full w-full -top-7 right-4 z-50">
                    <Spline scene="https://prod.spline.design/2hoJAt0qlEzdkFMw/scene.splinecode" />
                  </div>
                </Suspense>
                <img src={shapeTea} alt="shape-tea-pot" />
              </div>
            </div>
            <div className="pb-4">
              <h2 className="text-[30px] font-medium leading-tight">
                MAKE &nbsp; YOUR &nbsp; COFFEE &nbsp; LIKE &nbsp; A{" "}
                <div className="text-white inline-block px-2 -rotate-6 bg-primary">
                  PRO
                </div>
              </h2>
            </div>
            <ol className="list-outside list-decimal ml-5 flex flex-col gap-[13px]">
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-primary text-lg font-medium "
              >
                <span className="text-black text-base font-normal">
                  Use high-quality, feshly roasted coffee beans.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-primary text-lg font-medium"
              >
                <span className="text-black text-base font-normal">
                  Grind the beans just before brewing.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-primary text-lg font-medium"
              >
                <span className="text-black text-base font-normal">
                  Use filtered water at the right temperature.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-primary text-lg font-medium"
              >
                <span className="text-black text-base font-normal">
                  Brew for the recommended time for your brewing method.
                </span>
              </motion.li>
            </ol>
          </section>
        </main>
      </div>

      <footer className="absolute py-[10px] w-full z-40 my-auto bg-[#EBA349] text-white bottom-0 left-0 3xl:hidden lg:block hidden cursor-default">
        <Marquee gradient={false}>
          <p className="xl:text-lg text-base font-medium">
            EXQUISITE COFFEE, EXCEPTIONAL QUALITY<span>&emsp;✦&emsp;</span>PURE
            ENJOYMENT IN EVERY SIP <span>&emsp;✦&emsp;</span>DISCOVER THE ART OF
            COFFEE<span>&emsp;✦&emsp;</span>BEST COFFEE IN YOUR AREA
            <span>&emsp;✦&emsp;</span>COME AND CHILL<span>&emsp;✦&emsp;</span>
            THIS SITE BUILD BY ULINNAJA<span>&emsp;✦&emsp;</span>
          </p>
        </Marquee>
      </footer>

      <div className="flex flex-col gap-2 text-center relative z-50 h-[100vh] items-center justify-center lg:hidden ">
        <h1 className="md:text-xl text-base">
          For a better{" "}
          <span className="text-white inline-block px-2 rotate-2 bg-primary">
            experience
          </span>{" "}
          I recommend using a laptop/desktop.
        </h1>
        <p className="md:w-1/2 w-full italic md:text-base text-xs">
          Actually, I'm confused about developing a version for tablets and
          mobile devices. Haha.
        </p>
      </div>

      <div className="3xl:flex flex-col gap-3 relative z-50 items-center justify-center h-[100vh] hidden ">
        <h1 className="text-5xl">Why is your screen so big 😡?</h1>
        <p className="text-3xl italic">
          Just zoom in and everything will eventually show up.
        </p>
      </div>

      <div className="absolute h-screen w-1/2  bg-[#EAF0F1] z-0 top-0 left-0"></div>
      <div className="absolute h-screen w-1/2 bg-[#EAE8E4] z-0 top-0 right-0"></div>
    </>
  );
}
