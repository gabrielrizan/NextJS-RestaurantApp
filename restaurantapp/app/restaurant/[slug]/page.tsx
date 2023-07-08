import Restaurantnavbar from "./components/Restaurantnavbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reservation from "./components/Reservation";
import Reviews from "./components/Reviews";

export default function RestaurantDetails() {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <Restaurantnavbar />
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <Reservation />
      </div>
    </>
  );
}
