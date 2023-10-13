import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
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
        {/* Intro Section - Needs to be adjusted for desktop */}
        <div className="intro-section flex flex-col items-center justify-between bg-gray-dark md:flex-row">
          <div className="intro-image flex p-8 bg-red w-screen justify-center md:w-2/5 md:justify-end">
            <img className="rounded-3xl md:-mr-36" src="/assets/EP-Mart-Cafe.jpg" alt="Photograph of the inside of the cafe in Eastern Petroleum" />
          </div>
          <div className="intro-description p-8 md:w-3/5 md:ml-36">
            <Text 
              type="h1" 
              text={"Quality That Keeps \n You Coming Back!"}  
            />
            <Text 
              type="p" 
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
            />
            <div className="call-to-actions flex flex-col items-center justify-between pt-4 md:flex-row md:justify-start">
              <Button text="What Makes Our Coffee So So Good?" link="/cafe" backgroundColor="bg-red" extraClasses="sm:mr-8"/>
              <Button text="Coffee Rewards" link="/rewards" backgroundColor="bg-red" extraClasses="sm:mr-8" />
            </div>
          </div>

        </div>

        {/* Call to Action Section - WIP Make a component? - Needs to be adjusted for desktop */}
        <div className="call-to-action-section flex flex-col items-center justify-between">
          <img 
            src="/assets/EP-Mart-Mobile.png"
            alt="Picture of an EPMart from the outside"
            className="md:hidden w-screen"
          />
          <img 
            src="/assets/EP-Mart-1440x490px.jpg"
            alt="Picture of an EPMart from the outside"
            className="hidden md:block w-screen"
          />
        </div>

        {/* Rewards Section - Needs to be adjusted for desktop */}
        <div className="rewards-section flex flex-col items-center justify-between bg-gray-dark md:flex-row">
           <div className="rewards-image flex p-8 bg-blue-dark w-screen md:w-2/5 md:justify-end">
            <img className="rounded-3xl md:-mr-36" src="/assets/Gas.jpg" alt="Photograph of somebody pumping gas at an Eastern Petroleum" />
          </div>
          <div className="rewards-description p-8 md:w-3/5 md:ml-36">
            <Text 
              type="h1" 
              text={"Reward Yourself At The \n Pump Everyday!"}
            />
            <img
              src="/assets/Sheel Exxon Mobil Layout.svg"
              alt="Shell & Exxon Mobil Logo Lockup"
              className="w-96 py-6"
            />
            <Text 
              type="p"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
              />
            <div className="call-to-actions flex flex-col items-center justify-between pt-4 sm:flex-row">
              <Button text="Fuel Rewards" link="/rewards" backgroundColor="bg-blue-dark" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
