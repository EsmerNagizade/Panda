import React from 'react'
import Img from "../images/39_thumb.jpg"
import { FaCalendarAlt } from "react-icons/fa";
const NewsSectionbottom = () => {
  return (
    <div className='new_section_bottom'>
      <p><FaCalendarAlt /> 2024-07-14</p>
      <img src={Img} alt="" />
      <p>2 dekabr tarixində "Uğurun əldə edilməsi və Motivasiya " adlı seminarımız baş tutmuşdur.</p>
    </div>
  )
}

export default NewsSectionbottom
