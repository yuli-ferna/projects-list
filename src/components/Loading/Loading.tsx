import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-[319px] relative gap-[17px]">
  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[319px] h-[37px] text-[31px] text-center text-black">
    Loading...
  </p>
  <div
    className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-1.5 py-[5px] rounded-[3px] bg-white border-2 border-black"
    style={{ boxShadow: "3px 2px 0px 0 #000" }}
  >
    <div className="flex-grow-0 flex-shrink-0 w-[111px] h-[19px] relative overflow-hidden rounded-[3px] bg-[#fef7c3] border-2 border-black" />
  </div>
</div>
  )
}

export default Loading