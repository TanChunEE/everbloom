import { useInView, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const HeroImage = ({ src }) => {
  return (
    <div className="lg:absolute overflow-clip right-0 lg:w-1/2 mt-10 lg:mt-0">
      <div 
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover"
        }}
        className="aspect-video saturate-120 lg:h-[250px] w-full bg-zinc-200 flex items-center justify-center text-zinc-500"
      >
        {src ? "" : <span className="text-lg">Hero Image Placeholder</span>}
      </div>
    </div>
  )
}

const slideUp = {
  initial: {
    y: "100%"
  },
  open: (i) => ({
    y: "0%",
    transition: {duration: 0.5, delay: 0.01 * i}
  }),
  closed: {
    y: "100%",
    transition: {duration: 0.5}
  }
}

const Hero = () => {
  const subtext = "Choosing the right furniture for your home online will add elegance and functionality to your space. We offer a curated collection of fine furnishing.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section className="max-w-7xl mt-30 mx-auto p-4 sm:p-8 mb-20">
      <div className="flex relative flex-col lg:flex-row lg:space-x-12 overflow-clip">
        {/* Left */}
        <div className="lg:w-1/2">
          <h1 className="text-7xl sm:text-8xl font-extrabold leading-none mb-6">
            {/* Large Title */}
            <span className="block impact lg:text-[250px]">FLORA</span>
            <span className="block impact lg:text-[250px] tracking-tight lg:mt-10">BLOSSOMING</span>
          </h1>

          {/* SubText */}
          <div ref={description} className="text-base lg:text-lg text-zinc-600 max-w-md lg:w-full mb-8 py-2">
            {
              subtext.split(" ").map( (word, index) => {
                return (
                  <span key={index} className="relative overflow-hidden inline-flex text-justify mr-1">
                    <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                      {word}
                    </motion.span>
                  </span>
                )
              })
            }
          </div>

          {/* CTA */}
          <button 
            className="group flex items-center space-x-3 bg-zinc-900 text-white text-sm 
            font-semibold py-4 px-6 rounded-full transition-all duration-150 hover:bg-transparent 
            border border-zinc-900 hover:text-zinc-900 ease-in lg:absolute lg:text-lg lg:py-5 lg:px-10 
            bottom-10 right-10 hover:animate-wiggle cursor-pointer"
          >
            <span>Shop Now</span>
            <ArrowRight size={20} className="group-hover:rotate-360 -rotate-35 transition-all duration-500 ease-in" />
          </button>
        </div>

        {/* Right */}
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
