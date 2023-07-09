import { Cuisine, PRICE, Location } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Price from "../../components/Price";

interface Restaurant {
  id: number;
  main_image: string;
  name: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
}

const Restaurantcard = ({restaurant}:{restaurant :Restaurant}) => {
  return (
    <div className="border-b flex pb-5">
     
        <img
          src={restaurant.main_image}
          alt=""
          className="w-44 h-36 rounded"
        />
        <div className="pl-5">
          <h2 className="text-3xl">{restaurant.name}</h2>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2 text-sm">Awesome</p>
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <Price price={restaurant.price} />
              <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
              <p className="mr-4 capitalize">{restaurant.location.name}</p>
            </div>
          </div>
          <div className="text-red-600">
            {/* <a href="">View more information</a> */}
            {/*  this throws an console.error(); */}
             <Link href={`/restaurant/${restaurant.slug}`}>
              View more information
             </Link>
          </div>
        </div>
     
    </div>
  );
};

export default Restaurantcard;
