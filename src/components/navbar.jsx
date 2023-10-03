import React, { useState, useEffect, useRef } from 'react';
import logo from '../image/logo-telkom-indonesia.jpg';
import profilImage from '../image/profile.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) &&
        (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target))
      ) {
        setIsDropdown1Open(false);
        setIsDropdown2Open(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown1 = () => {
    setIsDropdown1Open(!isDropdown1Open);
    setIsDropdown2Open(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
    setIsDropdown1Open(false);
  };

  return (
    <>
      <header className="flex sticky-header">
        <div className="w-1/5 h-24">
          <Link to='/afterlogin'>
            <img src={logo} alt="telkom logo" className="w-full h-full" />
          </Link>
        </div>
        <div className="bg-[#029096] h-24 rounded-l-full w-4/5">
          <div className="flex flex-row items-center justify-end h-full space-x-4">
            <Link to="/letterin" className="flex items-center justify-center text-white my-6 w-32 h-10 border border-white-600 hover:bg-gray-400 hidden sm:flex">
              Letter In
            </Link>
            <Link to="/letterout1" className="flex items-center justify-center  text-white my-6 w-32 h-10 border border-white-600 hover:bg-gray-400 hidden sm:flex">
              Letter Out
            </Link>
            <div ref={dropdown1Ref} className={`relative group my-6 ${isSmallScreen ? 'hidden' : ''}`} style={{ zIndex: 999 }}>
              <button
                onClick={toggleDropdown1}
                className="text-white w-32 h-10 cursor-pointer flex items-center space-x-2"
              >
                <img
                  src={profilImage}
                  alt="Profil"
                  className="w-12 h-12 rounded-full"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-white transform transition-transform duration-300 ${isDropdown1Open ? 'rotate-180' : 'rotate-0'}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdown1Open && (
                <div className="absolute mt-2 bg-white border border-gray-300 shadow-md rounded">
                  {/* Konten dropdown 1 */}
                  <ul className="list-none p-2">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/list_letterin">Document</Link></li>
                    <li><Link to="/">Log out</Link></li>
                  </ul>
                </div>
              )}
            </div>
            <div ref={dropdown2Ref} className="relative group sm:hidden my-6 ">
            <button
                onClick={toggleDropdown2}
                className="text-white w-28 h-10 mx-4 cursor-pointer flex items-center justify-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-10 w-10 text-white transition-transform duration-300 ${
                    isDropdown2Open ? 'rotate-60' : 'rotate-0'
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  >
                  {isDropdown2Open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 6l8 8M6 14l8-8"
                    />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h12M4 10h12M4 14h12" />
                  )}
                </svg>
              </button>
              {isDropdown2Open && (
                <div className="w-auto h-auto absolute bg-white border border-gray-300 shadow-md rounded">
                  {/* Konten dropdown 2 */}
                  <ul className="list-none space-y-2">
                    <li>
                      <Link to="/letterin" className="h-10 w-32 flex items-center justify-center hover:bg-gray-400">
                        Letter In
                      </Link>
                    </li>
                    <li>
                      <Link to="/letterout1" className="h-10 w-32 flex items-center justify-center hover:bg-gray-400 ">
                        Letter Out
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile" className='h-10 w-32 flex items-center justify-center'>Profile</Link>
                    </li>
                    <li>
                      <Link to="/list_letterin" className='h-10 w-32 flex items-center justify-center'>Document</Link>
                    </li>
                    <li>
                      <Link to="/" className='h-10 w-32 flex items-center justify-center'>Log out</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
