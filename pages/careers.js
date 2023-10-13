import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import Spacer from "@components/Spacer";
import Text from '@components/Text';

export default function Careers() {
  return (
    <div className="container">
      <Head>
        <title>Careers | EPMart Convenience Stores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* Careers - Needs to be adjusted for desktop */}
        <div className="careers flex flex-col pb-8 items-center justify-between">
          <div className="intro-image">
            <img 
              src="/assets/Career-Hero-Image-Mobile.png" 
              alt="Multiple photographs of employees and customers inside of various Eastern Petroleum facilities" 
              className="w-screen md:hidden" 
            />
            <img 
              src="/assets/Career-Hero-Image.jpg" 
              alt="Multiple photographs of employees and customers inside of various Eastern Petroleum facilities" 
              className="w-screen hidden md:block" 
            />
          </div>
          <div className="careers-description-header pt-8">
            <Text 
              type="h1" 
              text={"Join the EP Mart family."}  
            />
            <Spacer backgroundColor="bg-red" />
          </div>

          <div className="careers-description-body px-8">
            <Text 
              type="p" 
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
