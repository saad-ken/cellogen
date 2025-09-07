// src/components/AutoCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import productImg1 from "../assets/1.jpeg";
import productImg2 from "../assets/2.jpeg";
import productImg3 from "../assets/7.jpeg";
import productImg8 from "../assets/8.jpeg";
import productImg9 from "../assets/9.jpeg";
import productImg10 from "../assets/10.jpeg";
import productImg11 from "../assets/ma.jpeg";

const images = [
  productImg1,
  productImg2,
  productImg3,
  productImg8,
  productImg9,
  productImg10,
  productImg11,
];

export default function AutoCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  const currRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((idx) => {
        setPrev(idx);
        return (idx + 1) % images.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (prev === null) {
      gsap.set(currRef.current, { x: 0, opacity: 1 });
      return;
    }

    gsap.set(prevRef.current, {
      x: 0,
      opacity: 1,
      display: "block",
      zIndex: 1,
    });
    gsap.set(currRef.current, {
      x: "100%",
      opacity: 1,
      display: "block",
      zIndex: 2,
    });

    const tl = gsap.timeline();

    // old image slides out left
    tl.to(
      prevRef.current,
      { x: "-100%", duration: 0.6, ease: "power2.inOut" },
      0
    );

    // new image slides in from right
    tl.to(currRef.current, { x: "0%", duration: 0.6, ease: "power2.inOut" }, 0);

    tl.set(prevRef.current, { display: "none" });

    return () => tl.kill();
  }, [current, prev]);

  return (
    <div className="relative z-10 w-[360px] h-[521px] mb-4 overflow-hidden rounded-xl">
      {prev !== null && (
        <img
          ref={prevRef}
          src={images[prev]}
          alt={`slide-prev-${prev}`}
          className="absolute inset-0 w-full h-full object-contain  rounded-xl"
          style={{ display: "none" }}
        />
      )}
      <img
        ref={currRef}
        src={images[current]}
        alt={`slide-${current}`}
        className="absolute inset-0 w-full h-full object-contain  rounded-xl"
      />
    </div>
  );
}
