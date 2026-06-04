
import Categories from "./LandingPage/Categories";
import BuyAgain from "./BuyAgain";
import LiveDeals from "./LandingPage/LiveDeals";
import PromoGrid from "./PromoGrid";
import Footer from "./LandingPage/Footer";
import Copyright from "./LandingPage/Copyright";
function Home() {
  return (
<>
<div className="bg-white mx-10 lg:mx-10">
<Categories/>
<BuyAgain/>
<LiveDeals/>
<PromoGrid/>
<Footer/>
<Copyright/>
</div>
</>
  );
}

export default Home;