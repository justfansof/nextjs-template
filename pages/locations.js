import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import Spacer from "@components/Spacer";

export default function Locations() {
  return (
    <div className="container">
      <Head>
        <title>Locations | EPMart Convenience Stores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* Locations - Needs to be adjusted for desktop */}
        <div className="locations flex flex-col pb-8 items-center justify-between">
          <div className="intro-image">
            <img className="" src="/assets/EP-Mart-Map.jpg" alt="Map of Eastern Petroleum Locations" />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
