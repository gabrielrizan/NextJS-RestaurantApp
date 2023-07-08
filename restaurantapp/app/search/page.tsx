
import Header from "./components/Header";
import Searchsidebar from "./components/Searchsidebar";
import Restaurantcard from "./components/Restaurantcard";

export default function Search() {
  return (
    <>
      {/* HEADER */}
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <Searchsidebar />
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          <Restaurantcard />
        </div>
      </div>
    </>
  );
}
