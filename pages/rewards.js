import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import Spacer from "@components/Spacer";
import Text from '@components/Text';

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
          <div className="rewards-intro-image w-screen">
            <img 
              src="/assets/travel-rewards-image.png" 
              alt="Photograph of two people driving to EPMart" 
              className="md:hidden"
            />
            <img 
              src="/assets/travel-rewards-image-main.png" 
              alt="Photograph of two people driving to EPMart" 
              className="hidden md:block w-screen"
            />
          </div>
          <div className="intro-description p-8">
            <Text 
              type="h1" 
              text={"Never Pay Full Price \n For Fuel Again"}  
              extraClasses="md:text-center"
            />
            <Spacer backgroundColor="bg-red" />
            <Text 
              type="p" 
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
            />
          </div>
          <div className="intro-rewards-section flex flex-col items-center justify-between md:flex-row">
            <div className="rewards-price-point-image flex md:flex-1 md:justify-end">
              <img className="w-96" src="/assets/GasRewardsPricePoint.svg" alt="Photograph of the gas rewards price point promotional" />
            </div>
            <div className="intro-rewards-section-internal flex flex-col items-center justify-between md:flex-1 md:items-start">
              <div className="rewards-price-point-image-secondary">
                <img src="/assets/ShellxFuelRewards.png" alt="Shell & Fuel Rewards Logo Lockup" />
              </div>
              <div className="intro-description-secondary p-8">
                <Text 
                  type="h1" 
                  text={"Keep Earning, Keep \n Saving at the Pump."}  
                />
                <Spacer backgroundColor="bg-red" />
                <Text 
                  type="p" 
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
                />
              </div>
              <Button text="Shell Rewards Apply Now" link="" backgroundColor="bg-blue-dark"  />
            </div>
          </div>
        </div>

        {/* Rewards Section - Needs to be adjusted for desktop */}
        <div className="rewards-section flex flex-col items-center justify-between bg-gray-dark md:flex-row">
           <div className="rewards-image flex p-8 bg-blue-dark w-screen md:w-2/5 md:justify-end">
            <img className="rounded-3xl md:-mr-36" src="/assets/Gas.jpg" alt="Photograph of somebody pumping gas at an Eastern Petroleum" />
          </div>
          <div className="rewards-main-container flex flex-col items-center justify-between p-8 md:w-3/5 md:ml-36 md:items-start">
            <div className="rewards-image pt-8">
              <img src="/assets/Exxon Mobil Rewards Logo.jpg" alt="Exxon Mobil Rewards Logo Lockup" />
            </div>
            <div className="rewards-description">
              <Text 
                type="h1" 
                text={"Earn Twice as much, \n 6¢ per gallon in points."}  
              />
              <Text 
                type="p" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
              />
            </div>
            <Button text="Exxon Mobil Rewards Apply Now" link="" backgroundColor="bg-blue-dark" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
