"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { smHeroVideo, heroVideo } from "../utils";
import Link from "next/link";
import Model3D from "../components/Model3D";
import Features from "../components/Features";

const Page: React.FC = () => {
  const [videoSource, setVideoSource] = useState<string>(
    typeof window !== "undefined" && window.innerWidth < 760
      ? smHeroVideo
      : heroVideo
  );

  const handleVideoSourceSet = () => {
    if (window.innerWidth < 760) {
      setVideoSource(smHeroVideo);
    } else {
      setVideoSource(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSourceSet);
    return () => {
      window.removeEventListener("resize", handleVideoSourceSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
  }, []);

  useGSAP(() => {
    gsap.to("#buyIPhone", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <>
      <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">
            iPhone 15 Pro
          </p>
          <div className="md:w-10/12 w-9/12">
            <video
              className="pointer-event-none"
              autoPlay
              muted
              playsInline={true}
              key={videoSource}
            >
              <source src={videoSource} type="video/mp4" />
            </video>
          </div>
        </div>

        <div
          id="buyIPhone"
          className="flex flex-col items-center opacity-0
      translate-y-20"
        >
          <Link href={"#"} className="btn">
            Buy
          </Link>
          <p className="font-normal text-xl text-white">
            From 210 AED/Month or 4299 AED
          </p>
        </div>
      </section>
      <Model3D />
      <Features />
    </>
  );
};

export default Page;
