import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from "../images/logo_1.png"

const Logo = () => {
  return (
    <div className='logo'>
        <Link to={""}>
        <img src={LogoImg} alt="" />
        </Link>
    </div>
  )
}

export default Logo