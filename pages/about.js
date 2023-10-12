import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";

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
          <div className="intro-image">
            <img src="/assets/ShellEPMart.png" alt="Black & White photograph of the outside of Eastern Petroleum" />
          </div>

          <Timeline position="alternate" className="py-12">
            <TimelineItem>
              <TimelineOppositeContent>
                <img 
                  src="../assets/Retro-Gas-Pump.jpg"
                  alt="Gas Pump Image"
                  className="rounded-3xl"
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-red" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h1 className="text-xxl font-black">1960</h1>
                <h4 className="text-base font-black">Humble Beginnings</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero.</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                xxxxx
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-red" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h1 className="text-xxl font-black">1980</h1>
                <h4 className="text-base font-black">Growth in the Carolina's</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero.</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <img
                  src="../assets/EP-Mart-Penny-the-Penguin.jpg"
                  alt="Penny the Penguin"
                  className="rounded-3xl"
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-red" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h1 className="text-xxl font-black">1990</h1>
                <h4 className="text-base font-black">Penny the Penguin</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero.</p>
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
                <TimelineDot className="bg-red" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h1 className="text-xxl font-black">2000</h1>
                <h4 className="text-base font-black">Tanker Very Much</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero.</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                xxxxx
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-red" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h1 className="text-xxl font-black">2022</h1>
                <h4 className="text-base font-black">Lookin' Good</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero.</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

      </main>
      <Footer />
    </div>
  );
}
