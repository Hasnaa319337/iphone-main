import { useGSAP } from "@gsap/react";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1, delay: 2 });
    // Add more animations as needed

    gsap.to("#cta", { opacity: 1, y: 0, duration: 1, delay: 2 });
  });
  return (
    <section className="w-full relative bg-black nav-height">
      <div className="w-full flex-col flex-center ">
        <p className="text-xl hero-title">iPhone 16 pro</p>
        {/* Add hero video component */}
        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4"></source>
          </video>
        </div>

        {/* Add hero CTA component */}
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p>From $199 per month or $999</p>
        </div>
        {/* Add hero social media icons */}
      </div>
    </section>
  );
};

export default Hero;
