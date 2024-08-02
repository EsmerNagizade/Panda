import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getContactList } from '../action/MainAction';
const HeaderHeadContainer = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
dispatch(getContactList())
  },[dispatch])

   const {Contact} =useSelector(state=>state.Data)
   console.log(Contact);
  return (
    <div className="header_first_bg">

    <div className='header_head_container container'>
    
    {
    Contact[0]?.is_active?



        <ul className='header_first_list'>
<li>
<Link to={""}><MdOutlineMailOutline />{Contact[0]?.email}</Link>
</li>
<li>
            <Link to={""}><MdPhoneIphone />{Contact[0]?.contact_number}</Link>
          </li>
        </ul>:null

    }
        <ul className='header_second_list'>
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
<li>
<Link to={""}><AiOutlineYoutube /></Link>
</li> 
        </ul>
    </div>
    </div>
  )
}

export default HeaderHeadContainer