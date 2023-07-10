import Restaurantnavbar from "../components/Restaurantnavbar";
import Menurest from "../components/Menurest";
import { PrismaClient } from "@prisma/client";

export default async function Menu({ params }: { params: { slug: string } }) {

  const prisma = new PrismaClient();
  
  const fetchItems = async (slug: string) => {
    const restaurant =await prisma.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        items: true,
      },
    });

    if (!restaurant) {
      throw new Error("No restaurant found");
    }

    return restaurant.items;
  };

  const menu = await fetchItems(params.slug);
  
  

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <Restaurantnavbar slug={params.slug} />
        <Menurest menu ={menu} />
      </div>
    </>
  );
}
