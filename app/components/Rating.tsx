import React from "react";
import Image from "next/image";
interface RatingProps {
  rating: number;
}

const Rating = ({ rating = 0 }: RatingProps) => {
  const stars = Math.floor(rating || 0);
  return (
    <div className="rating flex items-center justify-center">
      <div className="rating-stars flex items-center justify-center">
        {Array.from({ length: stars }).map((_, index) => (
          <Image
            key={index}
            src="/icons/star.svg"
            alt="star"
            width={16}
            height={16}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
