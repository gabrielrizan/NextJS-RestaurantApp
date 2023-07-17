import Restaurantnavbar from "./components/Restaurantnavbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reservation from "./components/Reservation";
import Reviews from "./components/Reviews";
import { PrismaClient, Review } from "@prisma/client";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
    reviews: Review[];
}

const fetchRestaurantBySlug = async (slug: string) : Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
    }
  });
  if (!restaurant) {
    throw new Error("No restaurant found");
  }
  return restaurant;
};

export default async function RestaurantDetails({params}: {params: {slug: string}}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <Restaurantnavbar slug ={restaurant.slug}/>
        <Title name={restaurant.name} />
        <Rating />
        <Description description ={restaurant.description}/>
        <Images images={restaurant.images}/>
        <Reviews reviews={restaurant.reviews}/>
      </div>
      <div className="w-[27%] relative text-reg">
        <Reservation />
      </div>
    </>
  );
}
