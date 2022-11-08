import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../UI/Button'
import logo from '../assets/images/mk-logo.svg'
import logoBlue from '../assets/images/mk-logo-blue.svg'
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className='bg-white text-blue-500 sticky top-0 z-10 outline outline-1'>
        <div className='flex justify-between items-center h-20 w-3/4 m-auto'>
          <Link to='/'>
            <img src={logoBlue} alt='محمد کامران' />
          </Link>
          <ul className='flex items-center gap-5'>
            <li><Link className='outline outline-1 rounded-full px-4 py-1.5 text-sm hover:shadow-md'>لینک اول</Link></li>
            <li><Link className='outline outline-1 rounded-full px-4 py-1.5 text-sm hover:shadow-md'>لینک دوم</Link></li>
            <li><Link className='outline outline-1 rounded-full px-4 py-1.5 text-sm hover:shadow-md'>لینک سوم</Link></li>
            <li><Link className='outline outline-1 rounded-full px-4 py-1.5 text-sm hover:shadow-md'>لینک چهارم</Link></li>
            <li><Link className='outline outline-1 rounded-full px-4 py-1.5 text-sm hover:shadow-md'>لینک پنجم</Link></li>
          </ul>
          <Link to='/login'>
            <Button className='flex items-center gap-1 px-3 py-2 outline outline-1 hover:shadow-md'>
              <BsPersonCircle className='text-xl' />
              <h6 className='text-md'>ورود</h6>
            </Button>
          </Link>
        </div>
    </div>
  )
}

export default Header