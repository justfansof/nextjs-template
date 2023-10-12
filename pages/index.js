import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";

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
        <div className="intro-section flex flex-col pb-8 items-center justify-between">
          <div className="intro-image p-8 bg-red">
            <img className="rounded-3xl" src="/assets/EP-Mart-Cafe.jpg" alt="Photograph of the inside of the cafe in Eastern Petroleum" />
          </div>
          <div className="intro-description p-8">
            <h1 className="text-xl font-black text-center">Quality That Keeps <br/> You Coming Back!</h1>
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus.</p>
          </div>
          <Button text="What Makes Our Coffee So So Good?" link="" backgroundColor="bg-red" />
          <Button text="Coffee Rewards" link="" backgroundColor="bg-red"  />
        </div>

        {/* Call to Action Section - WIP Make a component? - Needs to be adjusted for desktop */}
        <div className="call-to-action-section flex flex-col items-center justify-between">

        </div>

        {/* Rewards Section - Needs to be adjusted for desktop */}
        <div className="rewards-section flex flex-col pb-8 items-center justify-between">
           <div className="rewards-image p-8 bg-blue-dark">
            <img className="rounded-3xl" src="/assets/Gas.jpg" alt="Photograph of somebody pumping gas at an Eastern Petroleum" />
          </div>
          <div className="rewards-description p-8">
            <h1 className="text-xl font-black text-center">Reward Yourself At The <br/> Pump Everyday!</h1>
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus.</p>
          </div>
          <Button text="Fuel Rewards" link="" backgroundColor="bg-blue-dark" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
