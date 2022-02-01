import { BsEnvelope, BsHeartFill, BsCheck2 } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Contact() {
   const [innerWidth, setInnerWidth] = useState(window.innerWidth);
   const [input] = useState("fratila_razvan24@yahoo.com");
   const [copied, setCopied] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setCopied(false);
      }, 1000);

      return () => clearTimeout();
   }, [copied]);

   useEffect(() => {
      function handleWidth(e) {
         setInnerWidth(e.target.innerWidth);
      }

      window.addEventListener("resize", handleWidth);

      return () => window.removeEventListener("resize", handleWidth);
   }, [innerWidth]);

   const animation = useAnimation();
   const [contactRef, inView] = useInView({
      triggerOnce: true,
      rootMargin: "300px",
   });

   const showContact = {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1, transition: { duration: 2.5, ease: "easeInOut" } },
   };

   useEffect(() => {
      if (inView) {
         animation.start("visible");
      }
   }, [animation, inView]);

   return (
      <>
         <motion.div
            ref={contactRef}
            animate={animation}
            initial="hidden"
            variants={showContact}
            className="w-full min-h-screen hidden lg:flex items-center justify-center lg:mt-[80vh]"
            id="contact"
         >
            <div className="overflow-hidden sticky top-0 w-[700px] h-[700px] 2xl:w-[1400px] 2xl:h-[1400px] p-20 rounded-full flex items-center justify-center flex-col">
               <p className={`text-white absolute lg:top-[270px] ${copied ? "opacity-100" : "opacity-0"}`}>
                  Copied to clipboard!
               </p>
               <div className="p-4 bg-transparent rounded-sm relative z-10 w-3/4">
                  <div className="flex w-full lg:w-96 2xl:w-[600px] 2xl:mx-auto">
                     <CopyToClipboard text={input} onCopy={() => setCopied(true)}>
                        <button className="flex items-center justify-center 2xl:w-40 px-6 py-4 rounded-l-md bg-purple-500 text-white text-sm">
                           {copied ? (
                              <BsCheck2 className="text-2xl 2xl:text-4xl cursor-pointer hover:scale-110 transition duration-400 ease-in-out" />
                           ) : (
                              <BsEnvelope className="text-2xl 2xl:text-4xl cursor-pointer hover:scale-110 transition duration-400 ease-in-out" />
                           )}
                        </button>
                     </CopyToClipboard>
                     <p className="flex items-center bg-white w-full rounded-none rounded-r-md sm:text-sm 2xl:text-2xl px-3 2xl:p-8 outline-none">
                        {input}
                     </p>
                  </div>
               </div>
               <div className="text-white flex z-10">
                  <p className="pr-1 2xl:text-[25px]">Copyright @ {new Date().getFullYear()}</p>
                  <p className="flex items-center 2xl:text-[25px]">
                     | Made with
                     <span className="px-2">
                        <BsHeartFill className="text-red-500 text-sm" />
                     </span>
                     by Razvan Fratila
                  </p>
               </div>
               <div className="absolute w-full h-full animated">
                  <p>
                     {[..."- contact me - let's get in touch "].map((letter, index) => {
                        return (
                           <span
                              key={index}
                              style={{
                                 transform: `rotate(${index * 10.5}deg)`,
                                 transformOrigin: innerWidth < 2000 ? "0 350px" : "0 700px",
                              }}
                              className={`absolute left-1/2 text-white stroke font-jam font-bold text-7xl 2xl:text-[160px] uppercase`}
                           >
                              {letter}
                           </span>
                        );
                     })}
                  </p>
               </div>
            </div>
         </motion.div>
         <div className="w-4/5 h-full mx-auto lg:hidden mt-56 pb-10">
            <h1 className="text-white text-3xl uppercase text-center font-jam font-semibold leading-tight">
               Contact me
               <br />
               let's get in touch
            </h1>
            <p
               className={`text-white block text-center lg:absolute lg:top-[270px] ${
                  copied ? "opacity-100" : "opacity-0"
               }`}
            >
               Copied to clipboard!
            </p>
            <div className="p-4 bg-transparent rounded-sm relative z-10">
               <div className="flex w-full lg:w-96">
                  <CopyToClipboard text={input} onCopy={() => setCopied(true)}>
                     <button className="flex items-center justify-center 2xl:w-40 px-6 py-4 rounded-l-md bg-purple-500 text-white text-sm">
                        {copied ? (
                           <BsCheck2 className="text-2xl cursor-pointer hover:scale-110 transition duration-400 ease-in-out" />
                        ) : (
                           <BsEnvelope className="text-2xl cursor-pointer hover:scale-110 transition duration-400 ease-in-out" />
                        )}
                     </button>
                  </CopyToClipboard>
                  <p className="flex items-center bg-white w-full rounded-none rounded-r-md sm:text-sm px-3 2xl:p-8 outline-none">
                     {input}
                  </p>
               </div>
            </div>
            <div className="text-white flex flex-col items-center z-10">
               <p className="pr-1">Copyright @ {new Date().getFullYear()}</p>
               <p className="flex items-center ">
                  Made with
                  <span className="px-2">
                     <BsHeartFill className="text-red-500 text-sm" />
                  </span>
                  by Razvan Fratila
               </p>
            </div>
         </div>
      </>
   );
}

export default Contact;
