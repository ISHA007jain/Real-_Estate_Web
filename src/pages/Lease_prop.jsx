import { useState, useEffect, useRef } from "react";
import LeasePropertyData from "../api/Lease_Properties.json";
import { LeaseCard } from "../components/UI/LeaseCard";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export const Lease_prop = () => {
  const [cardsToShow, setCardsToShow] = useState(1);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Large screens
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Medium screens
      } else {
        setCardsToShow(1); // Small screens
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const scrollAmount = () => {
    return scrollContainerRef.current
      ? scrollContainerRef.current.clientWidth / cardsToShow
      : 0;
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount(),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount(),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900">Properties</h2>
      <span className="text-gray-400 text-lg font-semibold">For Lease</span>

      {/* Navigation Buttons */}
      <div className="flex justify-end items-center my-4">
        <button
          onClick={scrollLeft}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          aria-label="prev project"
        >
          <FaArrowCircleLeft size={30} className="text-gray-600 hover:text-gray-800" />
        </button>
        <button
          onClick={scrollRight}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition ml-2"
          aria-label="next project"
        >
          <FaArrowCircleRight size={30} className="text-gray-600 hover:text-gray-800" />
        </button>
      </div>

      {/* Scrollable Cards Container */}
      <div className="overflow-hidden relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scroll-smooth hide-scrollbar"
        >
          {LeasePropertyData.map((property) => (
            <div key={property.id} className="flex-shrink-0 w-[320px] transform transition duration-300 hover:scale-105">
              <LeaseCard data={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
