import Image from "next/image";
import about1 from "../public/images/about1.jpg";
import about2 from "../public/images/about2.jpg";
import about3 from "../public/images/about3.jpg";
import about4 from "../public/images/about4.jpg";
import about5 from "../public/images/about5.jpg";
import { useEffect } from "react";

function About() {
   const callback = (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show");
         }
      });
   };

   const options = {
      threshold: 0.6,
   };

   useEffect(() => {
      const images = document.querySelectorAll(".images");
      const observer = new IntersectionObserver(callback, options);

      images.forEach((image) => {
         observer.observe(image);
      });

      return () => {
         images.forEach((image) => {
            observer.unobserve(image);
         });
      };
   }, [callback]);

   return (
      <section>
         <div className="lg:h-screen"></div>
         <div className="relative min-h-screen" id="about">
            <p className="relative text-xl sm:text-2xl md:text-6xl lg:text-8xl 2xl:text-9xl font-jam font-semibold uppercase text-white text-justify px-10 pb-10 tracking-[0.5rem] z-10">
               I started learning frontend development in <span className="stroke">2019</span>. Until February 2020, I
               <span className="stroke ml-10">learned on my own</span>, and in March of the same year I started the{" "}
               <span className="stroke">Web Developer</span> course organized by Azimut Vision, which I finished in
               September. During the course I learned the basics of{" "}
               <span className="stroke">HTML5, CSS3, Javascript and WordPress</span>. Since September I learned from
               online courses <span className="stroke">React.js</span>. Check my projects page to see some apps made
               with
               <span className="stroke ml-10">React.js, Next.js</span>, Redux, Firebase,{" "}
               <span className="stroke">Tailwind CSS</span>, Stripe, Next Auth and others.
            </p>
            <div className="images absolute top-[10%] left-[12%] grayscale -translate-x-1/2 opacity-0 transition duration-1000">
               <Image src={about1} alt="picture of me" width={300} height={350} />
            </div>
            <div className="images hidden md:block absolute top-[23%] right-[17%] grayscale translate-x-1/3 opacity-0 transition duration-1000">
               <Image src={about2} alt="picture of me" width={300} height={400} />
            </div>
            <div className="images absolute top-[55%] left-[12%] lg:top-[47%] lg:left-[25%] grayscale translate-y-1/2 opacity-0 transition duration-1000">
               <Image src={about3} alt="picture of me" width={300} height={380} />
            </div>
            <div className="images hidden lg:block absolute bottom-[20%] right-[10%] grayscale -translate-x-1/2 opacity-0 transition duration-1000">
               <Image src={about4} alt="picture of me" width={330} height={350} />
            </div>
            <div className="images hidden lg:block absolute bottom-[5%] left-[10%] grayscale translate-x-1/2 opacity-0 transition duration-1000">
               <Image src={about5} alt="picture of me" width={420} height={350} />
            </div>
         </div>
      </section>
   );
}

export default About;
