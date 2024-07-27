import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
const FooterThird = () => {
  return (
    <div className='footer_third'>

        <p>Sosial media hesabları</p>
      <ul>
      <li>
<Link to={""}><IoSearch />
</Link>
</li>
<li>
<Link to={""}><FaFacebookF/></Link>
</li> 
<li>
<Link to={""}><FaInstagram /></Link>
</li>
<li>
<Link to={""}><FaLinkedinIn /></Link>
</li> 

      </ul>
    </div>
  )
}

export default FooterThird
