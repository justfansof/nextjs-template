export default function Header() {
  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex flex-col items-center justify-between" aria-label="Global Header">

          {/* Pre Header - Only shows on mobile? */}
          <div className="pre-header flex flex-row items-center justify-center w-screen bg-blue-dark py-2">
            <img src="/assets/Job-White.svg" alt="Career Opportunities Icon" width="15" />
            <span className="text-white text-sm px-2">Career Opportunities</span>
          </div>

          {/* Main Header - Needs to be adjusted for desktop */}
          <div className="main-header flex flex-row items-center justify-between p-4 bg-gray-light w-screen">
            <div className="header-left">
              <img src="/assets/Candy Box Menu.svg" alt="Mobile Navigation Menu" width="30" />
            </div>
            <div className="header-center">
              <img src="/assets/EPCLogoBlue200H.png" alt="Eastern Petroleum Company Logo" width="150" />
            </div>
            <div className="header-right">
              <img src="/assets/Location Pin.svg" alt="Map Pin Icon" width="30" />
            </div>
          </div>

          {/* Post Header - This needs to be integrated into main header on desktop */}
          <div className="post-header flex items-center justify-center w-screen">
            <p className="text-blue-light italic text-sm px-2 py-4"> The hometown corner store, where we know you by name. </p>
          </div>

        </nav>
      </header>
    </>
  );
}
