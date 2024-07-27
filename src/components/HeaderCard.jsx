import React from 'react'
const HeaderCard = ({data}) => {

  return (

  
    <div className='header_card'>
      <div className='header_card_img'>
      <img src={data?.img} alt=""/>
      </div>

<p>{data?.name}</p>
    </div>


  )
}
                
export default HeaderCard