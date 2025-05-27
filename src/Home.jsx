import React from 'react'
import AdrianNav from './components/Nav'
import 'remixicon/fonts/remixicon.css';
import Hero from './components/Hero';
import HeroCard from './components/HeroCard';
import Card from './components/Card';
import NewArrival from './components/NewArrival';
import Portfolio from './components/Portfolio';
import BestSeller from './components/BestSeller';
import Bottom from './components/Bottom';
import Fotter from './components/Fotter';
import Copyright from './components/Copyright';
const Home = () => {
  return (
    <>
      <header>
        <nav>
          <AdrianNav/>  
        </nav>
      </header>
      <main>
        <section>
        <Hero/>
        </section>
        <section>
          <Card/>
        </section>
         <section>
          <NewArrival/>
        </section>
        <section>
          <Portfolio/>
        </section>
        <section>
          <BestSeller/>
        </section>
        <section>
          <Bottom/>
        </section>
        <section>
          <Fotter/>
        </section>
        {/* <footer>
          <Copyright/>
        </footer> */}
      </main>
    </>
  )
}

export default Home