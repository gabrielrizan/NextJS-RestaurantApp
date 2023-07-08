import { Inter } from "@next/font/google";
import Header from "./components/Header";
import Restaurantcard from "./components/Restaurantcard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   
        <main>
          <Header />

          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <Restaurantcard />
          </div>
        </main>
     
  );
}
