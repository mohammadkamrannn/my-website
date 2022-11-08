import React from 'react';
import Header from '../components/Header';
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Header />
      <h2>صفحه مورد نظر یافت نشد!</h2>
      <Link className='underline text-blue-600 mt-2' to='/'>صفحه اصلی</Link>
    </>
  )
}

export default Error