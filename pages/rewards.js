import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import Spacer from "@components/Spacer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>EPMart Convenience Stores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* Rewards Intro Section - Needs to be adjusted for desktop */}
        <div className="rewards-intro-section flex flex-col pb-8 items-center justify-between">
          <div className="rewards-intro-image">
            <img src="/assets/travel-rewards-image.png" alt="Photograph of two people driving to EPMart" />
          </div>
          <div className="intro-description p-8">
            <h1 className="text-xl font-black text-center">Never Pay Full Price <br/> For Fuel Again</h1>
            <Spacer backgroundColor="bg-red" />
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus.</p>
          </div>
          <div className="rewards-price-point-image">
            <img className="w-52" src="/assets/GasRewardsPricePoint.svg" alt="Photograph of the gas rewards price point promotional" />
          </div>
          <div className="rewards-price-point-image-secondary">
            <img src="/assets/ShellxFuelRewards.png" alt="Shell & Fuel Rewards Logo Lockup" />
          </div>
          <div className="intro-description-secondary p-8">
            <h1 className="text-xl font-black text-center">Keep Earning, Keep Saving at the Pump.</h1>
            <Spacer backgroundColor="bg-red" />
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus.</p>
          </div>
          <Button text="Shell Rewards Apply Now" link="" backgroundColor="bg-blue-dark"  />
        </div>

        {/* Rewards Section - Needs to be adjusted for desktop */}
        <div className="rewards-section flex flex-col bg-gray-dark  pb-8 items-center justify-between">
           <div className="rewards-image p-8 bg-blue-dark">
            <img className="rounded-3xl" src="/assets/Gas.jpg" alt="Photograph of somebody pumping gas at an Eastern Petroleum" />
          </div>
          <div className="rewards-image pt-8">
            <img src="/assets/Exxon Mobil Rewards Logo.jpg" alt="Exxon Mobil Rewards Logo Lockup" />
          </div>
          <div className="rewards-description p-8">
            <h1 className="text-xl font-black text-center">Earn Twice as much, <br/> 6¢ per gallon in points.</h1>
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus.</p>
          </div>
          <Button text="Exxon Mobil Rewards Apply Now" link="" backgroundColor="bg-blue-dark" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
