import Link from 'next/link'
import React from 'react'
import { RestaurantCardType } from '../page'
import Price from './Price'
import { PrismaClient } from '@prisma/client'
import Stars from './Stars'

interface Props {
  restaurant : RestaurantCardType
}

  const prisma = new PrismaClient();
  
  const fetchReviews = async (restaurant_id : number) => {
    const reviews = await prisma.review.findMany({
      where: {
        restaurant_id,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        text: true,
        rating: true,
      },
    })
    return reviews
  }

const Restaurantcard = ({restaurant}:Props) => {
  
  const reviews = fetchReviews(restaurant.id);
  return (
    <Link href={`/restaurant/${restaurant.slug}`}>
              <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
                <img
                  src={restaurant.main_image}
                  alt=""
                  className="w-full h-36"
                />
                <div className="p-1">
                  <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
                  <div className="flex items-start">
                    <Stars reviews={restaurant.reviews} />
                    <p className="ml-2">{restaurant.reviews.length} review{restaurant.reviews.length === 1 ? "" : "s" }</p>
                  </div>
                  <div className="flex text-reg font-light capitalize">
                    <p className=" mr-3">{restaurant.cuisine.name}</p>
                    <Price price={restaurant.price} />
                    <p>{restaurant.location.name}</p>
                  </div>
                  <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
                </div>
              </div>
            </Link>
  )
}

export default Restaurantcard