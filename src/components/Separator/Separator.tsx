import React from 'react'

type Props = {}

const Separator = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-2 w-full relative px-2 py-5">
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-px bg-[#21242a]/[0.57] mix-blend-color-burn" />
    </div>
  )
}

export default Separator