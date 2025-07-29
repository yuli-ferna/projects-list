import { useDate } from 'hook/useDate';
import React from 'react'

interface Props {

}

const Title = (props: Props) => {
  const { time } = useDate();

  return (
    <div className="w-auto h-fit flex items-start justify-items-start relative m-5">
      <p className="font-[Alumni_Sans] w-auto font-bold italic text-right text-[#9b90d0]/[0.63] leading-[150px]">
        <span className='h-fit text-[170px] sm:text-[185px]/[185px]'>{time[0]}</span><span className='text-[40px]'>{time[1]}</span>
      </p>
      <p className="title-1 w-[216px] h-fit absolute left-0 top-[30%] text-6xl text-left text-[#fff1f7]">
      <svg
        width={41}
        height={40}
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 absolute -right-9 -top-3"
        preserveAspectRatio="xMidYMid meet"
      >
        <g filter="url(#filter0_d_77_240)">
          <path
            d="M38.3332 8.33325V9.99992H34.9998V11.6666H33.3332V14.9999H31.6665V11.6666H29.9998V9.99992H26.6665V8.33325H29.9998V6.66659H31.6665V3.33325H33.3332V6.66659H34.9998V8.33325H38.3332ZM38.3332 29.9999V31.6666H34.9998V33.3333H33.3332V36.6666H31.6665V33.3333H29.9998V31.6666H26.6665V29.9999H29.9998V28.3333H31.6665V24.9999H33.3332V28.3333H34.9998V29.9999H38.3332ZM24.9998 18.3333V16.6666H21.6665V14.9999H19.9998V13.3333H18.3332V9.99992H16.6665V6.66659H13.3332V9.99992H11.6665V13.3333H9.99984V14.9999H8.33317V16.6666H4.99984V18.3333H1.6665V21.6666H4.99984V23.3333H8.33317V24.9999H9.99984V26.6666H11.6665V29.9999H13.3332V33.3333H16.6665V29.9999H18.3332V26.6666H19.9998V24.9999H21.6665V23.3333H24.9998V21.6666H28.3332V18.3333H24.9998ZM19.9998 21.6666V23.3333H18.3332V24.9999H16.6665V28.3333H13.3332V24.9999H11.6665V23.3333H9.99984V21.6666H6.6665V18.3333H9.99984V16.6666H11.6665V14.9999H13.3332V11.6666H16.6665V14.9999H18.3332V16.6666H19.9998V18.3333H23.3332V21.6666H19.9998Z"
            fill="#FFF1F7"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_77_240"
            x={0}
            y={0}
            width={42}
            height={42}
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx={2} dy={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_77_240" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_77_240" result="shape" />
          </filter>
        </defs>
      </svg>
        <span className="w-[216px] h-fit text-6xl text-left text-[#fff1f7]">Projects</span>
        <br />
        <span className="w-[216px] h-fit text-6xl text-left text-[#fff1f7]">&amp; Demos</span>
      </p>
      
    </div>
  )
}

export default Title