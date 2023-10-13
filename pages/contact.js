import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import Spacer from "@components/Spacer";
import Text from '@components/Text';
import FeedbackForm from "@components/FeedbackForm"

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Contact Us | EPMart Convenience Stores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* Contact Section Intro Section - Needs to be adjusted for desktop */}
        <div className="contact-intro-section flex flex-col pb-8 items-center justify-between">
          <div className="contact-description p-8">
            <Text 
              type="h1" 
              text={"How may we help you?"}  
              extraClasses="md:text-center"
            />
            <Spacer backgroundColor="bg-red" />
            <FeedbackForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
