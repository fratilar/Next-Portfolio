import Image from "next/image";
import logo from "../public/images/logo-white.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram, BsTwitter, BsPhone, BsMap } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
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
                  className="fixed inset-0 w-full h-screen bg-gradient-to-r from-emerald-500 via-indigo-500 to-pink-400 z-[9999]"
               >
                  <div className="flex items-center justify-between p-10">
                     <div
                        onClick={() => {
                           scrollTo(0, 0);
                           setToggleMenu(false);
                        }}
                        className="w-36 h-8 2xl:w-72 2xl:h-28 cursor-pointer flex items-center"
                     >
                        <Image src={logo} alt="logo image" priority />
                     </div>
                     <div onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer space-y-2 translate-y-1">
                        <div className="h-[3px] w-8 2xl:w-14 2xl:h-[6px] bg-white rounded transform rotate-45"></div>
                        <div className="h-[3px] w-8 2xl:w-14 2xl:h-[6px] bg-white rounded transform -rotate-45 translate-y-[-11px]"></div>
                     </div>
                  </div>
                  <ul className="mt-12 2xl:mt-40 ml-20 md:ml-36 lg:ml-52 space-y-3 lg:overflow-hidden">
                     <li className="cursor-pointer">
                        <a href="#work" onClick={() => setToggleMenu(false)}>
                           <motion.div
                              initial={{ x: -50 }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
                              className="flex items-center space-x-1 relative"
                           >
                              <HiArrowNarrowRight className="text-3xl md:text-5xl text-white" />
                              <span className="text-xl md:text-5xl xl:text-6xl 2xl:text-8xl uppercase font-expanded font-semibold text-white overflow-hidden">
                                 work
                              </span>
                           </motion.div>
                        </a>
                     </li>
                     <li className="cursor-pointer">
                        <a href="https://projects.razvanfratila.ro/" target="_blank">
                           <motion.div
                              initial={{ x: -50 }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
                              className="flex items-center space-x-1"
                           >
                              <span>
                                 <HiArrowNarrowRight className="text-3xl md:text-5xl text-white" />
                              </span>
                              <span className="text-xl md:text-5xl xl:text-6xl 2xl:text-8xl uppercase font-expanded font-semibold text-white">
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
                              <span className="text-xl md:text-5xl xl:text-6xl 2xl:text-8xl uppercase font-expanded font-semibold text-white">
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
                              <span className="text-xl md:text-5xl xl:text-6xl 2xl:text-8xl uppercase font-expanded font-semibold text-white">
                                 contact
                              </span>
                           </motion.div>
                        </a>
                     </li>
                  </ul>
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-jam text-white space-y-4 2xl:space-y-6 mt-20">
                     <p className="text-3xl 2xl:text-7xl font-bold">Get in touch</p>
                     <div className="flex items-center justify-center space-x-4 2xl:space-x-6">
                        <a href="https://www.facebook.com/razvan.fratila.1420" target="_blank">
                           <BsFacebook className="w-8 h-8 2xl:w-12 2xl:h-12" />
                        </a>
                        <a href="https://www.instagram.com/1razvanfratila/" target="_blank">
                           <BsInstagram className="w-8 h-8 2xl:w-12 2xl:h-12" />
                        </a>
                        <a href="https://github.com/fratilar" target="_blank">
                           <BsGithub className="w-8 h-8 2xl:w-12 2xl:h-12" />
                        </a>
                        <a href="https://www.linkedin.com/in/razvan-fratila/" target="_blank">
                           <BsLinkedin className="w-8 h-8 2xl:w-12 2xl:h-12" />
                        </a>
                        <a href="https://twitter.com/fratilar10" target="_blank">
                           <BsTwitter className="w-8 h-8 2xl:w-12 2xl:h-12" />
                        </a>
                     </div>
                     <div className="2xl:space-y-2">
                        <div className="flex items-center justify-center space-x-2 font-medium 2xl:text-3xl">
                           <BsMap />
                           <p className="w-full">Regele Ferdinand no.5, B1, ap.55, Selimbar, Sibiu, Romania</p>
                        </div>
                        <div className="flex items-center justify-center space-x-2 font-medium 2xl:text-3xl">
                           <BsPhone />
                           <p>(+40) 740 275 534</p>
                        </div>
                        <div className="flex items-center justify-center space-x-2 font-medium 2xl:text-3xl">
                           <IoMailOutline />
                           <p>fratila_razvan24@yahoo.com</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}

export default Navigation;
