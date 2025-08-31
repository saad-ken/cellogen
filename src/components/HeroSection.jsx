import { useEffect, useRef } from "react";
import gsap from "gsap";
import AutoCarousel from "./AutoCarousel.jsx";

export default function HeroSection() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1 }
    ).fromTo(
      imageRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5" // overlaps a bit with text animation
    );
  }, []);

  return (
    <section
      className=" min-h-svh bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1678032127948-bc3aa0cc2ce6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay for subtle darkening so text is readable */}
      <div className="absolute inset-0 bg-black/40"></div>

      <section className="pt-24 min-h-screen flex flex-col md:flex-row items-center justify-between relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Left Content */}
        <div
          ref={textRef}
          className="flex-1 text-center md:text-left relative z-10 px-4 md:px-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Empower Your Cells with{" "}
            <span className="text-green-400">Cellogen</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white max-w-lg mx-auto md:mx-0">
            Advanced stem cell science redefining health and vitality.
          </p>

          <div className="mt-6">
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-xl shadow-md hover:bg-green-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Content (Image Carousel) */}
        <div
          ref={imageRef}
          className="flex-1 mt-10 md:mt-0 flex justify-center relative z-10"
        >
          <AutoCarousel />
        </div>
      </section>
    </section>
  );
}
