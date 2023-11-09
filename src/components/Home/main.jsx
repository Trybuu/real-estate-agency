import './main.css'
import React from 'react'

import Search from '../Search/main'

const Home = () => {
  return (
    <main className="home">
      <section className="home-desc">
        <span>REAL ESTATE</span>
        <h1>Haven - Your Real Estate Oasis</h1>
        <p>
          Step into own real estate oasis, where discovering the perfect home is
          made easy and comfortable with advanced filtering, reliable data and a
          personalized approach.
        </p>
      </section>
      <Search />
      <div></div>
    </main>
  )
}

export default Home
