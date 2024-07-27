import React from 'react'
import HeaderCard from './HeaderCard'
import ImgSlide1 from "../images/checklist (4).2a4526ddd14ea3bb7ddd.png"
import ImgSlide2 from "../images/registered (1).818f49dc69409b44da7a.png"
import ImgSlide3 from "../images/online-course (1).3dc303b2fbf69c476cbb.png"
let arr=[
  {
id:1,
name:"İmtahan nəticələri",
img:ImgSlide1
  },
  {
    id:1,
    name: "Kursa online qeydiyyat",
    img:ImgSlide2
  },
  {
    id:3,
    name: "Online sınaq imtahanı",
    img:ImgSlide3
  }
]


const HeaderCards = () => {
  return (
    
    <div className='header_cards_container container'>
      {
      arr?.map((data,i)=>{
 return( <HeaderCard data={data} key={i}/>)
})
}

    </div>
  )
}

export default HeaderCards