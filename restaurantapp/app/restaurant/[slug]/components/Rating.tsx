import { Review } from "@prisma/client";
import React from "react";
import { CalculateReviewAverage } from "../../../../utils/CalculateReviewAverage";
const Rating = ({reviews}: {reviews: Review[]}) => {
  const rating = CalculateReviewAverage(reviews);

  return (
    <>
      {" "}
      <div className="flex items-end">
        <div className="ratings mt-2 flex items-center">
          <p>*****</p>
          <p className="text-reg ml-3">{rating}</p>
        </div>
        <div>
          <p className="text-reg ml-4">{reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}</p>
        </div>
      </div>
     
    </>
  );
};

export default Rating;
