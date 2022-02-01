import Image from "next/image";
import banner from "../public/images/banner.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Banner() {
   const { scrollYProgress } = useViewportScroll();
   const translateRight = useTransform(scrollYProgress, [0, 0.3], [-100, 200]);
   const translateLeft = useTransform(scrollYProgress, [0, 0.3], [100, -200]);
   const imageUp = useTransform(scrollYProgress, [0, 0.15], [0, -450]);

   const imageVariant = {
      hidden: {
         opacity: 0,
      },
      show: {
         opacity: 1,
         transition: { duration: 1.5, ease: "easeInOut" },
      },
   };

   const textVariant = {
      hidden: {
         y: 200,
         opacity: 0,
      },
      show: {
         y: 0,
         opacity: 1,
         transition: { delay: 0.8, duration: 1, ease: "easeInOut" },
      },
   };

   return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
         <motion.h1
            className="absolute top-5 lg:top-10 md:left-20 2xl:top-40 2xl:left-40 leading-10 font-jam text-7xl md:text-[100px] lg:text-[150px] 2xl:text-[250px] text-white opacity-5 uppercase z-20 font-bold"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
         >
            hello
         </motion.h1>
         <div className="text-gray-100 absolute right-10 lg:right-24 2xl:right-40 2xl:top-40 z-40 top-24 md:top-10 font-semibold font-jam">
            <h2 className="text-3xl 2xl:text-7xl">
               I'm <span className="text-cyan-300 uppercase">Razvan</span>
            </h2>
            <p className="w-72 2xl:w-96 2xl:text-3xl">I build fast and interactive websites.</p>
            <a
               href="./Razvan fratila CV.docx"
               className="inline-flex items-center pb-[2px] px-[2px] border-b-2 mt-4 group"
            >
               <p className="font-semibold font-jam transition duration-200 ease-in text-lg 2xl:text-2xl text-[#EFF1DB]">
                  Download CV
               </p>
               <HiArrowNarrowRight className="text-[#EFF1DB] text-2xl ml-2 transition duration-200 ease-in group-hover:translate-x-1" />
            </a>
         </div>
         <div className="relative flex flex-col items-center w-full">
            <motion.div
               className="flex items-center w-[320px] h-[380px] md:w-[500px] md:h-[680px] lg:w-[600px] lg:h-[780px] 2xl:w-[900px] 2xl:h-[1080px] z-10 bg-pink-400 md:mt-16 2xl:mt-44"
               style={{ y: imageUp }}
               variants={imageVariant}
               initial="hidden"
               animate="show"
            >
               <Image src={banner} alt="Image of a macbook" priority />
            </motion.div>
            <motion.div
               className="absolute whitespace-nowrap z-0 top-36 md:top-[40%] 2xl:top-[45%] font-expanded"
               variants={textVariant}
               initial="hidden"
               animate="show"
            >
               <motion.p
                  className="text-white font-bold text-5xl md:text-[100px] lg:text-[130px] 2xl:text-[220px] uppercase md:leading-[130px] lg:leading-[170px] 2xl:leading-[350px]"
                  style={{ x: translateLeft }}
               >
                  web developer web developer
               </motion.p>
               <motion.p
                  className="text-white font-bold text-5xl md:text-[100px] lg:text-[130px] 2xl:text-[220px] uppercase "
                  style={{ x: translateRight }}
               >
                  javascript react javascript
               </motion.p>
            </motion.div>
            <motion.div
               className="absolute whitespace-nowrap z-20 stroke top-36 md:top-[40%] 2xl:top-[45%] font-expanded"
               variants={textVariant}
               initial="hidden"
               animate="show"
            >
               <motion.p
                  className="text-white font-bold text-5xl md:text-[100px] lg:text-[130px] 2xl:text-[220px] uppercase md:leading-[130px] lg:leading-[170px] 2xl:leading-[350px]"
                  style={{ x: translateLeft }}
               >
                  web developer web developer
               </motion.p>
               <motion.p
                  className="text-white font-bold text-5xl md:text-[100px] lg:text-[130px] 2xl:text-[220px] uppercase"
                  style={{ x: translateRight }}
               >
                  javascript react javascript
               </motion.p>
            </motion.div>
         </div>
      </div>
   );
}

export default Banner;
