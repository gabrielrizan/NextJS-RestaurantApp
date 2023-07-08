import Restaurantnavbar from "../components/Restaurantnavbar";

import Menurest from "../components/Menurest";

export default function Menu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <Restaurantnavbar />
        <Menurest />
      </div>
    </>
  );
}
