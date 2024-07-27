import React from 'react'
import { Link } from 'react-router-dom'

const FooterSecond = () => {
    return (
        <div >
            <div className='footer_second'>
                <p>Yararlı linklər</p>
                <ul>
                    <li><Link>Haqqımızda »</Link></li>
                    <li><Link>Uğurlarımız »
                    </Link></li>
                    <li><Link>Xidmətlərimiz »
                    </Link></li>
                    <li><Link>Xəbərlər »
                    </Link></li>
                    <li><Link>Qalareya »</Link></li>
                    <li><Link>Cv göndər »</Link></li>
                    <li><Link>İmtahanlar »</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterSecond
