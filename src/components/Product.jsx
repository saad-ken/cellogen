// src/components/Product.jsx
import React from "react";
import sellimage from "../assets/p1.webp";

export default function Product({ referralUrl }) {
  return (
    <section className="py-28 max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start justify-between gap-12">
      {" "}
      {/* Emerald Transparent Background */}{" "}
      <div className="absolute inset-0 -z-10"></div>
      {/* Left - Product Info */}
      <div className="w-full md:w-5/12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          AL Primus Cellogen
        </h1>

        <div className="mt-2 text-lg text-gray-700 font-medium space-y-2">
          <p>
            <span className="text-2xl font-bold text-green-600">$68</span>{" "}
            <span className="ml-2 line-through text-gray-500">MRP: $75</span>
          </p>
          <p>
            DP: $68 &nbsp; | &nbsp; BV: 50 &nbsp; | &nbsp; SIZE: 20 sachets x
            2000mg
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">Description</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Unlock the power of rejuvenation with Al Primus Cellogen, a
            high-quality Cellogen supplement designed to support your overall
            well-being. Each sachet contains 2000mg of pure Cellogen, specially
            formulated for easy and effective absorption.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900">How to Use</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Take one sachet of Al Primus Cellogen and pour the powder under your
            tongue. Allow it to sit for 2 to 3 minutes to facilitate optimal
            absorption. Follow it with a sufficient amount of water for
            hydration.
          </p>
        </div>

        <a
          href={referralUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Get Started
        </a>
      </div>
      {/* Right - Product Image Container (Stretchable) */}
      <div className="w-full md:w-7/12 h-[28rem] flex justify-center items-center bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={sellimage}
          alt="AL Primus Cellogen"
          className="h-full w-auto object-contain"
        />
      </div>
    </section>
  );
}
