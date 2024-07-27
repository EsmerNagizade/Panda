import React from 'react'
import HeaderMainFirstContainer from './HeaderMainFirstContainer'
import SliderHeaderContainer from './SliderHeaderContainer'
import HeaderCards from './HeaderCards'

const HeaderMainContainer = () => {
  return (
    <div className='header_main_container '>
    
 <HeaderMainFirstContainer/>
     <SliderHeaderContainer/>
  <HeaderCards/>
     </div>

  )
}

export default HeaderMainContainer