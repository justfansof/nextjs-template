export default function Header() {
  return (
    <>
      <header className="bg-white">
        <nav className="mobile-header mx-auto flex flex-col items-center justify-between md:hidden" aria-label="Global Header">

          {/* Pre Header - Only shows on mobile? */}
          <div className="pre-header flex flex-row items-center justify-center w-screen bg-blue-dark py-2">
            <a href="/careers" className="flex flex-row">
              <img src="/assets/Job-White.svg" alt="Career Opportunities Icon" width="15" />
              <span className="text-white text-sm px-2">Career Opportunities</span>
            </a>
          </div>

          {/* Main Header - Needs to be adjusted for desktop */}
          <div className="main-header flex flex-row items-center justify-between p-4 bg-gray-light w-screen">
            <div className="header-left">
              <img src="/assets/Candy Box Menu.svg" alt="Mobile Navigation Menu" width="30" />
            </div>
            <div className="header-center">
              <a href="/">
                <img src="/assets/EPCLogoBlue200H.png" alt="Eastern Petroleum Company Logo" width="150" />
              </a>
            </div>
            <div className="header-right">
              <a href="/locations">
                <img src="/assets/Location Pin.svg" alt="Map Pin Icon" width="30" />
              </a>
            </div>
          </div>

          {/* Post Header - This needs to be integrated into main header on desktop */}
          <div className="post-header flex items-center justify-center w-screen">
            <p className="text-blue-light italic text-sm px-2 py-4"> The hometown corner store, where we know you by name. </p>
          </div>

        </nav>
        <nav className="desktop-header mx-auto flex flex-col items-center justify-between hidden md:block" aria-label="Global Header">

        {/* Desktop Header */}

        {/* Main Header - Needs to be adjusted for desktop */}
        <div className="main-header flex flex-row items-center justify-between p-4 bg-gray-light ">
          <div className="header-left">
            <a href="/">
              <img src="/assets/EPCLogoBlue200H.png" alt="Eastern Petroleum Company Logo" width="150" />
            </a>
          </div>
          <div className="header-center flex justfiy-center items-center">
            <p className="text-blue-light italic text-sm py-4"> The hometown corner store, where we know you by name. 
            </p>
          </div>
          <div className="header-right flex flex-row w-96 justify-evenly">
            <a href="/careers" className="flex flex-row justify-center items-center">
              <img src="/assets/Job.svg" alt="Career Opportunities Icon" width="15" />
              <span className="text-sm px-2">Career Opportunities</span>
            </a>
            <a href="/locations" className="flex flex-row justify-center items-center">
              <img src="/assets/Location Pin.svg" alt="Map Pin Icon" width="30" />
              <span>find a store</span>
            </a>
            <img src="/assets/Candy Box Menu.svg" alt="Mobile Navigation Menu" width="30" />
          </div>
        </div>

        </nav>
      </header>
    </>
  );
}
