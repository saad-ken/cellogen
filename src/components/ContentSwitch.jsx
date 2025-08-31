import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Ingredients({
  items = [],
  triggerStart = "top 80%",
  stagger = 0.12,
  popScale = 1.03,
  duration = 1,
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const itemEls = Array.from(root.querySelectorAll(".ingredient-item"));

    // If reduced motion, make items visible immediately and skip animations.
    if (prefersReduced) {
      itemEls.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    // Kill previous triggers
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Animate each item individually as it enters viewport
    itemEls.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 20,
          scale: 0.98,
          transformOrigin: "center center",
          willChange: "opacity, transform",
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: popScale,
          duration: Math.max(0.7, duration),
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: triggerStart,
            toggleActions: "play none none reverse",
          },
          delay: i * Math.max(0.2, stagger),
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [items, triggerStart, stagger, popScale, duration]);

  return (
    <div
      className="ingredients-component w-full max-w-6xl mx-auto px-4 py-12"
      ref={rootRef}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-8">
        Core Ingredients
      </h2>

      <section className="ingredients-list relative">
        {items.map((item) => {
          const { id, title, description, imageUrl, alt } = item;
          const imageAlt = alt || title || "";
          return (
            <article
              key={id}
              className="ingredient-item opacity-0 flex flex-col md:flex-row items-center gap-6 py-8 border-b last:border-b-0"
              aria-labelledby={`ingredient-${id}-title`}
            >
              <div className="ingredient-text md:w-7/12">
                <h2
                  id={`ingredient-${id}-title`}
                  className="text-2xl font-semibold text-gray-900 mb-2"
                >
                  {title}
                </h2>
                <p className="text-base text-gray-600">{description}</p>
              </div>

              <div className="ingredient-image md:w-5/12 w-full">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full object-cover rounded-md shadow-sm"
                    loading="lazy"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={imageAlt}
                    className="w-full bg-gray-100 rounded-md flex items-center justify-center text-gray-400"
                  >
                    {imageAlt || "Image"}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

Ingredients.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imageUrl: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  triggerStart: PropTypes.string,
  stagger: PropTypes.number,
  popScale: PropTypes.number,
  duration: PropTypes.number,
};
