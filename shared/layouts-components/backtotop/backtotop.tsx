"use client"
import React, { useEffect, useRef, useState } from "react";

const Backtotop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTopButtonRef = useRef<HTMLDivElement | null>(null);

  const screenUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollToTopButtonRef.current) {
      scrollToTopButtonRef.current.style.display = isVisible ? "flex" : "none";
    }
  }, [isVisible]);

  return (
    <div 
      className="scrollToTop" 
      onClick={screenUp} 
      ref={scrollToTopButtonRef}
      style={{ display: isVisible ? 'flex' : 'none' }} // inline style for visibility
    >
      <span className="arrow">
        <i className="ti ti-arrow-narrow-up text-xl"></i>
      </span>
    </div>
  );
};

export default Backtotop;
