import React, { Suspense } from "react";
import logo from "./assets/coffe-logo.svg";
import shapeTea from "./assets/shape-tea-cup.svg";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";
import { ReactSVG } from "react-svg";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  return (
    <div className="container max-w-7xl mx-auto">
      <div className="relative z-40 pt-[22px] h-[100vh]">
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <ReactSVG src={logo} className="rotate-45" />
            <h1 className="text-2xl font-medium">CoffeBean</h1>
          </div>
          <div className="flex items-center justify-center gap-8">
            <BiShoppingBag className="w-10 h-10 bg-primary text-white rounded-full p-2" />
            <GiHamburgerMenu className="w-6 h-6" />
          </div>
        </nav>
        <main className="flex items-center justify-center gap-[60px]">
          <section className="flex-1">
            <h1 className="text-[68px] font-medium leading-none pt-[76px]">
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
            <svg
              width="437"
              height="501"
              viewBox="0 0 437 501"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 200C0 89.543 89.543 0 200 0H237C347.457 0 437 89.5431 437 200V501H0V200Z"
                fill="#FFB193"
              />
            </svg>
          </section>
          <section className="flex-1">
            <div>
              <ReactSVG src={shapeTea} />
            </div>
            <div className="pb-5">
              <h2 className="text-[30px] font-medium">
                MAKE YOUR COFFEE LIKE A{" "}
                <div className="text-white inline-block px-2 -rotate-6 bg-primary">
                  PRO
                </div>
              </h2>
            </div>
            <ol className="list-outside list-decimal ml-5 flex flex-col gap-[13px]">
              <li className="text-primary text-lg font-medium">
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
      <footer className="absolute py-[20px] w-full z-40 my-auto bg-[#EBA349] text-white bottom-0 left-0">
        <div className="flex gap-5 text-lg font-medium">
          <p>EXQUISITE COFFEE, EXCEPTIONAL QUALITY</p>
          <p>+</p>
          <p>PURE ENJOYMENT IN EVERY SIP</p>
          <p>+</p>
          <p>DISCOVER THE ART OF COFFEE </p>
          <p>+</p>
          <p>BEST COFFEE IN YOUR AREA</p>
        </div>
      </footer>
      {/* <footer className="relative h-screen"></footer> */}
      <div className="absolute h-screen w-1/2  bg-[#EAF0F1] z-0 top-0 left-0"></div>
      <div className="absolute h-screen w-1/2 bg-[#EAE8E4] z-0 top-0 right-0"></div>
      {/* <Suspense fallback={""}>
        <div className="absolute h-full w-full top-0 left-0 z-50">
          <Spline scene="https://prod.spline.design/WBuUN4ma1K-jn2U2/scene.splinecode" />
        </div>
      </Suspense> */}
    </div>
  );
}
