import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
 <nav>
    <ul className='nav_list other_nav_list'>
    <li>
        <Link to={""}>
        Haqqımızda
        </Link>
    </li>
    <li>
        <Link to={""}>
        Uğurlarımız
        </Link>
    </li>
    <li>
        <Link to={""}>
        Xidmətlərimiz
        </Link>
    </li>
    <li>
        <Link to={""}>
        Xəbərlər
        </Link>
    </li>
    <li>
        <Link to={""}>
        Qalareya
        </Link>
    </li>
    <li>
        <Link to={""}>
        Cv göndər
        </Link>
    </li>
    <li>
        <Link to={""}>
        İmtahanlar
        </Link>
    </li>
    <li>
        <Link to={""}>
        Nəşrlərimiz
        </Link>
    </li>
    <li>
        <Link to={""}>
        Əlaqə
        </Link>
    </li>
    </ul>
 </nav>
  )
}

export default Nav