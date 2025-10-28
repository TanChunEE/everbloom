import React from "react";

const NavBtn = ({ children, hoverText = "Explore", active = false }) => {
  return (
    <a
      href="#"
      className={`group relative inline-block px-5 py-2 rounded-md text-sm font-semibold uppercase tracking-wider 
      overflow-hidden transition-all duration-500
      ${active
        ? "text-zinc-900 dark:text-zinc-100"
        : "text-zinc-600 dark:text-zinc-400"}
      hover:-translate-y-[3px]`}
      style={{ perspective: "800px" }}
    >
      {/* Highlight drawing effect */}
      <span
        className="absolute left-0 top-1/2 w-full h-[40%] -translate-y-1/2 
        bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400
        opacity-0 scale-x-0 origin-left 
        rounded-md blur-[1px]
        transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
        group-hover:opacity-60 group-hover:scale-x-100"
      ></span>

      {/* Text flipping */}
      <span className="relative block transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
        <span
          className="block backface-hidden relative z-10"
          style={{ transform: "translateZ(12px)" }}
        >
          {children}
        </span>
        <span
          className="inset-0 flex items-center justify-center backface-hidden relative z-10
          text-zinc-900 dark:text-zinc-100"
          style={{ transform: "rotateX(-90deg) translateZ(12px)" }}
        >
          {hoverText}
        </span>
      </span>

      {/* Underline hand-drawn style */}
      <span
        className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-0 h-[2px] 
        bg-gradient-to-r from-pink-400 to-blue-400 
        rounded-full transition-all duration-500 group-hover:w-4/5"
      ></span>
    </a>
  );
};

export default NavBtn;
