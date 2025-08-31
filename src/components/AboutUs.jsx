import doc from "../assets/doc.webp";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            AL Primus’s Cellogen
          </h2>
          <p className="text-gray-600 mb-6">
            At <span className="font-semibold">ALprimus </span>CELLOGEN is a
            blend of synergistic ingredients that work in harmony to facilitate
            optimal cell renewal, repair damaged tissues, and promote overall
            wellness and vitality, making it a comprehensive solution for skin
            rejuvenation and health.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={doc}
            alt="About us"
            className="rounded-xl shadow-lg w-full max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
