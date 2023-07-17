import Header from "./components/Header";
import Searchsidebar from "./components/Searchsidebar";
import Restaurantcard from "./components/Restaurantcard";
import { PRICE, PrismaClient } from "@prisma/client";

interface searchParams { city?: string, cuisine?:string, price?:PRICE};

const prisma = new PrismaClient();
const select = {
  id: true,
  main_image: true,
  name: true,
  price: true,
  cuisine: true,
  location: true,
  slug: true,
};

const fetchRestaurantsByCity = async (searchParams : searchParams) => {
  const where : any = {};
  if (searchParams.city) {
   const location = {
      name : {
        equals: searchParams.city?.toLowerCase()
      }
   }
   where.location = location
};
  if (searchParams.cuisine) {
    const cuisine = {
      name : {
        equals: searchParams.cuisine?.toLowerCase()
      }
    }
    where.cuisine = cuisine
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price
    }
    where.price = price
  }

  return prisma.restaurant.findMany({
    where,
    select,
  });
}

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: searchParams;
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Searchsidebar cuisines={cuisines} locations={locations} searchParams ={searchParams}/>
        <div className="w-5/6 ml-10">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <Restaurantcard restaurant={restaurant} />
            ))
          ) : (
            <p> No restaurants found </p>
          )}
        </div>
      </div>
    </>
  );
}
