import React from 'react'
import { Link } from 'react-router-dom';
import SliderImage from '../assets/images/slider-img.svg'
import { BsBook, BsGithub } from "react-icons/bs";
import Button from '../UI/Button'

const Slider = () => {
  return (
    <div className='bg-white flex flex-col justify-center pt-16 pb-2'>
      <div className='flex items-center justify-around w-3/4 m-auto'>
          <div className='basis-1/2'>
            <h2 className='text-blue-500 font-extrabold text-4xl'>به وبسایت من خوش آمدید!</h2>
            <p className='text-blue-500 text-md my-14 leading-10'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
            <div className='flex items-center gap-5'>
              <Link to='/login'>
                <Button className='flex items-center gap-1 outline outline-1 text-blue-500 px-5 py-3 hover:shadow-md'>
                  <BsBook className='text-xl' />
                  <h6 className='text-md'>مشاهده رزومه</h6>
                </Button>
              </Link>
              <a href="https://github.com/mohammadkamrannn" target='_blank' rel="noreferrer">
                <Button className='flex items-center gap-1 outline outline-1 text-blue-500 px-5 py-3 hover:shadow-md'>
                  <BsGithub className='text-xl' />
                  <h6 className='text-md'>گیت هاب من</h6>
                </Button>
              </a>
            </div>
          </div>
          <div className='basis-1/2'>
              <img src={SliderImage} alt='محمد کامران' width={600} />
          </div>
      </div>
    </div>
  )
}

export default Slider