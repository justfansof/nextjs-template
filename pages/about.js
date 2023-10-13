import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import Text from '@components/Text';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Us | EPMart Convenience Stores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* Timeline - Needs to be adjusted for desktop */}
        <div className="timeline flex flex-col pb-8 items-center justify-between">
          <div className="intro-image w-screen">
            <img 
              src="/assets/ShellEPMart.png" 
              alt="Black & White photograph of the outside of Eastern Petroleum"
              className="md:hidden"
            />
            <img 
              src="/assets/EPMartBWLarge.png" 
              alt="Black & White photograph of the outside of Eastern Petroleum"
              className="hidden md:block w-screen"
            />

          </div>

          <Timeline position="alternate" className="py-12">
            <TimelineItem>
              <TimelineOppositeContent className="justify-end md:flex">
                <img 
                  src="../assets/Retro-Gas-Pump.jpg"
                  alt="Gas Pump Image"
                  className="rounded-3xl"
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-red my-0 p-2" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Text 
                  type="h2" 
                  text={"1960"}  
                />
                <Text 
                  type="h5"
                  text="Humble Beginnings"
                />
                <Text 
                  type="p" 
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <img 
                  src="/assets/ShellEPMart-Square.png" 
                  alt="Black & White photograph of the outside of Eastern Petroleum"
                  className="rounded-3xl"
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-red my-0 p-2" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Text 
                  type="h2" 
                  text={"1980"}  
                />
                <Text 
                  type="h5"
                  text="Growth in the Carolina's"
                />                
                <Text 
                  type="p" 
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent className="justify-end md:flex">
                <img
                  src="../assets/EP-Mart-Penny-the-Penguin.jpg"
                  alt="Penny the Penguin"
                  className="rounded-3xl"
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-red my-0 p-2" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Text 
                  type="h2" 
                  text={"1990"}  
                />
                <Text 
                  type="h5"
                  text="Penny the Penguin"
                />
                <Text 
                  type="p" 
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <img
                  src="../assets/EP-Truck.jpg"
                  alt="Eastern Petroleum Truck"
                  className="rounded-3xl"
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-red my-0 p-2" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Text 
                  type="h2" 
                  text={"2000"}  
                />
                <Text 
                  type="h5"
                  text="Tanker Very Much"
                />
                <Text 
                  type="p" 
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent className="justify-end md:flex">
                <img 
                  src="/assets/EPMartOutsideBlack.png" 
                  alt="Photograph of the outside of EPMart"
                  className="rounded-3xl"
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-red my-0 p-2" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Text 
                  type="h2" 
                  text={"2022"}  
                />
                <Text 
                  type="h5"
                  text="Lookin' Good"
                />
                <Text 
                  type="p" 
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
                />
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

      </main>
      <Footer />
    </div>
  );
}
