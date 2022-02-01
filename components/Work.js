import Project from "./Project";
import project1 from "../public/images/project1.png";
import project2 from "../public/images/project2.png";
import project3 from "../public/images/project3.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { useEffect, useState } from "react";

function Work() {
   const { scrollY } = useViewportScroll();
   const translateX = useTransform(scrollY, [1000, 1500], [2560, 0]);
   const translateX_4K = useTransform(scrollY, [2200, 2700], [2560, 0]);
   const textLeft = useTransform(scrollY, [1800, 2500], [1600, 0]);
   const textLeft_4K = useTransform(scrollY, [3000, 3500], [2600, 0]);
   const textRight = useTransform(scrollY, [1800, 2500], [-1600, 0]);
   const textRight_4K = useTransform(scrollY, [3000, 3500], [-2600, 0]);
   const opacity = useTransform(scrollY, [1800, 2500], [0, 1]);
   const opacity_4K = useTransform(scrollY, [2800, 3500], [0, 1]);
   const bg = useTransform(scrollY, [2700, 2800], ["#BBE7FE", "#202020"]);
   const bg_4K = useTransform(scrollY, [3700, 3800], ["#BBE7FE", "#202020"]);
   const textColor = useTransform(scrollY, [2700, 2800], ["#202020", "#BBE7FE"]);
   const textColor_4K = useTransform(scrollY, [3700, 3800], ["#202020", "#BBE7FE"]);
   const textNone = useTransform(scrollY, [3000, 3100], [1, 0]);
   const textNone_4K = useTransform(scrollY, [4000, 4100], [1, 0]);
   const translateY = useTransform(scrollY, [4200, 4500], [0, 700]);
   const translateY_4K = useTransform(scrollY, [5200, 5500], [0, 700]);

   const [state, setState] = useState(false);

   useEffect(() => {
      scrollY.onChange(() => {
         window.scrollY >= 3500 && window.scrollY <= 4800 ? setState(true) : setState(false);
      });
   }, [scrollY]);

   const [innerWidth, setInnerWidth] = useState(window.innerWidth);

   useEffect(() => {
      function handleWidth(e) {
         setInnerWidth(e.target.innerWidth);
      }

      window.addEventListener("resize", handleWidth);

      return () => window.removeEventListener("resize", handleWidth);
   }, [innerWidth]);

   return (
      <section className="h-[950vh] 2xl:h-[590vh]">
         <div className="sticky top-0 h-[650vh] 2xl:h-[300vh]" id="work">
            <div className="sticky top-0 w-full">
               <div className="overflow-hidden">
                  <div className="relative w-screen h-screen">
                     <motion.div
                        style={{
                           x: innerWidth < 2000 ? translateX : translateX_4K,
                           backgroundColor: innerWidth < 2000 ? bg : bg_4K,
                        }}
                        className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-evenly z-40 bg-[#BBE7FE] text-[#202020] p-10 space-y-10"
                     >
                        <motion.p
                           style={{
                              opacity: innerWidth < 2000 ? textNone : textNone_4K,
                              color: innerWidth < 2000 ? textColor : textColor_4K,
                           }}
                           className="font-jam text-xl md:text-4xl lg:text-6xl font-bold lg:w-1/2 uppercase text-[#202020] tracking-widest lg:leading-[70px]"
                        >
                           Attention to detail and quality work for the client to be 100% satisfied.
                        </motion.p>
                        <motion.div
                           className="lg:w-1/3"
                           style={{
                              opacity: innerWidth < 2000 ? textNone : textNone_4K,
                              color: innerWidth < 2000 ? textColor : textColor_4K,
                           }}
                        >
                           <div className="relative">
                              <ImQuotesRight className="absolute text-4xl top-0 left-0" />
                              <motion.p
                                 style={{
                                    opacity: innerWidth < 2000 ? textNone : textNone_4K,
                                    color: innerWidth < 2000 ? textColor : textColor_4K,
                                 }}
                                 className="font-jam text-lg font-bold pl-12 pb-10 leading-8 text-[#202020]"
                              >
                                 Razvan was extremely cooperative and helped me to fix several critical things that I
                                 couldn't figure by myself.
                              </motion.p>
                              <motion.p
                                 style={{
                                    opacity: innerWidth < 2000 ? textNone : textNone_4K,
                                    color: innerWidth < 2000 ? textColor : textColor_4K,
                                 }}
                                 className="font-jam text-right font-semibold text-sm pr-12"
                              >
                                 Upwork client review
                              </motion.p>
                              <ImQuotesLeft className="absolute text-4xl right-0 bottom-0" />
                           </div>
                        </motion.div>
                     </motion.div>
                     <motion.div className="absolute inset-0 z-50 flex flex-col items-center justify-between py-28 md:py-0 md:justify-around min-w-max">
                        <motion.h1
                           style={{
                              x: innerWidth < 2000 ? textLeft : textLeft_4K,
                              opacity: innerWidth < 2000 ? opacity : opacity_4K,
                              color: innerWidth < 2000 ? textColor : textColor_4K,
                           }}
                           className={`text-[#202020] uppercase font-expanded text-4xl md:text-8xl lg:text-[130px] xl:text-[200px] font-semibold ${
                              state ? null : "stroke"
                           }`}
                        >
                           Projects
                        </motion.h1>
                        <motion.h1
                           style={{
                              x: innerWidth < 2000 ? textRight : textRight_4K,
                              opacity: innerWidth < 2000 ? opacity : opacity_4K,
                              color: innerWidth < 2000 ? textColor : textColor_4K,
                              y: innerWidth < 2000 ? translateY : translateY_4K,
                           }}
                           className="text-[#202020] uppercase font-expanded text-4xl md:text-8xl lg:text-[130px] xl:text-[170px] font-semibold stroke"
                        >
                           Take a look!
                        </motion.h1>
                     </motion.div>
                  </div>
               </div>
            </div>
         </div>
         <div className="relative z-50">
            <div className="p-10 lg:p-0 lg:flex items-center justify-around h-screen w-full">
               <Project
                  title="Amazon App"
                  src={project1}
                  desc="This app is made with next.js, tailwind css firebase database and stripe payments. It is a fully functional app from adding products to cart to finish payment using stripe."
                  link="https://amazon-clone-smoky-five.vercel.app/"
               />
            </div>

            <div className="p-10 lg:p-0 lg:flex items-center justify-around h-screen w-full flex-row-reverse">
               <Project
                  title="Brutalism Website"
                  src={project2}
                  desc="This website is made from a figma design that I found on the internet. It is a pixel perfect website fully responsive."
                  link="https://fratilar.github.io/Brutalism/"
               />
            </div>

            <div className="p-10 lg:p-0 lg:flex items-center justify-around h-screen w-full">
               <Project
                  title="Hulu App"
                  src={project3}
                  desc="This app is made with next.js and tailwind css. It is fully responsive and the content is from TMDB api."
                  link="https://hulu-clone-fratilar.vercel.app/"
               />
            </div>
         </div>
      </section>
   );
}

export default Work;
