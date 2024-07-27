import React from 'react'
import FooterFirst from './FooterFirst'
import FooterSecond from './FooterSecond'
import FooterThird from './FooterThird'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_bg container'>
            
      <FooterFirst/>
      <FooterSecond/>
      <FooterThird/>
        </div>
    </div>
  )
}

export default Footer
