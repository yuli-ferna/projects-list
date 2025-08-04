import * as motion from "motion/react-client"
import Description from "components/Description/Description"
import { LanguageSelector } from "components/LanguageSelector";
import ProjectContent from "components/ProjectContent/ProjectContent";
import Separator from "components/Separator/Separator";
import { loadingDuration, project, themes } from "utils"
import Tab from "./Tab";
import SearchBar from "./SearchBar";
import Loading from "components/Loading/Loading";

interface Props {
  projects: project[];
}

const Navigator = ({ projects }: Props) => {
  return (
    <div className="navigator flex flex-col justify-start items-center h-[800px] w-[1080px] relative">
      {/* Tabs */}
      <div className="flex flex-col justify-start items-start self-stretch rounded-tl-[5px] rounded-tr-[5px] bg-[#fab8ba] border border-[#6d2b2f] border-b-0">
        <div className="flex justify-between items-end w-full h-[44.5px] px-2.5">
          <div className="flex w-full min-w-[600px] h-9">
            <Tab text="Notion" icon="./icon-notion.svg" />
            <Tab text="My Projects & Demos" icon="./icon-page.svg" selected />
            {/* <Tab text="Notion" icon="./icon-notion.svg" /> */}
          </div>
          <div className="flex justify-start items-center self-stretch gap-2.5">
            <svg
              width={25}
              height={26}
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[25px] h-[25px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M6.25 22.625V20.5416H18.75V22.625H6.25Z" fill="#6E3230" />
            </svg>
            <svg
              width={25}
              height={26}
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[25px] h-[25px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M4.16699 4.91675H20.8337V21.5834H4.16699V4.91675ZM6.25033 9.08342V19.5001H18.7503V9.08342H6.25033Z"
                fill="#6E3230"
              />
            </svg>
            <svg
              width={25}
              height={26}
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[25px] h-[25px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M4.8 21.75L3 19.95L10.2 12.75L3 5.55L4.8 3.75L12 10.95L19.2 3.75L21 5.55L13.8 12.75L21 19.95L19.2 21.75L12 14.55L4.8 21.75Z"
                fill="#6E3230"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Search bar */}
      <div className="flex justify-start items-center w-full h-[44.5px] left-0 top-[44.5px] gap-[27px] px-4 py-[5px] bg-[#f5b3b5] border border-x-[#6d2b2f]">
        <div className="flex justify-start items-center relative gap-4">
          <svg
            width={22}
            height={23}
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[22px] h-[22px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M18.3337 10.8334V12.6667H7.33366V14.5H5.50033V12.6667H3.66699V10.8334H5.50033V9.00004H7.33366V10.8334H18.3337ZM9.16699 7.16671H7.33366V9.00004H9.16699V7.16671ZM9.16699 7.16671H11.0003V5.33337H9.16699V7.16671ZM9.16699 16.3334H7.33366V14.5H9.16699V16.3334ZM9.16699 16.3334H11.0003V18.1667H9.16699V16.3334Z"
              fill="#6E3230"
            />
          </svg>
          <svg
            width={22}
            height={23}
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[22px] h-[22px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M3.66699 10.8334V12.6667H14.667V14.5H16.5003V12.6667H18.3337V10.8334H16.5003V9.00004H14.667V10.8334H3.66699ZM12.8337 7.16671H14.667V9.00004H12.8337V7.16671ZM12.8337 7.16671H11.0003V5.33337H12.8337V7.16671ZM12.8337 16.3334H14.667V14.5H12.8337V16.3334ZM12.8337 16.3334H11.0003V18.1667H12.8337V16.3334Z"
              fill="#6E3230"
            />
          </svg>
          <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M8 15.75C6.04583 15.75 4.39062 15.0719 3.03437 13.7156C1.67812 12.3594 1 10.7042 1 8.75C1 6.79583 1.67812 5.14062 3.03437 3.78437C4.39062 2.42812 6.04583 1.75 8 1.75C9.00625 1.75 9.96875 1.95796 10.8875 2.37387C11.8063 2.78921 12.5938 3.38333 13.25 4.15625V2.625C13.25 2.37708 13.334 2.16913 13.502 2.00113C13.6694 1.83371 13.8771 1.75 14.125 1.75C14.3729 1.75 14.5806 1.83371 14.748 2.00113C14.916 2.16913 15 2.37708 15 2.625V7C15 7.24792 14.916 7.45558 14.748 7.623C14.5806 7.791 14.3729 7.875 14.125 7.875H9.75C9.50208 7.875 9.29442 7.791 9.127 7.623C8.959 7.45558 8.875 7.24792 8.875 7C8.875 6.75208 8.959 6.54412 9.127 6.37612C9.29442 6.20871 9.50208 6.125 9.75 6.125H12.55C12.0833 5.30833 11.4455 4.66667 10.6364 4.2C9.82671 3.73333 8.94792 3.5 8 3.5C6.54167 3.5 5.30208 4.01042 4.28125 5.03125C3.26042 6.05208 2.75 7.29167 2.75 8.75C2.75 10.2083 3.26042 11.4479 4.28125 12.4688C5.30208 13.4896 6.54167 14 8 14C9.00625 14 9.93608 13.7337 10.7895 13.2011C11.6423 12.6691 12.2802 11.9583 12.7031 11.0687C12.776 10.9083 12.8965 10.7736 13.0645 10.6645C13.2319 10.5548 13.4031 10.5 13.5781 10.5C13.9135 10.5 14.1653 10.6167 14.3333 10.85C14.5007 11.0833 14.5187 11.3458 14.3875 11.6375C13.8333 12.8771 12.9802 13.8722 11.8281 14.623C10.676 15.3743 9.4 15.75 8 15.75Z"
              fill="#6E3230"
            />
          </svg>
        </div>
        <SearchBar />
      </div>

      {/* Content */}
      <div className='overflow-y-scroll w-full h-full py-15 flex flex-col items-center rounded-b-[5px] bg-gradient-to-b from-[#e8fafa]/90 to-[#c9f0f5]/90 border border-[#6d2b2f] border-t-0 relative'>
        <div className="absolute top-0 right-0">
          <LanguageSelector />
        </div>
        <Loading />

        <motion.div
          className='hidden flex-col flex-wrap justify-center items-center'
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            display: "flex"
          }}
          transition={{ delay: loadingDuration, repeat: 0 }}
        >
          <Description />

          <motion.div
            className='flex flex-row flex-wrap gap-10 mt-10 justify-center items-center max-w-100'
          >
            {projects.map((project, index) => {
              const themeId = index % themes.length;
              const theme = themes[themeId];
              return <div key={`navigator-${index}`} className='relative' >
                <Separator />
                <div className="flex flex-col gap-8">
                  <ProjectContent project={project} index={index} colorButton={theme.color.buttons} colorNumber={theme.color.number} />
                </div>

                <img height={"auto"} className='w-12 absolute -right-10 top-[20%] rotate-25' src={theme.icons.first} alt="icon" />
                <img height={"auto"} className='w-12 absolute -left-[70px] bottom-4 -rotate-25' src={theme.icons.second} alt="icon" />
              </div>
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Navigator