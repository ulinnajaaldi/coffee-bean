import React, { useState, Suspense, useRef } from "react";
import logo from "./assets/coffe-logo.svg";
import shapeHero from "./assets/shape-hero.svg";
import shapeTea from "./assets/shape-tea-cup.svg";
import coffeOrange from "./assets/coffe1.webp";
import coffePurple from "./assets/coffe2.webp";
import coffeGreen from "./assets/coffe3.webp";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";
import Marquee from "react-fast-marquee";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  const [isOrangeActive, setIsOrangeActive] = useState(true);
  const [isPurpleActive, setIsPurpleActive] = useState(false);
  const [isGreenActive, setIsGreenActive] = useState(false);

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

  const Loading = () => {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="inline-flex">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative z-40 pt-[22px] h-[100vh]">
        <nav className="flex items-center justify-between px-16">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="coffe-beans-logo" className="rotate-45" />
            <h1 className="text-2xl font-medium">CoffeBean</h1>
          </div>
          <div className="flex items-center justify-center gap-8">
            <BiShoppingBag className="w-10 h-10 bg-primary text-white rounded-full p-2" />
            <GiHamburgerMenu className="w-6 h-6" />
          </div>
        </nav>
        <main className="container max-w-7xl mx-auto flex items-center justify-center gap-[60px] pt-[56px]">
          <section className="flex-1">
            <h1 className="text-[68px] font-medium leading-none ">
              PREMIUM COFFEE BEAN
            </h1>
            <p className="text-[20px] py-[12px]">
              Low caffein,
              <br />
              More strong
            </p>
            <h3 className="text-[32px] text-primary font-medium pb-[36px]">
              $69.99
            </h3>
            <div className="flex items-center  gap-5">
              <div className="bg-black text-white px-1 flex items-center justify-center w-[220px] rounded-full">
                <button className="text-[20px]  font-medium p-[18px] rounded-full ">
                  ORDER NOW
                </button>
                <FiArrowUpRight className="p-[10px] w-[46px] h-[46px] bg-primary rounded-full" />
              </div>
              <BiShoppingBag className="p-[10px] w-[46px] h-[46px] bg-primary text-white rounded-full" />
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
                  <path
                    d="M0 200C0 89.543 89.543 0 200 0H237C347.457 0 437 89.5431 437 200V501H0V200Z"
                    fill={
                      isOrangeActive
                        ? "#FFB193"
                        : isPurpleActive
                        ? "#fd7c94"
                        : isGreenActive
                        ? "#42c4a3"
                        : null
                    }
                  />
                </svg>
              </div>
              {/* <img src={shapeHero} alt="shape-tea-pot" className="w-full" /> */}
              <div className="relative flex items-center justify-center z-[99]">
                <button
                  type="button"
                  onClick={changeColorOrange}
                  className={`absolute cursor-pointer h-[80px] w-[80px]  bg-[#FFB193] right-10 -bottom-10 rounded-full ${
                    isOrangeActive ? "outline outline-[5px] outline-white" : ""
                  }`}
                >
                  <img src={coffeOrange} className="-top-3 absolute" />
                </button>
                <button
                  type="button"
                  onClick={changeColorPurple}
                  className={`absolute cursor-pointer h-[80px] w-[80px] bg-[#fd7c94] -bottom-10 rounded-full ${
                    isPurpleActive ? "outline outline-[5px] outline-white" : ""
                  }`}
                >
                  <img src={coffePurple} className="-top-3 absolute" />
                </button>
                <button
                  type="button"
                  onClick={changeColorGreen}
                  className={`absolute cursor-pointer h-[80px] w-[80px] bg-[#42c4a3] left-10 -bottom-10 rounded-full ${
                    isGreenActive ? "outline outline-[5px] outline-white" : ""
                  }`}
                >
                  <img src={coffeGreen} className="-top-3 absolute" />
                </button>
              </div>
            </div>
            <Suspense fallback={<Loading />}>
              <div className="absolute h-full w-full -top-12 right-1 xl:right-3 z-50">
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
                <Suspense fallback={<Loading />}>
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
              <li className="text-primary text-lg font-medium ">
                <span className="text-black text-base font-normal">
                  Use high-quality, feshly roasted coffee beans.
                </span>
              </li>
              <li className="text-primary text-lg font-medium">
                <span className="text-black text-base font-normal">
                  Grind the beans just before brewing.
                </span>
              </li>
              <li className="text-primary text-lg font-medium">
                <span className="text-black text-base font-normal">
                  Use filtered water at the right temperature.
                </span>
              </li>
              <li className="text-primary text-lg font-medium">
                <span className="text-black text-base font-normal">
                  Brew for the recommended time for your brewing method.
                </span>
              </li>
            </ol>
          </section>
        </main>
      </div>
      <footer className="absolute py-[15px] w-full z-40 my-auto bg-[#EBA349] text-white bottom-0 left-0">
        <Marquee gradient={false}>
          <p className="text-lg font-medium">
            EXQUISITE COFFEE, EXCEPTIONAL QUALITY&emsp;✦&emsp;PURE ENJOYMENT IN
            EVERY SIP &emsp;✦&emsp;DISCOVER THE ART OF COFFEE&emsp;✦&emsp;BEST
            COFFEE IN YOUR AREA&emsp;✦&emsp;COME AND CHILL&emsp;✦&emsp;
          </p>
        </Marquee>
      </footer>
      <div className="absolute h-screen w-1/2  bg-[#EAF0F1] z-0 top-0 left-0"></div>
      <div className="absolute h-screen w-1/2 bg-[#EAE8E4] z-0 top-0 right-0"></div>
    </>
  );
}
