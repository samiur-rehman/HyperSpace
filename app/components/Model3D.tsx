"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, FC, Suspense } from "react";
import { yellowImg } from "../utils";
import { Canvas } from "@react-three/fiber";
import { models, sizes } from "../constants";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import IPhone from "./IPhone";
import Lights from "./Lights";
import Loader from "./Loader";

const Model3D: FC = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControl = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="w-full py-5 sm:px-10 px-5 flex justify-center items-center common-padding">
      <div className="md:w-10/12 w-10/12 flex flex-col justify-center screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div
            ref={cameraControl}
            className="w-full h-[60vh] md:h-[70vh] overflow-hidden relative"
          >
            <div className="sticky top-0 h-[70vh] cursor-pointer">
              <Canvas id="view1">
                <Lights />
                <OrbitControls
                  rotateSpeed={0.4}
                  enableZoom={false}
                  enablePan={false}
                />
                <ambientLight intensity={0.3} />
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />

                <Suspense fallback={<Loader />}>
                  <IPhone
                    scale={size === "small" ? [15, 15, 15] : [17, 17, 17]}
                    item={model}
                    size={size}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5 text-white">
              {model.title}
            </p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>

              <div className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model3D;
