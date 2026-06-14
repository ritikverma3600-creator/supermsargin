import Navbar from "./LandingPage/Navbar";
import SellWithUsPage from "./SellWithUsPage";
import Footer from "./LandingPage/Footer";
import Copyright from "./LandingPage/Copyright";
import MobileNav from "./LandingPage/MobileNav";
function SellWithUs() {
  return (
<>
<div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile navbar - hidden on medium+ screens */}
      <div className="md:hidden">
        <MobileNav />
      </div>
<SellWithUsPage/>
<Footer/>
<Copyright/>
</>
  );
}

export default SellWithUs;