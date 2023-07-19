import { Review } from "@prisma/client";

export const CalculateReviewAverage = (reviews: Review[]) => {
    if (!reviews.length) return 0;
    const total = reviews.reduce((sum, review) => {
        return sum + review.rating;
    }, 0);
    return total / reviews.length;
}