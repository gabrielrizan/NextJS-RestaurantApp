import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import React from "react";

const prices = [
  { price: PRICE.CHEAP, label: "$" },
  { price: PRICE.REGULAR, label: "$$" },
  { price: PRICE.EXPENSIVE, label: "$$$" },
];

const Searchsidebar = ({
  cuisines,
  locations,
  searchParams,
}: {
  cuisines: Cuisine[];
  locations: Location[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((locations) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: locations.name,
              },
            }}
            className="font-light text-reg capitalize"
            key={locations.id}
          >
            {locations.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisines) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuisines.name,
              },
            }}
            className="font-light text-reg capitalize"
          >
            {cuisines.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map((price) => (
            <button className="border w-full text-reg font-light rounded-l p-2">
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price: price.price,
                },
              }}
              className="font-light text-reg capitalize"
            >
              {price.label}
            </Link>
          </button>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchsidebar;
