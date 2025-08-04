interface Props {
  selected?: boolean;
  text: string;
  icon: string;
}

const Tab = ({selected = false, text, icon}: Props) => {
  return (<div className="flex justify-start items-end ">
    <svg
      width={8}
      height={9}
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`-mb-[1px] ${!selected && "hidden"}`}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.5H8L8 0.5C8 4.91716 4.41859 8.49818 0 8.5Z"
        fill="#6E3230"
      />
    </svg>
    <div className={`flex justify-start items-end left-0 top-0 rounded-tl-lg rounded-tr-lg border-t border-r border-b-0 border-l border-[#6e3230] ${selected ? "bg-[#6e3230]" : "bg-white/[0.33]"}`}>
      <div className={`flex justify-between items-center w-[234px] h-9 px-3 py-[7px]`}>
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-center items-center w-[17px] gap-2.5">
            <img className="w-full" src={icon} alt="tab-icon" />
          </div>
          <p className="text-xs font-medium text-left text-white">
            {text}
          </p>
        </div>
        <svg
          width={9}
          height={10}
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_108_543)">
            <path
              d="M4.70696 4.49999L7.85351 1.35379C8.04883 1.15847 8.04883 0.841795 7.85351 0.64649C7.65819 0.45117 7.34151 0.45117 7.14621 0.64649L3.99999 3.79302L0.85379 0.64649C0.65847 0.45117 0.341795 0.45117 0.14649 0.64649C-0.0488144 0.841811 -0.0488301 1.15849 0.14649 1.35379L3.29302 4.49999L0.14649 7.64621C-0.0488301 7.84153 -0.0488301 8.15821 0.14649 8.35351C0.341811 8.54881 0.658485 8.54883 0.85379 8.35351L3.99999 5.20696L7.14619 8.35351C7.34151 8.54883 7.65819 8.54883 7.85349 8.35351C8.04881 8.15819 8.04881 7.84151 7.85349 7.64621L4.70696 4.49999Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_108_543">
              <rect width={8} height={8} fill="white" transform="translate(0 0.5)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <svg
      width={8}
      height={9}
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`-mb-[1px] ${!selected && "hidden"}`}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8.5H0L0 0.5C0 4.91716 3.58141 8.49818 8 8.5Z"
        fill="#6E3230"
      />
    </svg>
  </div>
  )
}

export default Tab