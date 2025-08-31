import { useState } from "react";
import { X } from "lucide-react"; // icon for closing modal

export default function Lifestyle() {
  const [showVideo, setShowVideo] = useState(false);
  const PlayIcon = "https://www.svgrepo.com/show/421070/play-video-youtube.svg";

  return (
    <section className="relative py-20 px-6 bg-emerald-600/20 overflow-hidden">
      {/* Fruity translucent blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-lime-400/40 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-28 h-28 bg-yellow-300/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-16 w-32 h-32 bg-pink-400/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-400/40 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Main Image Container */}
        <div className="relative inline-block">
          <img
            src="https://plus.unsplash.com/premium_photo-1688598498264-51323f3c9a35?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lifestyle"
            className="rounded-xl shadow-lg w-full max-w-lg mx-auto"
          />

          {/* Overlay Text */}
          <h2 className="absolute inset-0 flex items-center justify-center text-emerald-300 text-2xl md:text-3xl font-bold bg-black/20 rounded-xl">
            Imagine Yourself in Better Life
          </h2>

          {/* Play Button */}
          <button
            onClick={() => setShowVideo(true)}
            className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            <img src={PlayIcon} alt="Play" className="w-6 h-6" />
          </button>
        </div>

        {/* Text Below Image */}
        <div className="mt-8">
          <p className="text-xl text-emerald-950 font-medium">
            It’s time to start your journey
          </p>
          <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
            Get in Touch with ALprimus.com
          </button>
        </div>
      </div>
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-3xl">
            {/* Responsive Wrapper */}
            <div className="relative pt-[56.25%]">
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                src="https://www.youtube.com/embed/5Sq-Z7gL1AQ?si=pq-ovvSaQ0Km4qiY"
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
