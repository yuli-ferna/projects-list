interface Props {}

const SearchBar = (props: Props) => {
  return (
    <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden bg-[#e0f2f4] border border-[#6e3230]" draggable="false">
      <div className="flex flex-col justify-center items-center self-stretch w-[30px] relative overflow-hidden gap-2.5 bg-[#fef7c3] border-t-0 border-r border-b-0 border-l-0 border-[#6e3230]">
        <svg
          width={14}
          height={15}
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-3.5 h-3.5 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M12.833 12.4167V11.8334H12.2497V11.25H11.6663V10.6667H11.083V10.0834H9.91634V9.50004H10.4997V8.33337H11.083V4.83337H10.4997V3.66671H9.91634V3.08337H9.33301V2.50004H8.74967V1.91671H7.58301V1.33337H4.08301V1.91671H2.91634V2.50004H2.33301V3.08337H1.74967V3.66671H1.16634V4.83337H0.583008V8.33337H1.16634V9.50004H1.74967V10.0834H2.33301V10.6667H2.91634V11.25H4.08301V11.8334H7.58301V11.25H8.74967V10.6667H9.33301V11.8334H9.91634V12.4167H10.4997V13H11.083V13.5834H11.6663V14.1667H12.833V13.5834H13.4163V12.4167H12.833ZM6.99967 9.50004V10.0834H4.66634V9.50004H3.49967V8.91671H2.91634V7.75004H2.33301V5.41671H2.91634V4.25004H3.49967V3.66671H4.66634V3.08337H6.99967V3.66671H8.16634V4.25004H8.74967V5.41671H9.33301V7.75004H8.74967V8.91671H8.16634V9.50004H6.99967Z"
            fill="#6E3230"
          />
        </svg>
      </div>
      <input id='search-nav' name='search-nav' type="text" className='w-full m-0 px-2 rounded-0' />
    </div>
  )
}

export default SearchBar