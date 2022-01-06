import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

function Project({ src, title, desc, link }) {
   return (
      <>
         <div className="lg:w-[500px] lg:h-[550px] flex justify-center bg-[#D3B5E5] p-5 mb-10">
            <Image src={src} alt={title} objectFit="contain" />
         </div>
         <div className="lg:w-[420px]">
            <h2 className="text-[#EFF1DB] font-bold font-jam text-4xl lg:text-6xl uppercase pb-10">{title}</h2>
            <p className="text-[#EFF1DB] font-medium font-jam lg:text-xl">{desc}</p>
            <a href={link} target="_blank" className="inline-flex items-center pb-[2px] px-[2px] border-b-2 mt-8 group">
               <p className="font-semibold font-jam transition duration-200 ease-in text-xl text-[#EFF1DB]">
                  View project
               </p>
               <HiArrowNarrowRight className="text-[#EFF1DB] text-2xl ml-2 transition duration-200 ease-in group-hover:translate-x-1" />
            </a>
         </div>
      </>
   );
}

export default Project;
