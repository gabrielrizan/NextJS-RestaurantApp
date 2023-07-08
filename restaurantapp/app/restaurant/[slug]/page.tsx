
import Restaurantnavbar from "./components/Restaurantnavbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reservation from "./components/Reservation";

export default function RestaurantDetails() {
  return (
    <>
     
        <div className="bg-white w-[70%] rounded p-3 shadow">
       
          <Restaurantnavbar />
        
          <div className="mt-4 border-b pb-6">
            <h1 className="font-bold text-6xl">Milesstone Grill</h1>
          </div>
      
          <Title />
      
          <Rating />
        
          <Description />
        
          <Images />
    

        </div>
       <Reservation/>
     
    </>
  );
}
