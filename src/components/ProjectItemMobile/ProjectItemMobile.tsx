import ProjectContent from 'components/ProjectContent/ProjectContent'
import { project, themes } from 'utils';


interface Props {
  index: number;
  project: project;
}

const ProjectItemMobile = ({ project, index }: Props) => {
  const themeId = index % themes.length;
  return (
    <div>
      <div className="flex flex-col justify-start items-center w-auto max-w-[385px] relative gap-[35px] py-10 px-5 rounded-[5px] bg-[#e8fafa] border border-black">
        {/* Bar */}
        <svg
          width={"calc(100% + 2px)"}
          height={15}
          viewBox="0 0 396 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch flex-grow-0 flex-shrink-0 h-[14.75px] absolute -top-[1px] -left-[1px]"
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_95_307)">
            <path
              d="M0 5C0 2.23858 2.23858 0 5 0H391C393.761 0 396 2.23858 396 5V14.75H0V5Z"
              fill={themes[themeId].color.bar}
            />
            <path
              d="M385.875 11.75L385 10.875L388.5 7.375L385 3.875L385.875 3L389.375 6.5L392.875 3L393.75 3.875L390.25 7.375L393.75 10.875L392.875 11.75L389.375 8.25L385.875 11.75Z"
              fill="black"
            />
          </g>
          <path
            d="M5 0.5H391C393.485 0.500006 395.5 2.51472 395.5 5V14.25H0.5V5C0.5 2.59234 2.39083 0.626322 4.76855 0.505859L5 0.5Z"
            stroke="black"
          />
          <defs>
            <clipPath id="clip0_95_307">
              <path
                d="M0 5C0 2.23858 2.23858 0 5 0H391C393.761 0 396 2.23858 396 5V14.75H0V5Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
        {/* Content */}
        <ProjectContent
          colorButton={themes[themeId].color.buttons}
          colorNumber={themes[themeId].color.number}
          index={index}
          project={project}
        />
        {/* Icons */}
        <img height={"auto"} className='w-12 absolute right-2 top-[25px] rotate-25' src={themes[themeId].icons.first} alt="icon" />
        <img height={"auto"} className='w-12 absolute left-0 bottom-2 -rotate-25' src={themes[themeId].icons.second} alt="icon" />
      </div>
    </div>
  )
}

export default ProjectItemMobile