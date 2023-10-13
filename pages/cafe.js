import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import Consumable from "@components/Consumable";
import Text from '@components/Text';

export default function Cafe() {
  return (
    <div className="container">
      <Head>
        <title>Cafe | EPMart Convenience Stores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* Cafe Intro Section - Needs to be adjusted for desktop */}
        <div className="cafe-intro-section bg-gray-dark flex flex-col pb-8 mt-16 items-center justify-between md:flex-row">
          <div className="intro-image -mt-16 md:flex-1 md:order-2">
            <img 
              src="/assets/Cafe-Header.png" 
              alt="Photograph of various cafe items available at EPMart, included a hot dog, an Arctic Blast, and a hamburger" 
              className="md:hidden"
            />
            <img 
              src="/assets/EP-Mart-Food-Beverage-Desktop.png" 
              alt="Photograph of various cafe items available at EPMart, included a hot dog, an Arctic Blast, and a hamburger" 
              className="hidden md:block" 
            />
          </div>
          <div className="cafe-intro-description p-8  md:flex-1 md:order-1">
            <img 
              src="/assets/EP Cafe Logo.svg"
              alt="EP Cafe Logo"
              className="hidden md:block w-96"
            /> 
            <Text 
              type="h1" 
              text={"Hot, Fast, Fresh Food \n Morning, Noon & Night"}  
            />
            <Text 
              type="p" 
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
            />
          </div>
          <Button text="Ep Café Menu" link="" backgroundColor="bg-red" extraClasses="md:hidden" />
        </div>

        {/* Food Section - WIP Make a component? - Needs to be adjusted for desktop */}
        <div className="food-menu-section flex flex-col md:justify-center items-center my-8">
          <div className="consumable-section w-screen flex flex-col md:flex-row md:justify-center md:items-center">
            <div className="consumable-row items-center justify-center flex flex-row flex-1">
              <Consumable src="/assets/EP-Cafe-Biscuit.png" alt="Photo of a Breakfast Sandwich" title="Breakfast"/>
              <Consumable src="/assets/EP-Cafe-Sub.png" alt="Photo of a Sandwich/Sub" title="Sandwiches"/>
            </div>
            <div className="consumable-row items-center justify-center flex flex-row flex-1">
              <Consumable src="/assets/EP-Cafe-Wrap.png" alt="Photo of a food wrap" title="Wraps"/>
              <Consumable src="/assets/EP-Cafe-Taco.png" alt="Photo of a set of tacos" title="Mexican"/>
            </div>
            <div className="consumable-row items-center justify-center flex flex-row flex-1">
              <Consumable src="/assets/EP-Cafe-Salad.png" alt="Photo of a salad in a bowl" title="Salad"/>
              <Consumable src="/assets/EP-Cafe-Cookie.png" alt="Photo of a stack of cookies" title="Treats"/>
            </div>
          </div>
          <Button text="Ep Café Menu" link="" backgroundColor="bg-red" extraClasses="hidden md:block" />
        </div>

        {/* Rewards Section - Needs to be adjusted for desktop */}
        <div className="cafe-reward-section bg-gray-dark flex flex-col pb-8 mt-16 items-center justify-between md:flex-row md:pb-0">
          <div className="reward-intro-image -mt-16 md:flex-1 md:order-2 md:mt-0 md:-mb-32">
            <img src="/assets/Coffee-Beans-Cup-Card.png" alt="Photograph of various cafe items available at EPMart, included a hot dog, an Arctic Blast, and a hamburger" />
          </div>
          <div className="cafe-reward-description p-8 md:flex-1 md:order-1">
            <Text 
              type="h1" 
              text={"EP Café Coffee, Fresh Brew with Every Sip."}  
            />
            <Text 
              type="p" 
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
            />
            <Text 
              type="h1" 
              text={"Every 6th Cup is Free"}  
            />
            <Text 
              type="p" 
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue."
            />
          </div>
        </div>

        
        {/* Beverage Section - WIP Make a component? - Needs to be adjusted for desktop */}
        <div className="beverage-menu-section flex flex-col md:justify-center items-center my-8 md:flex-row">
          <div className="beverage-intro-image hidden -mt-32 md:flex-1 md:block">
            <img src="/assets/Bean-to-Cup-Coffee-Machine.png" alt="Photograph of various cafe items available at EPMart, included a hot dog, an Arctic Blast, and a hamburger" />
          </div>
          <div className="consumable-section w-screen flex flex-col md:justify-center md:items-center md:flex-1">
            <div className="consumable-row items-center justify-center flex flex-row flex-1">
              <Consumable src="/assets/CoffeeProductPlaceholder.png" alt="Photo of a Fresh Brew" title="Fresh Brew" />
              <Consumable src="/assets/CoffeeProductPlaceholder.png" alt="Photo of a Latte" title="Latte" />
            </div>
            <div className="consumable-row items-center justify-center flex flex-row flex-1">
              <Consumable src="/assets/CoffeeProductPlaceholder.png" alt="Photo of a Cold Brew" title="Cold Brew" />
              <Consumable src="/assets/EP-Cafe-Frappe.png" alt="Photo of a Frappé" title="Frappé" />
            </div>
            <div className="consumable-row items-center justify-center flex flex-row flex-1">
              <Consumable src="/assets/CoffeeProductPlaceholder.png" alt="Photo of a Cappuccino" title="Cappuccino" />
              <Consumable src="/assets/CoffeeProductPlaceholder.png" alt="Photo of a " title="Drink Title" />
            </div>
          </div>
        </div>

        {/* Which Wich Sandwich Section - Needs to be adjusted for desktop */}
        <div className="whichwich-intro-section bg-gray-dark flex flex-col pb-8 mb-8 mt-16 items-center justify-between md:flex-row md:mb-0">
          <div className="whichwich -mt-16 md:my-6">
            <img src="/assets/Wicked.png" alt="Photograph of a Which Wich Sandwich" />
          </div>
          <div className="cafe-intro-description p-8">
            <img 
              src="/assets/WhichWichLogo.png"
              alt="Which Wich Logo"
              className="hidden md:block"
            />
            <Text 
              type="h1" 
              text={"Superior menu. \n All-time favorites."}  
            />
            <Text 
              type="p" 
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus."
            />
            <Button text="Which Wich Menu" link="" backgroundColor="bg-red" />
          </div> 
        </div>


        {/* Food Icon Row */}
        <div className="food-icon-section flex flex-row p-16">
          <img 
            src="/assets/Food Icons.png"
            alt="Outline Icons of Various types of foods and drinks"
            className="hidden md:block w-screen"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
