import { useState } from 'react'



import Navbar from './LandingPage/Navbar'
import CategoryItems from './CategoryPage/CategoryItems'
import Footer from './LandingPage/Footer'
import Copyright from './LandingPage/Copyright'
import MobileNav from './LandingPage/MobileNav'
function CategoryPage() {

  return (
 <> <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile navbar - hidden on medium+ screens */}
      <div className="md:hidden">
        <MobileNav />
      </div>

 <CategoryItems/>
 <Footer/>
 <Copyright/>
 </>
  )
}

export default CategoryPage
