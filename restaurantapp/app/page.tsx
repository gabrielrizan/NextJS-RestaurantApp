import { Inter } from "@next/font/google";
import Header from "./components/Header";
import Restaurantcard from "./components/Restaurantcard";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
      <main>
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          <Restaurantcard />
        </div>
      </main>

    </>
  );
}
 // 7oy0oXshh4Vrpawk