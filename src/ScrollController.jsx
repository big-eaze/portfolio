// ScrollProvider.jsx
import { createContext, useContext, useRef } from "react";
import { useScroll } from "framer-motion";

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <ScrollContext.Provider value={{ scrollYProgress }}>
      <div ref={ref}>{children}</div>
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
