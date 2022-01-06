import Image from "next/image";
import logo from "../public/images/logo-white.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Loader() {
   const [procent, setProcent] = useState(1);
   const myRef = useRef();

   useEffect(() => {
      let getData = myRef.current.getAttribute("data-set");
      setTimeout(() => {
         if (procent < getData) {
            setProcent(procent + 1);
         }
      }, 35);
      return () => clearTimeout();
   }, [procent]);

   const container = {
      show: {
         transition: {
            staggerChildren: 0.35,
         },
      },
   };

   const itemUp = {
      hidden: {
         opacity: 0,
         y: -200,
      },
      show: {
         opacity: 1,
         y: 0,
         transition: {
            ease: "easeInOut",
            type: "spring",
            stiffness: 50,
         },
      },
      exit: {
         opacity: 0,
         transition: { duration: 0.7, ease: "easeInOut" },
      },
   };
   const itemDown = {
      hidden: {
         opacity: 0,
         y: 200,
      },
      show: {
         opacity: 1,
         y: 0,
         transition: {
            ease: "easeInOut",
            type: "spring",
            stiffness: 50,
         },
      },
      exit: {
         opacity: 0,
         y: 200,
         transition: { duration: 0.4, ease: "easeInOut" },
      },
   };

   return (
      <motion.div
         className="w-screen h-screen bg-black z-50 absolute top-0 left-0 flex flex-col items-center justify-center"
         variants={container}
         initial="hidden"
         animate="show"
         exit="exit"
      >
         <motion.div className="w-60 h-14" variants={itemUp} layoutId="logo-id">
            <Image src={logo} alt="logo image" priority />
         </motion.div>
         <motion.div className="relative bg-transparent border-2 w-56 h-56 rounded-full mt-10" variants={itemDown}>
            <p
               ref={myRef}
               data-set="100"
               className="text-white font-jam text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
               {procent} <span>%</span>
            </p>
         </motion.div>
      </motion.div>
   );
}

export default Loader;
