import { BsEnvelope, BsHeartFill } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Contact() {
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
            className="w-full min-h-screen hidden md:flex items-center justify-center lg:mt-[80vh]"
            id="contact"
         >
            <div className="overflow-hidden sticky top-0 w-[700px] h-[700px] p-20 rounded-full flex items-center justify-center flex-col">
               <form action="#" method="POST">
                  <div className="p-4 bg-transparent rounded-sm relative z-10">
                     <div className="flex w-full lg:w-96">
                        <span className="inline-flex items-center px-6 py-4 rounded-l-md ring-1 ring-r-0 ring-gray-400 bg-purple-500 text-white text-sm">
                           <BsEnvelope className="text-2xl cursor-pointer hover:scale-110 transition duration-400 ease-in-out" />
                        </span>
                        <input
                           type="email"
                           className="focus:ring-purple-500 focus:ring-2 flex-1 block w-full rounded-none rounded-r-md sm:text-sm ring-1 ring-gray-400 px-3 outline-none"
                           placeholder="Your email"
                        />
                     </div>
                  </div>
               </form>
               <div className="text-white flex z-10">
                  <p className="pr-1">Copyright @ {new Date().getFullYear()}</p>
                  <p className="flex items-center ">
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
                                 transformOrigin: "0 350px",
                              }}
                              className={`absolute left-1/2 text-white stroke font-jam font-bold text-7xl uppercase`}
                           >
                              {letter}
                           </span>
                        );
                     })}
                  </p>
               </div>
            </div>
         </motion.div>
         <div className="w-full h-full md:hidden mt-56 pb-10">
            <h1 className="text-white text-3xl uppercase px-10 text-center font-jam font-semibold leading-tight">
               Contact me
               <br />
               let's get in touch
            </h1>
            <form action="#" method="POST">
               <div className="p-4 bg-transparent rounded-sm relative z-10">
                  <div className="flex w-full lg:w-96">
                     <span className="inline-flex items-center px-6 py-4 rounded-l-md ring-1 ring-r-0 ring-gray-400 bg-purple-500 text-white text-sm">
                        <BsEnvelope className="text-2xl cursor-pointer hover:scale-110 transition duration-400 ease-in-out" />
                     </span>
                     <input
                        type="email"
                        className="focus:ring-purple-500 focus:ring-2 flex-1 block w-full rounded-none rounded-r-md sm:text-sm ring-1 ring-gray-400 px-3 outline-none"
                        placeholder="Your email"
                     />
                  </div>
               </div>
            </form>
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
