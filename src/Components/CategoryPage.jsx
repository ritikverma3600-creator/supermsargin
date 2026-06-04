import { useState } from 'react'



import Navbar from './LandingPage/Navbar'
import CategoryItems from './CategoryPage/CategoryItems'
import Footer from './LandingPage/Footer'
import Copyright from './LandingPage/Copyright'
function CategoryPage() {

  return (
 <><Navbar/>
 <CategoryItems/>
 <Footer/>
 <Copyright/>
 </>
  )
}

export default CategoryPage
