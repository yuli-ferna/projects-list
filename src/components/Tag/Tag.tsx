interface Props {
  tag: string
}

const Tag = (props: Props) => {
  return (
    <div
      className="flex justify-center items-center relative gap-2.5 px-[11px] py-1.5 bg-[#e8fafa] border-2 border-[#21242a] cursor-pointer"
      style={{ boxShadow: "4px 4px 0px 0 rgba(0,0,0,0.53)" }}
    >
      <p className="text-[22px] text-left">{props.tag}</p>
    </div>
  )
}

export default Tag