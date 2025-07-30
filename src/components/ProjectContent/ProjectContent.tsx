import Button from 'components/Button/Button';
import Tag from 'components/Tag/Tag';
import { project, themes } from 'utils';
interface Props {
  project: project;
  index: number;
  colorNumber?: string;
  colorButton?: string;
}

const ProjectContent = ({ project, index, colorNumber = "#FEF7C3", colorButton = "#FBC7E2" }: Props) => {
  const { title, description, image, tags = [], figma, github, link } = project;
  
  return (<>
    <div className="flex justify-start items-center w-full relative gap-[34px] py-2.5">
      <div
        className={`flex justify-center items-center flex-grow-0 flex-shrink-0 w-[75px] h-[75px] relative gap-2.5 border border-[#474164]`}
        style={{ backgroundColor: colorNumber }}
      >
        <p className="text-[50px] font-3d text-left">{`${index < 9 && "0"}${index + 1}`}</p>
      </div>
      <p className="w-fit whitespace-break-spaces wrap-break-word h-fit text-[41px] text-left">
        {title}
      </p>
    </div>
    <p className="w-full text-xl text-left">
      {description}
    </p>
    <div className='w-full relative'>
      <svg className='absolute -top-2 -left-3' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M49.5 38V43H52V45.5H57V49.5H52V52H49.5V57H45.5V52H43V49.5H38V45.5H43V43H45.5V38H49.5ZM24.5 10.5V15.5H27V20.5H29.5V23H32V25.5H37V28H42V32H37V34.5H32V37H29.5V39.5H27V44.5H24.5V49.5H20.5V44.5H18V39.5H15.5V37H13V34.5H8V32H3V28H8V25.5H13V23H15.5V20.5H18V15.5H20.5V10.5H24.5ZM49.5 3V8H52V10.5H57V14.5H52V17H49.5V22H45.5V17H43V14.5H38V10.5H43V8H45.5V3H49.5Z" fill="#FA8FC5" stroke="black" />
      </svg>
      <img
        src={image}
        className="w-full h-[255px] object-cover border-2 object-top border-[#474164]"
        style={{ boxShadow: "4px 4px 0px 0 #474164" }}
      />
    </div>
    <div className="flex flex-wrap justify-start items-center flex-grow-0 flex-shrink-0 w-full gap-[15px] mb-5">
      {tags.map((tag, index) => {
        return <Tag key={`${title}-${tag}-${index}`} tag={tag} />
      })}
    </div>
    <div className="flex flex-wrap justify-end items-center flex-grow-0 flex-shrink-0 w-full gap-[18px]">
      {!!figma && <Button href={figma} color={colorButton}>
        <svg
          width={29}
          height={29}
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-7 h-7 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <g clipPath="url(#clip0_92_287)">
            <path
              d="M9.93029 28.4584C12.4526 28.4584 14.4997 26.4112 14.4997 23.8889V19.3195H9.93029C7.40796 19.3195 5.36084 21.3666 5.36084 23.8889C5.36084 26.4112 7.40796 28.4584 9.93029 28.4584Z"
              fill="#0ACF83"
            />
            <path
              d="M5.36084 14.75C5.36084 12.2276 7.40796 10.1805 9.93029 10.1805H14.4997V19.3194H9.93029C7.40796 19.3194 5.36084 17.2723 5.36084 14.75Z"
              fill="#A259FF"
            />
            <path
              d="M5.36084 5.61108C5.36084 3.08874 7.40796 1.04163 9.93029 1.04163H14.4997V10.1805H9.93029C7.40796 10.1805 5.36084 8.13341 5.36084 5.61108Z"
              fill="#F24E1E"
            />
            <path
              d="M14.5 1.04163H19.0695C21.5918 1.04163 23.6389 3.08874 23.6389 5.61108C23.6389 8.13341 21.5918 10.1805 19.0695 10.1805H14.5V1.04163Z"
              fill="#FF7262"
            />
            <path
              d="M23.6389 14.75C23.6389 17.2723 21.5918 19.3194 19.0695 19.3194C16.5471 19.3194 14.5 17.2723 14.5 14.75C14.5 12.2276 16.5471 10.1805 19.0695 10.1805C21.5918 10.1805 23.6389 12.2276 23.6389 14.75Z"
              fill="#1ABCFE"
            />
          </g>
          <defs>
            <clipPath id="clip0_92_287">
              <rect width={28} height={28} fill="white" transform="translate(0.5 0.75)" />
            </clipPath>
          </defs>
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-[22px] text-left text-[#21242a]">Figma</p>
      </Button>}
      {!!github && <Button href={github} color={colorButton}>
        <svg
          width={32}
          height={31}
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M19.9576 30.0852C19.9576 29.9152 19.9576 29.5185 19.9671 28.9895C19.9765 27.9128 19.9765 26.2692 19.9765 24.8619C19.9765 23.3884 19.4854 22.4533 18.9092 21.9621C22.404 21.5749 26.0877 21.0931 26.0877 15.0575C26.0877 13.3384 25.4738 12.4789 24.4726 11.3738C24.6331 10.9676 25.1715 9.29576 24.312 7.12331C22.9991 6.71715 19.9954 8.81404 19.9954 8.81404C18.7486 8.46456 17.3979 8.2851 16.0661 8.2851C14.7343 8.2851 13.3836 8.46456 12.1368 8.81404C12.1368 8.81404 9.13315 6.71715 7.82023 7.12331C6.96069 9.28631 7.48964 10.9582 7.65965 11.3738C6.65844 12.4789 6.18616 13.3384 6.18616 15.0575C6.18616 21.0648 9.70932 21.5749 13.2041 21.9621C12.7508 22.3683 12.3446 23.0672 12.2029 24.0685C11.3056 24.4746 9.01035 25.1736 7.64076 22.7555C6.78123 21.2632 5.23217 21.1404 5.23217 21.1404C3.70201 21.1215 5.12827 22.1038 5.12827 22.1038C6.14838 22.5761 6.86624 24.3896 6.86624 24.3896C7.78245 27.1949 12.1651 26.2504 12.1651 26.2504C12.1651 27.1004 12.1746 28.3 12.1746 29.1407C12.1746 29.594 12.184 29.953 12.184 30.0852C12.184 30.4914 11.9007 30.9825 11.0978 30.8408C4.8638 28.7534 0.5 22.8217 0.5 15.8887C0.5 7.21776 7.13071 0.634277 15.8016 0.634277C24.4726 0.634277 31.5 7.21776 31.5 15.8887C31.5094 22.8217 27.2779 28.7628 21.0439 30.8408C20.2504 30.9825 19.9576 30.4914 19.9576 30.0852ZM11.4095 24.9091C11.3906 24.7674 11.5134 24.6446 11.6929 24.6068C11.8723 24.588 12.0423 24.6635 12.0612 24.7863C12.0896 24.9091 11.9668 25.0319 11.7779 25.0697C11.5984 25.1075 11.4284 25.0319 11.4095 24.9091ZM10.55 25.2114C10.3422 25.2302 10.2005 25.1263 10.2005 24.9847C10.2005 24.8619 10.3422 24.758 10.5311 24.758C10.7105 24.7391 10.8806 24.843 10.8806 24.9847C10.8806 25.1075 10.7389 25.2114 10.55 25.2114ZM9.19926 25.0036C9.0198 24.9658 8.89701 24.8241 8.93479 24.7013C8.97257 24.5785 9.16148 24.5218 9.32205 24.5596C9.51096 24.6163 9.63376 24.758 9.58653 24.8808C9.54875 25.0036 9.35984 25.0602 9.19926 25.0036ZM8.01858 24.314C7.8769 24.1912 7.83912 24.0118 7.93357 23.9268C8.01858 23.8229 8.19805 23.8418 8.33973 23.9834C8.46252 24.1062 8.50975 24.2951 8.42474 24.3707C8.33973 24.4746 8.16026 24.4557 8.01858 24.314ZM7.21572 23.3695C7.11182 23.2278 7.11182 23.0672 7.21572 23.0011C7.31962 22.9161 7.48019 22.9822 7.5652 23.1239C7.6691 23.2656 7.6691 23.4356 7.5652 23.5112C7.48019 23.5678 7.31962 23.5112 7.21572 23.3695ZM6.62066 22.5383C6.51676 22.4155 6.49786 22.2738 6.58287 22.2077C6.66788 22.1227 6.80956 22.1699 6.91346 22.2644C7.01736 22.3872 7.03625 22.5288 6.95124 22.595C6.86624 22.68 6.72456 22.6327 6.62066 22.5383ZM6.05393 21.9338C5.93114 21.8771 5.87446 21.7732 5.91225 21.6882C5.95003 21.6315 6.05393 21.6032 6.17672 21.6504C6.29951 21.7165 6.35618 21.8204 6.3184 21.896C6.28062 21.981 6.15783 21.9999 6.05393 21.9338Z"
            fill="#21242A"
          />
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-[22px] text-left text-[#21242a]">Github</p>
      </Button>}
      {!!link && <Button href={link} color={colorButton}>
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5 1.75H15.5L14.5 2.75001L17.6161 5.86612L9.61612 13.8661L11.3839 15.6339L19.3839 7.63388L22.5 10.75L23.5 9.75V1.75ZM1.25 4.5H11V7H3.75V21.5H18.25V14.25H20.75V24H1.25V4.5Z"
            fill="#21242A"
          />
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-[22px] text-left text-[#21242a]">See here</p>
      </Button>}
    </div>
  </>
  )
}

export default ProjectContent