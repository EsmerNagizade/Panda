import React from 'react'
import OthersHeader from '../components/OthersHeader'
import NEWSection from '../components/NEWSection'
import Footer from '../components/Footer'

const NewsDetails = () => {
  return (
<div>
<header className='other_header'>
    <OthersHeader/>
</header>
<main>
    <section>
        <NEWSection/>
    </section>
</main>
<footer>
    <Footer/>
</footer>
</div>
  )
}

export default NewsDetails
