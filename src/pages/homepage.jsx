import React from 'react'
import logo from '../image/logo-telkom-indonesia.jpg';
import Background from '../image/backor3.jpg';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="bg">
      <img src={Background} className="absolute right-0 top-0" alt=""/>
      <header className="fixed top-0 right-14 left-0 md:py-1">
        {/* <svg width="1157" height="1024" viewBox="0 0 1157 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M987.183 1258.69C1370.9 1075.4 1032.93 779.098 1069.32 679.226C1111.73 431.795 964.649 578.095 853.619 592.872C742.586 607.647 826.98 337.97 847.952 225.264C868.925 112.557 720.152 239.177 694.59 171.407C669.03 103.64 393.689 231.919 344.848 186.636C296.006 141.35 217.315 67.2541 130.088 59.0428C42.8616 50.8316 20.5715 90.4452 1.79384 16.1234C-16.9816 -58.196 170.061 -270.34 179.065 -371.488C188.067 -472.638 149.103 -527.46 110.139 -582.283L365.601 -829C411.799 -781.164 457.997 -733.328 504.197 -685.491C550.395 -637.655 596.593 -589.82 642.792 -541.984C688.992 -494.146 735.19 -446.311 781.388 -398.476C827.586 -350.64 873.784 -302.805 919.984 -254.967C966.182 -207.132 1012.38 -159.296 1058.58 -111.46C1104.78 -63.6225 1150.98 -15.7872 1197.18 32.0482C1243.37 79.8837 1289.57 127.719 1335.77 175.557C1381.97 223.392 1428.17 271.228 1474.37 319.064C1520.57 366.901 1566.76 414.737 1612.96 462.572L987.183 1258.69Z" fill="#029096"/>
        </svg> */}
        <div className="flex items-center justify-between">
          <img alt="logo-telkom" src={logo} className="w-40"/>
          <div className="hidden md:flex space-x-10">
            <Link to="/login" className="font-semibold border border-white text-white rounded-md py-2 px-6">Letter In</Link>
            <Link to="/login" className="font-semibold border border-white text-white rounded-md py-2 px-6">Letter Out</Link>
            <Link to="/login" className="font-semibold border border-white text-white rounded-md py-2 px-6">Log In</Link>
          </div>
          {/* <svg width="1157" height="1024" viewBox="0 0 1157 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M987.183 1258.69C1370.9 1075.4 1032.93 779.098 1069.32 679.226C1111.73 431.795 964.649 578.095 853.619 592.872C742.586 607.647 826.98 337.97 847.952 225.264C868.925 112.557 720.152 239.177 694.59 171.407C669.03 103.64 393.689 231.919 344.848 186.636C296.006 141.35 217.315 67.2541 130.088 59.0428C42.8616 50.8316 20.5715 90.4452 1.79384 16.1234C-16.9816 -58.196 170.061 -270.34 179.065 -371.488C188.067 -472.638 149.103 -527.46 110.139 -582.283L365.601 -829C411.799 -781.164 457.997 -733.328 504.197 -685.491C550.395 -637.655 596.593 -589.82 642.792 -541.984C688.992 -494.146 735.19 -446.311 781.388 -398.476C827.586 -350.64 873.784 -302.805 919.984 -254.967C966.182 -207.132 1012.38 -159.296 1058.58 -111.46C1104.78 -63.6225 1150.98 -15.7872 1197.18 32.0482C1243.37 79.8837 1289.57 127.719 1335.77 175.557C1381.97 223.392 1428.17 271.228 1474.37 319.064C1520.57 366.901 1566.76 414.737 1612.96 462.572L987.183 1258.69Z" fill="#029096"/>
          </svg> */}
          {/* <img src={Background} className="absolute right-0 top-0" alt="" /> */}
        </div>
      </header>
      <main>
        <div className="container max-w-5xl mx-auto z-0">
          <div className='absolute bottom-0 px-4 py-3 py-36 text-primary'>
            <h3 className="font-semibold text-5xl pb-3">
              <span className='text-muda'>SEKRETARIAT</span> & <span className='text-muda'>PR</span>
            </h3>
            <h3 className="font-semibold text-5xl pb-3">
              TELKOM REGIONAL 7
            </h3>
            <div className="font-semibold text-7xl pb-10">
              <span className='text-muda'>FORM</span> LETTER
            </div>
            <div className="hidden md:flex space-x-10">
              <Link to='/login' className="py-4 px-7 bg-navy rounded-md text-white drop-shadow-3xl0">Letter In</Link>
              <Link to='/login' className="py-4 px-7 bg-navy rounded-md text-white drop-shadow-3xl0">Letter Out</Link>
            </div> 
          </div>
          {/* <div className='z-0'>
            <img src={Orang} alt=""/>
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default Homepage