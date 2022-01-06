import Image from "next/image";
import logo from "../public/images/logo-white.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

function Navigation({ toggleMenu, setToggleMenu }) {
   return (
      <>
         <AnimatePresence>
            {toggleMenu && (
               <motion.div
                  initial={{ x: "-100%" }}
                  exit={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
                  className="fixed inset-0 w-full h-screen bg-red-400 z-[9999]"
               >
                  <div className="flex items-center justify-between p-10">
                     <div
                        onClick={() => {
                           scrollTo(0, 0);
                           setToggleMenu(false);
                        }}
                        className="w-36 h-8 cursor-pointer"
                     >
                        <Image src={logo} alt="logo image" priority />
                     </div>
                     <div onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer space-y-2 translate-y-1">
                        <div className="h-[3px] w-8 bg-white rounded transform rotate-45"></div>
                        <div className="h-[3px] w-8 bg-white rounded transform -rotate-45 translate-y-[-11px]"></div>
                     </div>
                  </div>
                  <ul className="mt-36 ml-20 md:ml-36 lg:ml-52 space-y-3 lg:overflow-hidden">
                     <li className="cursor-pointer">
                        <a href="#work" onClick={() => setToggleMenu(false)}>
                           <motion.div
                              initial={{ x: -50 }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
                              className="flex items-center space-x-1 relative"
                           >
                              <HiArrowNarrowRight className="text-3xl md:text-5xl text-white" />
                              <span className="text-xl md:text-6xl uppercase font-expanded font-semibold text-white overflow-hidden">
                                 work
                              </span>
                           </motion.div>
                        </a>
                     </li>
                     <li className="cursor-pointer">
                        <a
                           href="https://projects.razvanfratila.ro/"
                           target="_blank"
                           // onClick={() => setToggleMenu(false)}
                        >
                           <motion.div
                              initial={{ x: -50 }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
                              className="flex items-center space-x-1"
                           >
                              <span>
                                 <HiArrowNarrowRight className="text-3xl md:text-5xl text-white" />
                              </span>
                              <span className="text-xl md:text-6xl uppercase font-expanded font-semibold text-white">
                                 all projects
                              </span>
                           </motion.div>
                        </a>
                     </li>
                     <li className="cursor-pointer">
                        <a href="#about" onClick={() => setToggleMenu(false)}>
                           <motion.div
                              initial={{ x: -50 }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
                              className="flex items-center space-x-1"
                           >
                              <span>
                                 <HiArrowNarrowRight className="text-3xl md:text-5xl text-white" />
                              </span>
                              <span className="text-xl md:text-6xl uppercase font-expanded font-semibold text-white">
                                 about
                              </span>
                           </motion.div>
                        </a>
                     </li>
                     <li className="cursor-pointer">
                        <a href="#contact" onClick={() => setToggleMenu(false)}>
                           <motion.div
                              initial={{ x: -50 }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
                              className="flex items-center space-x-1"
                           >
                              <span>
                                 <HiArrowNarrowRight className="text-3xl md:text-5xl text-white" />
                              </span>
                              <span className="text-xl md:text-6xl uppercase font-expanded font-semibold text-white">
                                 contact
                              </span>
                           </motion.div>
                        </a>
                     </li>
                  </ul>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}

export default Navigation;
