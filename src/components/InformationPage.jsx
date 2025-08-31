// src/components/InformationPage.jsx
import React from "react";
import doc2 from "../assets/doc2.png";

export default function InformationPage() {
  return (
    <section className="max-w-7xl mx-auto pt-24 px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Image */}
      <div className="flex justify-center">
        <img
          src={doc2}
          alt="Information"
          className="w-[28rem] max-w-full rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About AL Primus
        </h2>
        <h3 className="mt-2 text-lg md:text-xl text-green-600 font-semibold">
          AL Primus, headquartered in Malaysia, is a leading company at the
          forefront of innovative stem cell technology.
        </h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our focus is on providing high-quality Cellogen products designed to
          nourish the body, restore vitality, and support overall health. By
          blending advanced science with nature, we create innovative solutions
          that empower you to feel your best, inside and out. We are dedicated
          to bringing you premium, effective products that promote long-term
          well-being and help you achieve a life of balance and vitality.
        </p>
      </div>
    </section>
  );
}
