import { useState } from 'react'



import Navbar from './LandingPage/Navbar'
import Body from './LandingPage/Body'
import Highlights from './LandingPage/Highlights'
import Categories from './LandingPage/Categories'
import Banner from './LandingPage/Banner'
import LiveDeals from './LandingPage/LiveDeals'
import CtaBanner from './LandingPage/CtaBannner'
import Features from './LandingPage/Features'
import JoinBanner from './LandingPage/JoinBanner'
import Testimonials from './LandingPage/Testinomials'
import BottomCta from './LandingPage/BottomCta'
import Footer from './LandingPage/Footer'
import Copyright from './LandingPage/Copyright'
import CategoryBar from './LandingPage/CategoryBar'
function LandingPage() {

  return (
 <><Navbar/>
 <CategoryBar/>
 <Body/>
 <Highlights/>
 <Categories/>
 <Banner/>
 <LiveDeals/>
 <CtaBanner/>
 <Features/>
 <JoinBanner/>
 <Testimonials/>
 <BottomCta/>
 <Footer/>
 <Copyright/>
 </>
  )
}

export default LandingPage
