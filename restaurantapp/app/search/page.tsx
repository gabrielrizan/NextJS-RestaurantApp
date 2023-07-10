import Header from "./components/Header";
import Searchsidebar from "./components/Searchsidebar";
import Restaurantcard from "./components/Restaurantcard";
import { PrismaClient } from "@prisma/client";

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

const fetchRestaurantsByCity = async (city: string | undefined) => {
  if (!city) return prisma.restaurant.findMany({ select });
  else
    return prisma.restaurant.findMany({
      where: {
        location: {
          name: {
            equals: city.toLowerCase(),
          },
        },
      },
      select,
    });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
}

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
}

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Searchsidebar cuisines={cuisines}
        locations={locations} />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <Restaurantcard restaurant ={restaurant} />
            ))
          ) : (
            <p> No restaurants found </p>
          )}
        </div>
      </div>
    </>
  );
}
