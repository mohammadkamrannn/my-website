import React from 'react'
import { BsCaretLeft } from "react-icons/bs";

const Footer = () => {
  return (
    <>
        <div className='bg-blue-500'>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 91.29999999999998,192.0897435897436 182.59999999999997,184.1794871794872 272,197 C 361.40000000000003,209.8205128205128 448.9,243.37179487179483 515,226 C 581.1,208.62820512820517 625.8,140.33333333333334 695,126 C 764.2,111.66666666666666 857.9000000000001,151.2948717948718 944,184 C 1030.1,216.7051282051282 1108.6,242.4871794871795 1190,244 C 1271.4,245.5128205128205 1355.7,222.75641025641025 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#1e40af" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
        </div>
        <div className='bg-blue-800 text-white bottom-0 py-4 h-80'>
            <div className='flex items-center justify-around w-3/4 m-auto gap-4'>
                <div className='flex items-center gap-1 basis-2/5 border-t-2 border-dotted py-4'>
                    <BsCaretLeft className='text-lg' />
                    <h2 className='text-lg font-extrabold'>ستون</h2>
                </div>
                <div className='flex items-center gap-1 basis-1/5 border-t-2 border-dotted py-4'>
                    <BsCaretLeft className='text-lg' />
                    <h2 className='text-lg font-extrabold'>ستون</h2>
                </div>
                <div className='flex items-center gap-1 basis-1/5 border-t-2 border-dotted py-4'>
                    <BsCaretLeft className='text-lg' />
                    <h2 className='text-lg font-extrabold'>ستون</h2>
                </div>
                <div className='flex items-center gap-1 basis-1/5 border-t-2 border-dotted py-4'>
                    <BsCaretLeft className='text-lg' />
                    <h2 className='text-lg font-extrabold'>ستون</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer