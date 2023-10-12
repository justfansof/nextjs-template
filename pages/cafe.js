import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import Consumable from "@components/Consumable";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>EPMart Convenience Stores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* Cafe Intro Section - Needs to be adjusted for desktop */}
        <div className="cafe-intro-section bg-gray-dark flex flex-col pb-8 mt-16 items-center justify-between">
          <div className="intro-image -mt-16">
            <img src="/assets/Cafe-Header.png" alt="Photograph of various cafe items available at EPMart, included a hot dog, an Arctic Blast, and a hamburger" />
          </div>
          <div className="cafe-intro-description p-8">
            <h1 className="text-xl font-black text-center">Hot, Fast, Fresh Food Morning, Noon & Night</h1>
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus.</p>
          </div>
          <Button text="Ep Café Menu" link="" backgroundColor="bg-red" />
        </div>

        {/* Food Section - WIP Make a component? - Needs to be adjusted for desktop */}
        <div className="food-menu-section flex flex-col">
          <div className="consumable-section w-screen flex flex-col">
          <div className="consumable-row items-center justify-center flex flex-row">
              <Consumable src="/assets/EP-Cafe-Biscuit.png" alt="Photo of a Breakfast Sandwich" title="Breakfast"/>
              <Consumable src="/assets/EP-Cafe-Sub.png" alt="Photo of a Sandwich/Sub" title="Sandwiches"/>
            </div>
            <div className="consumable-row items-center justify-center flex flex-row">
              <Consumable src="/assets/EP-Cafe-Wrap.png" alt="Photo of a food wrap" title="Wraps"/>
              <Consumable src="/assets/EP-Cafe-Taco.png" alt="Photo of a set of tacos" title="Mexican"/>
            </div>
            <div className="consumable-row items-center justify-center flex flex-row">
              <Consumable src="/assets/EP-Cafe-Salad.png" alt="Photo of a salad in a bowl" title="Salad"/>
              <Consumable src="/assets/EP-Cafe-Cookie.png" alt="Photo of a stack of cookies" title="Treats"/>
            </div>
          </div>
        </div>

        {/* Rewards Section - Needs to be adjusted for desktop */}
        <div className="cafe-reward-section bg-gray-dark flex flex-col pb-8 mt-16 items-center justify-between">
          <div className="reward-intro-image -mt-16">
            <img src="/assets/Coffee-Beans-Cup-Card.png" alt="Photograph of various cafe items available at EPMart, included a hot dog, an Arctic Blast, and a hamburger" />
          </div>
          <div className="cafe-reward-description p-8">
            <h1 className="text-xl font-black text-center">EP Café Coffee, Fresh Brew with Every Sip.</h1>
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus.</p>
            <h1 className="text-xl font-black text-center">Every 6th Cup is Free</h1>
          </div>
        </div>

        
        {/* Beverage Section - WIP Make a component? - Needs to be adjusted for desktop */}
        <div className="beverage-menu-section flex flex-col">
          <div className="consumable-section w-screen flex flex-col">
            <div className="consumable-row items-center justify-center flex flex-row">
              <Consumable src="/assets/CoffeeProductPlaceholder.png" alt="Photo of a Fresh Brew" title="Fresh Brew" />
              <Consumable src="/assets/CoffeeProductPlaceholder.png" alt="Photo of a Latte" title="Latte" />
            </div>
            <div className="consumable-row items-center justify-center flex flex-row">
              <Consumable src="/assets/CoffeeProductPlaceholder.png" alt="Photo of a Cold Brew" title="Cold Brew" />
              <Consumable src="/assets/EP-Cafe-Frappe.png" alt="Photo of a Frappé" title="Frappé" />
            </div>
            <div className="consumable-row items-center justify-center flex flex-row">
              <Consumable src="/assets/CoffeeProductPlaceholder.png" alt="Photo of a Cappuccino" title="Cappuccino" />
              <Consumable src="/assets/CoffeeProductPlaceholder.png" alt="Photo of a " title="Drink Title" />
            </div>
          </div>
        </div>

        {/* Which Wich Sandwich Section - Needs to be adjusted for desktop */}
        <div className="whichwich-intro-section bg-gray-dark flex flex-col pb-8 mb-8 mt-16 items-center justify-between">
          <div className="whichwich -mt-16">
            <img src="/assets/Wicked.png" alt="Photograph of a Which Wich Sandwich" />
          </div>
          <div className="cafe-intro-description p-8">
            <h1 className="text-xl font-black text-center">Superior menu. <br/> All-time favorites.</h1>
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ipsum lorem. Vivamus quis ullamcorper tellus, et rhoncus augue. Donec sit amet odio gravida, congue ex et, pellentesque libero. Mauris ac scelerisque dolor. Vivamus sed odio ac metus ornare ornare. Nullam pellentesque augue vel elit tempus ultricies. Ut id purus purus.</p>
          </div>
          <Button text="Which Wich Menu" link="" backgroundColor="bg-red" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
