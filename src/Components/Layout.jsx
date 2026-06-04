
import Navbar from "./LandingPage/Navbar";
import DashboardNav from "./CategoryPage/DashboardNav";

function Layout({ children }) {
  return (
    <div>
<Navbar/>
<div className="bg-[#eef2f7] pt-10 pb-20">
<DashboardNav/>
      {children}  {/* only this part changes per page */}
      </div>

    </div>
  );
}
export default Layout;