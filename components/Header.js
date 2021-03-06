import Image from "next/image";
import logo from "../public/images/logo-white.png";
import { motion } from "framer-motion";

function Header({ toggleMenu, setToggleMenu }) {
   return (
      <header className="sticky top-0 left-0 bg-transparent z-[99] overflow-hidden mix-blend-difference">
         <div className="flex items-center justify-between p-10">
            <motion.div
               className="w-36 h-8 2xl:w-72 2xl:h-28 cursor-pointer flex items-center"
               layoutId="logo-id"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { ease: "easeInOut" } }}
               onClick={() => scrollTo(0, 0)}
            >
               <Image src={logo} alt="logo image" priority />
            </motion.div>
            <div className="cursor-pointer space-y-2" onClick={() => setToggleMenu(!toggleMenu)}>
               <div className="h-[3px] w-8 2xl:w-14 2xl:h-[6px] bg-white rounded"></div>
               <div className="h-[3px] w-8 2xl:w-14 2xl:h-[6px] bg-white rounded"></div>
            </div>
         </div>
      </header>
   );
}

export default Header;
