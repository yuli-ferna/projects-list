interface Props {
  icon: string;
  name: string;
  href: string;
}

const QuickAccess = ({ icon, name, href }: Props) => {
  return (
    <a className="w-fit" href={href} target='_blank'>
      <div className='flex flex-col w-fit max-w-[70px]'>
        <div className='relative m-auto'>
          <img src={icon} alt={`${name}-icon`} />
          <svg className="absolute bottom-0 right-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Link-Share-2--Streamline-Sharp" height="16" width="16">
            <desc>
              Link Share 2 Streamline Icon: https://streamlinehq.com
            </desc>
            <g id="link-share-2--create-hyperlink-link-make-unlink-square">
              <path id="Vector 1313" fill="#ffffff" d="M2 5h17v17H2V5Z" strokeWidth="1.5"></path>
              <path id="Vector 1312" stroke="#1e1e3e" d="M12 5H2v17h17V12" strokeWidth="1.5"></path>
              <path id="Vector 1309" stroke="#1e1e3e" d="M10 14 22 2" strokeWidth="1.5"></path>
              <path id="Vector 1310" stroke="#1e1e3e" d="M14 2h8v8" strokeWidth="1.5"></path>
            </g>
          </svg>
        </div>
        <p className="text-center">{name}</p>
      </div>
    </a>
  )
}

export default QuickAccess