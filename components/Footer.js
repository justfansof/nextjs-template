export default function Footer() {
  return (
    <>
      <footer>
        {/* Main Footer - Needs to be adjusted for desktop */}
        <div className="main-footer flex flex-col items-center p-4 w-screen bg-yellow">
          <div className="footer-navigation">
            {/* Need to be linked */}

          </div>
          <div className="footer-logo justify-center">
            <img src="/assets/EPCLogoBlue200H.png" alt="Eastern Petroleum Company Logo" width="150" />
          </div>
          <div className="footer-social flex flex-row justify-evenly w-screen py-4">
            <a href="">
              <img src="/assets/Facebook Icon.svg" alt="Facebook Logo" width="35" />
            </a>
            <a href="">
              <img src="/assets/Instagram Icon.svg" alt="Instagram Logo" width="35" />
            </a>
            <a href="">
              <img src="/assets/Twitter Icon.svg" alt="Twitter Logo" width="35" />
            </a>
          </div>
        </div>
        {/* Privacy Policy & T&C Footer - Needs to be adjusted for desktop */}
        <div className="post-footer flex flex-row justify-evenly py-2 bg-gray-dark">
          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
        </div>
        {/* All Rights Reserved - Needs to be adjusted for desktop */}
        <div className="legal-footer flex flex-row justify-center items-center py-6">
          <span>© EP Mart 2023 All Rights Reserved</span>
        </div>
      </footer>
    </>
  )
}
