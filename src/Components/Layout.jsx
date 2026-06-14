
import Navbar from "./LandingPage/Navbar";
import DashboardNav from "./CategoryPage/DashboardNav";
import MobileNav from "./LandingPage/MobileNav";
function Layout({ children }) {
  return (
    <div>
<div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile navbar - hidden on medium+ screens */}
      <div className="md:hidden">
        <MobileNav />
      </div>
<div className="bg-[#eef2f7] pt-10">
<DashboardNav/>
      <div className="md:hidden">
        <MobileNav />
      </div>
      {children}  {/* only this part changes per page */}
      </div>

    </div>
  );
}
export default Layout;