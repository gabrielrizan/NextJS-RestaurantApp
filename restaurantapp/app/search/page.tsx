import Header from "./components/Header";
import Searchsidebar from "./components/Searchsidebar";
import Restaurantcard from "./components/Restaurantcard";

export default function Search() {
  return (
    <>
      {" "}
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Searchsidebar />
        <div className="w-5/6">
          <Restaurantcard />
        </div>
      </div>
    </>
  );
}
