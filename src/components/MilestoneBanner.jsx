import React from "react";

export default function MilestoneBanner({ count = "50K workforce", message }) {
  return (
    <div className="mt-6">
      <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-sm p-6 text-center">
        <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          {count}
        </div>
        <p className="mt-2 text-gray-600">{message}</p>
      </div>
    </div>
  );
}
