import React from 'react'
import { Link } from 'react-router-dom'

const SectionHeader = ({sectionH2,sectionlink}) => {
  return (
    <div className='section_header'>
      <h2>{sectionH2}</h2>
    <Link to={""}>{sectionlink}</Link>


    </div>
  )
}

export default SectionHeader

