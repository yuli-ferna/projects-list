import { ElementType, PropsWithChildren } from "react";

interface Props {
  color: string;
  href: string;
}

const Button = ({ color, href, children }: PropsWithChildren<Props>) => {
  return (
    <a
      className={`retro-button flex justify-center items-center flex-grow-0 flex-shrink-0 h-[45px] relative gap-2.5 px-3 py-1.5 rounded-[20px] border-2 border-[#21242a] cursor-pointer`}
      href={href}
      target="_blank"
      style={{ boxShadow: "5px 4px 0px 0 #21242a", backgroundColor: color}}
    >
      {children}
    </a>
  )
}

export default Button