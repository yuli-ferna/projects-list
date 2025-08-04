import Footer from 'components/Footer/Footer'
import Github from 'components/Icons/Github'
import Linkedin from 'components/Icons/Linkedin'
import Mail from 'components/Icons/Mail'
import { useState } from 'react'

type Props = {}

const Menu = (props: Props) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open);
  return (<>
    <div className={`h-100 w-85 bg-white z-10000 border border-[#474164] border-b-0 border-l-0 ${open ? "" : "hidden"}`}>
      <div className="flex justify-start items-center w-full h-[101px] relative overflow-hidden gap-[18px] px-[15px] bg-[#dabdf6] border-t-0 border-r-0 border-b border-l-0 border-black">
        <img
          src="image_home.webp"
          className="w-[70px] h-[70px] rounded-[19px] object-cover border border-black"
        />
        <p className="text-[28px] text-left text-black">yuli-ferna</p>
      </div>
      <div className='flex flex-col gap-15 p-4 justify-between'>
        <Footer />
        <div className="flex justify-end items-center self-stretch relative gap-2.5 cursor-pointer">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <g clip-path="url(#clip0_120_800)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7123 1.28571V9.11378C10.7123 9.82385 11.288 10.3995 11.998 10.3995C12.7081 10.3995 13.2838 9.82385 13.2838 9.11378V1.28571C13.2838 0.575633 12.7081 0 11.998 0C11.288 0 10.7123 0.575633 10.7123 1.28571ZM6.44401 4.97013C7.03909 4.58268 7.20742 3.78621 6.81997 3.19114C6.43254 2.59606 5.63607 2.42774 5.04099 2.81518C2.01085 4.78802 0.513672 8.19341 0.513672 12.4981C0.513672 16.0033 1.50189 18.9235 3.54154 20.9664C5.58149 23.0095 8.49817 23.9998 11.9994 23.9998C15.5006 23.9998 18.4173 23.0095 20.4571 20.9664C22.4968 18.9235 23.4851 16.0033 23.4851 12.4981C23.4851 8.19341 21.9878 4.78802 18.9578 2.81518C18.3626 2.42774 17.5662 2.59606 17.1787 3.19114C16.7914 3.78621 16.9597 4.58268 17.5547 4.97013C19.6573 6.33897 20.9137 8.79564 20.9137 12.4981C20.9137 15.5311 20.0659 17.7189 18.6376 19.1494C17.2094 20.5798 15.0262 21.4284 11.9994 21.4284C8.9726 21.4284 6.78929 20.5798 5.36123 19.1494C3.93289 17.7189 3.08509 15.5311 3.08509 12.4981C3.08509 8.79564 4.34156 6.33897 6.44401 4.97013Z"
                fill="#EB6F6F"
              />
            </g>
            <defs>
              <clipPath id="clip0_120_800">
                <rect width={24} height={24} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-[22px] text-left text-[#eb6f6f]">Turn Off</p>
        </div>
      </div>
    </div>
    <div className='w-full flex items-center gap-8 bg-purple-200 border-t-1'>
      <div
        onClick={handleOpen}
        className='bg-blue-300 px-4 py-2 rounded-r-2xl cursor-pointer'>
        <svg width="40" height="40" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50.1441 6.92096H52.7091V48.0791H50.1441V6.92096Z" fill="#474164" />
          <path d="M47.5622 48.0791H50.1441V50.6441H47.5622V48.0791Z" fill="#474164" />
          <path d="M47.5622 4.35596H50.1441V6.92096H47.5622V4.35596Z" fill="#474164" />
          <path d="M3.85595 50.6441H6.42095V53.2091H47.5622V50.6441H32.1385V45.4972H29.5735V42.9322H34.7203V40.3503H29.5735V37.7938H27V30.0819H19.2881V24.935H21.87V22.37H24.435V17.2063H27V12.0678H29.5819V4.35595H47.5706V1.79095H6.42095V4.35595H3.85595V6.92095H1.29095V48.0875H3.85595V50.6441ZM11.5678 14.6497H14.1497V19.7797H11.5678V14.6497ZM11.5678 35.2203H14.1497V37.7938H16.7063V40.3588H27V42.9406H16.7063V40.3588H14.1497V37.7938H11.5678V35.2203Z" fill="#474164" />
          <path d="M39.8503 14.6497H42.4322V19.7797H39.8503V14.6497Z" fill="#474164" />
          <path d="M37.2853 35.2203H39.8503V37.7853H37.2853V35.2203Z" fill="#474164" />
          <path d="M34.7203 37.7853H37.2853V40.3503H34.7203V37.7853Z" fill="#474164" />
        </svg>
      </div>
      <Github width={40} height={40} />
      <Linkedin width={40} height={40} />
      <Mail width={40} height={40} />
    </div>
  </>)
}

export default Menu