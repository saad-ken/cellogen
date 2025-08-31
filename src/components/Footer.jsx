import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ALPrimus. All rights reserved.
      </div>
    </footer>
  );
}
