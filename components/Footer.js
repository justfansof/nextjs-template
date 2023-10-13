import Text from '@components/Text'

export default function Footer() {
  return (
    <>
      <footer>
        {/* Main Footer - Needs to be adjusted for desktop */}
        <div className="main-footer flex flex-col items-center p-4 bg-yellow">
          <div className="footer-navigation flex flex-col items-center justify-center md:flex-row">
            <div className="footer-nav-first-row flex flex-row">
              <a href="/about">
                <Text 
                  type="p"
                  text="About Us"
                  extraClasses="px-8"
                />
              </a>
              <a href="/rewards">
                <Text 
                  type="p"
                  text="Rewards"
                  extraClasses="px-8"
                />
              </a>
              <a href="/locations">
                <Text 
                  type="p"
                  text="Locations"
                  extraClasses="px-8"
                />
              </a>
            </div>
            <div className="footer-nav-second-row flex flex-row">
              <a href="/careers">
                <Text 
                  type="p"
                  text="Careers"
                  extraClasses="px-8"
                />
              </a>
              <a href="/contact">
                <Text 
                  type="p"
                  text="Contact Us"
                  extraClasses="px-8"
                />
              </a>
            </div>
          </div>
          <div className="footer-logo justify-center md:hidden">
            <img src="/assets/EPCLogoBlue200H.png" alt="Eastern Petroleum Company Logo" width="150" />
          </div>
          <div className="footer-social flex flex-row justify-evenly py-4 md:justify-center">
            <a href="" className="mx-4 md:mx-16">
              <img src="/assets/Facebook Icon.svg" alt="Facebook Logo" width="35" />
            </a>
            <a href="" className="mx-4 md:mx-16">
              <img src="/assets/Instagram Icon.svg" alt="Instagram Logo" width="35" />
            </a>
            <a href="" className="mx-4 md:mx-16">
              <img src="/assets/Twitter Icon.svg" alt="Twitter Logo" width="35" />
            </a>
          </div>
        </div>
        {/* Privacy Policy & T&C Footer - Needs to be adjusted for desktop */}
        <div className="post-footer flex flex-row justify-evenly py-2 bg-gray-dark md:justify-center">
          <a href="" className="md:mx-16">Privacy Policy</a>
          <a href="" className="md:mx-16">Terms & Conditions</a>
        </div>
        {/* All Rights Reserved - Needs to be adjusted for desktop */}
        <div className="legal-footer flex flex-row justify-center items-center py-6">
          <span>© EP Mart 2023 All Rights Reserved</span>
        </div>
      </footer>
    </>
  )
}
