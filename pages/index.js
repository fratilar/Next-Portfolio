import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Work from "../components/Work";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import About from "../components/About";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

export default function Home() {
   const [loading, setLoading] = useState(true);
   const [toggleMenu, setToggleMenu] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 5500);
   }, []);

   return (
      <div className="bg-[#202020]">
         <Head>
            <title>Fratila Razvan | Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
               {loading ? (
                  <motion.div key="loader">
                     <Loader />
                  </motion.div>
               ) : (
                  <>
                     <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                     <Banner />
                     <Work />
                     <About />
                     <Contact />
                     <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                  </>
               )}
            </AnimatePresence>
         </AnimateSharedLayout>
      </div>
   );
}
