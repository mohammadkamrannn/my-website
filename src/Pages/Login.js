import React from 'react'
import Header from '../components/Header';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <h2>ورود به سیستم</h2>
      <Link className='underline text-blue-600 mt-2' to='/'>صفحه اصلی</Link>
    </>
  )
}

export default Login