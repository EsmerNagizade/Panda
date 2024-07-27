import React from 'react'
import HeaderHeadContainer from '../components/HeaderHeadContainer'
import HeaderMainContainer from '../components/HeaderMainContainer'
import NewsContainer from '../components/NewsContainer'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <header>
            <HeaderHeadContainer/>
            <HeaderMainContainer/>
        </header>
        <main>
          <section>
            <NewsContainer/>
          </section>
        </main>
        <footer>
          <Footer/> 
        </footer>
    </div>
  )
}

export default Home