import Description from "components/Description/Description"
import { LanguageSelector } from "components/LanguageSelector";
import ProjectContent from "components/ProjectContent/ProjectContent";
import Separator from "components/Separator/Separator";
import { project } from "utils"

interface Props {
  projects: project[];
}

const Navigator = ({ projects }: Props) => {
  return (
    <div className="flex justify-end items-end gap-[27px] p-2.5">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[823px] w-[1080px] relative overflow-hidden rounded-[5px] bg-gradient-to-b from-[#e8fafa]/90 to-[#c9f0f5]/90 border border-[#21242a]">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[89px] relative overflow-hidden gap-2.5 rounded-tl-[5px] rounded-tr-[5px] bg-[#fab8ba] border border-[#21242a]">
          <div className="flex justify-start items-center w-[1080px] h-[44.5px] absolute left-0 top-[44.5px] gap-[27px] px-4 py-2 bg-[#f5b3b5] border border-[#6d2b2f]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
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
            <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden gap-2.5 pr-[3px] bg-[#e0f2f4] border border-[#6e3230]">
              <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[30px] relative overflow-hidden gap-2.5 bg-[#fef7c3] border-t-0 border-r border-b-0 border-l-0 border-[#6e3230]">
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
            </div>
          </div>
          <div className="flex justify-between items-end w-[1080px] h-[44.5px] absolute left-0 top-0 px-2.5">
            <div className="flex-grow-0 flex-shrink-0 w-[929.33px] h-9 relative">
              <div className="flex justify-start items-end absolute left-0 top-0 rounded-tl-lg rounded-tr-lg border-t border-r border-b-0 border-l border-[#6e3230]">
                <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[234px] h-9 relative px-3 py-[7px] rounded-tl-lg rounded-tr-lg bg-white/[0.33]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[17px] relative gap-2.5">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[15.5px] h-[16.13px]"
                        preserveAspectRatio="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.28951 0.763575C3.76379 0.9588 1.61631 1.12962 1.5187 1.14182C1.23806 1.20283 0.98183 1.38585 0.859814 1.64209L0.75 1.86172L0.762202 7.1572L0.774403 12.4527L0.933024 12.7821C1.03064 12.9651 1.64071 13.8193 2.3118 14.6856C3.64177 16.4182 3.73938 16.5036 4.23965 16.5646C4.38607 16.5768 5.49641 16.528 6.67996 16.4548C7.87572 16.3816 9.80357 16.2596 10.9505 16.1986C15.8677 15.8935 15.6115 15.9179 15.9044 15.6739C16.2582 15.3811 16.2216 15.8691 16.246 9.42669C16.2582 3.97259 16.246 3.60654 16.1606 3.44792C16.0752 3.25269 15.9044 3.13068 13.6593 1.55668C12.1585 0.49514 12.0487 0.446334 11.3776 0.434132C11.0969 0.421931 8.80304 0.580551 6.28951 0.763575Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.28951 0.763575C3.76379 0.9588 1.61631 1.12962 1.5187 1.14182C1.23806 1.20283 0.98183 1.38585 0.859814 1.64209L0.75 1.86172L0.762202 7.1572L0.774403 12.4527L0.933024 12.7821C1.03064 12.9651 1.64071 13.8193 2.3118 14.6856C3.64177 16.4182 3.73938 16.5036 4.23965 16.5646C4.38607 16.5768 5.49641 16.528 6.67996 16.4548C7.87572 16.3816 9.80357 16.2596 10.9505 16.1986C15.8677 15.8935 15.6115 15.9179 15.9044 15.6739C16.2582 15.3811 16.2216 15.8691 16.246 9.42669C16.2582 3.97259 16.246 3.60654 16.1606 3.44792C16.0752 3.25269 15.9044 3.13068 13.6593 1.55668C12.1585 0.49514 12.0487 0.446334 11.3776 0.434132C11.0969 0.421931 8.80304 0.580551 6.28951 0.763575ZM11.9632 1.45906C12.1829 1.55668 13.7325 2.63041 13.9521 2.83784C14.0131 2.89885 14.0375 2.95986 14.0009 2.98426C13.9399 3.04527 4.33726 3.61874 4.05663 3.56994C3.93461 3.55773 3.75159 3.48452 3.64177 3.41132C3.20252 3.10628 2.11658 2.21556 2.11658 2.15455C2.11658 1.98373 2.07997 1.98373 6.35052 1.66649C7.16803 1.61768 8.5224 1.52007 9.3399 1.44686C11.1091 1.31265 11.6338 1.31265 11.9632 1.45906ZM15.0136 4.21662C15.0868 4.28983 15.1479 4.42405 15.1723 4.55826C15.1845 4.68028 15.1967 6.94977 15.1845 9.58531C15.1723 14.0999 15.1601 14.3927 15.0746 14.5147C15.0258 14.6002 14.9282 14.6856 14.8428 14.71C14.6354 14.7954 4.58129 15.3689 4.37387 15.3078C4.27625 15.2834 4.14204 15.198 4.08103 15.1248L3.95901 15.0028L3.94681 10.1222C3.93461 6.69354 3.94681 5.18054 3.98342 5.04633C4.00782 4.94871 4.09323 4.8267 4.15424 4.77789C4.23965 4.71688 4.83753 4.66808 6.88739 4.54606C8.32718 4.47285 10.5601 4.33863 11.829 4.25322C14.8794 4.0702 14.8672 4.0702 15.0136 4.21662Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.3168 5.88825C11.7678 5.92485 11.2797 5.97366 11.2309 6.01026C11.0601 6.09567 10.9625 6.24209 10.9381 6.40071C10.9259 6.55933 10.9747 6.58374 11.5237 6.65695L11.7556 6.68135V8.84103C11.7556 10.1222 11.7434 10.9641 11.7068 10.9397C11.6824 10.9153 10.9747 9.81715 10.1206 8.52379C9.26644 7.20602 8.55875 6.13228 8.54655 6.13228C8.53435 6.12008 7.98528 6.14448 7.31419 6.19329C6.49669 6.24209 6.04523 6.3031 5.95982 6.35191C5.8134 6.42512 5.64258 6.69355 5.64258 6.86437C5.64258 6.97419 5.8378 7.0352 6.24046 7.0352H6.46008V13.2336L6.10624 13.3434C5.85 13.4166 5.75239 13.4654 5.70359 13.5752C5.63038 13.7461 5.63038 13.8925 5.71579 13.8925C5.74019 13.8925 6.31366 13.8681 6.97255 13.8193C8.26592 13.7461 8.41233 13.7095 8.54655 13.441C8.59536 13.3678 8.63196 13.2824 8.63196 13.2458C8.63196 13.2336 8.44894 13.1726 8.24151 13.1238C8.02188 13.075 7.80226 13.014 7.75345 13.014C7.66804 12.9896 7.66804 12.8309 7.66804 10.6591V8.32856L9.20544 10.7323C10.816 13.258 11.0113 13.5508 11.2675 13.6728C11.5725 13.8315 12.3534 13.7217 12.7439 13.4654L12.8659 13.3922L12.8781 9.95137L12.8903 6.49833L13.1587 6.44952C13.476 6.38851 13.6224 6.24209 13.6224 5.98586C13.6224 5.82724 13.6102 5.81504 13.4638 5.82724C13.3784 5.82724 12.8537 5.86385 12.3168 5.88825Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-white">
                      Figma Design UI Kit
                    </p>
                  </div>
                  <svg
                    width={8}
                    height={9}
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                    preserveAspectRatio="none"
                  >
                    <g clip-path="url(#clip0_108_543)">
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
              <div className="flex justify-start items-end absolute left-[234px] top-0">
                <svg
                  width={8}
                  height={9}
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 8.5H8L8 0.5C8 4.91716 4.41859 8.49818 0 8.5Z"
                    fill="#6E3230"
                  />
                </svg>
                <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[234px] h-9 relative px-3 py-[7px] rounded-tl-lg rounded-tr-lg bg-[#6e3230]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                    <svg
                      width={16}
                      height={17}
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M15.2377 11.93H12.9527V11.165H13.7127V10.405H2.2877V11.165H3.0502V11.93H0.762695V16.5H15.2377V11.93ZM3.8077 11.165H12.1877V11.93H3.8077V11.165ZM14.4777 15.74H1.5227V12.69H14.4777V15.74ZM13.7127 1.26001H14.4777V10.405H13.7127V1.26001Z"
                        fill="#FFD1D1"
                      />
                      <path
                        d="M9.14277 13.4501H12.9528V14.2151H9.14277V13.4501ZM9.14277 5.83506H9.90277V6.59506H9.14277V5.83506ZM9.14277 4.31006H9.90277V5.07006H9.14277V4.31006ZM6.85777 6.59506H9.14277V7.35506H6.85777V6.59506ZM6.09277 5.83506H6.85777V6.59506H6.09277V5.83506ZM6.09277 4.31006H6.85777V5.07006H6.09277V4.31006Z"
                        fill="#FFD1D1"
                      />
                      <path
                        d="M3.04996 9.645H12.955V2.025H3.04996V9.645ZM3.80746 2.785H12.1875V8.88H3.80746V2.785ZM3.04746 13.45H4.57246V14.975H3.04746V13.45ZM2.28746 0.5H13.7125V1.26H2.28746V0.5ZM1.52246 1.26H2.28746V10.405H1.52246V1.26Z"
                        fill="#FFD1D1"
                      />
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-white">
                      My Task - ToDo
                    </p>
                  </div>
                  <svg
                    width={8}
                    height={9}
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                    preserveAspectRatio="none"
                  >
                    <g clip-path="url(#clip0_108_533)">
                      <path
                        d="M4.70696 4.49999L7.85351 1.35379C8.04883 1.15847 8.04883 0.841795 7.85351 0.64649C7.65819 0.45117 7.34151 0.45117 7.14621 0.64649L3.99999 3.79302L0.85379 0.64649C0.65847 0.45117 0.341795 0.45117 0.14649 0.64649C-0.0488144 0.841811 -0.0488301 1.15849 0.14649 1.35379L3.29302 4.49999L0.14649 7.64621C-0.0488301 7.84153 -0.0488301 8.15821 0.14649 8.35351C0.341811 8.54881 0.658485 8.54883 0.85379 8.35351L3.99999 5.20696L7.14619 8.35351C7.34151 8.54883 7.65819 8.54883 7.85349 8.35351C8.04881 8.15819 8.04881 7.84151 7.85349 7.64621L4.70696 4.49999Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_533">
                        <rect width={8} height={8} fill="white" transform="translate(0 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <svg
                  width={8}
                  height={9}
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 8.5H0L0 0.5C0 4.91716 3.58141 8.49818 8 8.5Z"
                    fill="#6E3230"
                  />
                </svg>
              </div>
              <div className="flex justify-start items-end absolute left-[484px] top-0 rounded-tl-lg rounded-tr-lg border-t border-r border-b-0 border-l border-[#6e3230]">
                <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[234px] h-9 relative px-3 py-[7px] rounded-tl-lg rounded-tr-lg bg-white/[0.33]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[17px] relative gap-2.5">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[15.5px] h-[16.13px]"
                        preserveAspectRatio="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.28951 0.763575C3.76379 0.9588 1.61631 1.12962 1.5187 1.14182C1.23806 1.20283 0.98183 1.38585 0.859814 1.64209L0.75 1.86172L0.762202 7.1572L0.774403 12.4527L0.933024 12.7821C1.03064 12.9651 1.64071 13.8193 2.3118 14.6856C3.64177 16.4182 3.73938 16.5036 4.23965 16.5646C4.38607 16.5768 5.49641 16.528 6.67996 16.4548C7.87572 16.3816 9.80357 16.2596 10.9505 16.1986C15.8677 15.8935 15.6115 15.9179 15.9044 15.6739C16.2582 15.3811 16.2216 15.8691 16.246 9.42669C16.2582 3.97259 16.246 3.60654 16.1606 3.44792C16.0752 3.25269 15.9044 3.13068 13.6593 1.55668C12.1585 0.49514 12.0487 0.446334 11.3776 0.434132C11.0969 0.421931 8.80304 0.580551 6.28951 0.763575Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.28951 0.763575C3.76379 0.9588 1.61631 1.12962 1.5187 1.14182C1.23806 1.20283 0.98183 1.38585 0.859814 1.64209L0.75 1.86172L0.762202 7.1572L0.774403 12.4527L0.933024 12.7821C1.03064 12.9651 1.64071 13.8193 2.3118 14.6856C3.64177 16.4182 3.73938 16.5036 4.23965 16.5646C4.38607 16.5768 5.49641 16.528 6.67996 16.4548C7.87572 16.3816 9.80357 16.2596 10.9505 16.1986C15.8677 15.8935 15.6115 15.9179 15.9044 15.6739C16.2582 15.3811 16.2216 15.8691 16.246 9.42669C16.2582 3.97259 16.246 3.60654 16.1606 3.44792C16.0752 3.25269 15.9044 3.13068 13.6593 1.55668C12.1585 0.49514 12.0487 0.446334 11.3776 0.434132C11.0969 0.421931 8.80304 0.580551 6.28951 0.763575ZM11.9632 1.45906C12.1829 1.55668 13.7325 2.63041 13.9521 2.83784C14.0131 2.89885 14.0375 2.95986 14.0009 2.98426C13.9399 3.04527 4.33726 3.61874 4.05663 3.56994C3.93461 3.55773 3.75159 3.48452 3.64177 3.41132C3.20252 3.10628 2.11658 2.21556 2.11658 2.15455C2.11658 1.98373 2.07997 1.98373 6.35052 1.66649C7.16803 1.61768 8.5224 1.52007 9.3399 1.44686C11.1091 1.31265 11.6338 1.31265 11.9632 1.45906ZM15.0136 4.21662C15.0868 4.28983 15.1479 4.42405 15.1723 4.55826C15.1845 4.68028 15.1967 6.94977 15.1845 9.58531C15.1723 14.0999 15.1601 14.3927 15.0746 14.5147C15.0258 14.6002 14.9282 14.6856 14.8428 14.71C14.6354 14.7954 4.58129 15.3689 4.37387 15.3078C4.27625 15.2834 4.14204 15.198 4.08103 15.1248L3.95901 15.0028L3.94681 10.1222C3.93461 6.69354 3.94681 5.18054 3.98342 5.04633C4.00782 4.94871 4.09323 4.8267 4.15424 4.77789C4.23965 4.71688 4.83753 4.66808 6.88739 4.54606C8.32718 4.47285 10.5601 4.33863 11.829 4.25322C14.8794 4.0702 14.8672 4.0702 15.0136 4.21662Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.3168 5.88825C11.7678 5.92485 11.2797 5.97366 11.2309 6.01026C11.0601 6.09567 10.9625 6.24209 10.9381 6.40071C10.9259 6.55933 10.9747 6.58374 11.5237 6.65695L11.7556 6.68135V8.84103C11.7556 10.1222 11.7434 10.9641 11.7068 10.9397C11.6824 10.9153 10.9747 9.81715 10.1206 8.52379C9.26644 7.20602 8.55875 6.13228 8.54655 6.13228C8.53435 6.12008 7.98528 6.14448 7.31419 6.19329C6.49669 6.24209 6.04523 6.3031 5.95982 6.35191C5.8134 6.42512 5.64258 6.69355 5.64258 6.86437C5.64258 6.97419 5.8378 7.0352 6.24046 7.0352H6.46008V13.2336L6.10624 13.3434C5.85 13.4166 5.75239 13.4654 5.70359 13.5752C5.63038 13.7461 5.63038 13.8925 5.71579 13.8925C5.74019 13.8925 6.31366 13.8681 6.97255 13.8193C8.26592 13.7461 8.41233 13.7095 8.54655 13.441C8.59536 13.3678 8.63196 13.2824 8.63196 13.2458C8.63196 13.2336 8.44894 13.1726 8.24151 13.1238C8.02188 13.075 7.80226 13.014 7.75345 13.014C7.66804 12.9896 7.66804 12.8309 7.66804 10.6591V8.32856L9.20544 10.7323C10.816 13.258 11.0113 13.5508 11.2675 13.6728C11.5725 13.8315 12.3534 13.7217 12.7439 13.4654L12.8659 13.3922L12.8781 9.95137L12.8903 6.49833L13.1587 6.44952C13.476 6.38851 13.6224 6.24209 13.6224 5.98586C13.6224 5.82724 13.6102 5.81504 13.4638 5.82724C13.3784 5.82724 12.8537 5.86385 12.3168 5.88825Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-white">
                      Figma Design UI Kit
                    </p>
                  </div>
                  <svg
                    width={8}
                    height={9}
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-2 h-2 relative"
                    preserveAspectRatio="none"
                  >
                    <g clip-path="url(#clip0_108_523)">
                      <path
                        d="M4.70696 4.49999L7.85351 1.35379C8.04883 1.15847 8.04883 0.841795 7.85351 0.64649C7.65819 0.45117 7.34151 0.45117 7.14621 0.64649L3.99999 3.79302L0.85379 0.64649C0.65847 0.45117 0.341795 0.45117 0.14649 0.64649C-0.0488144 0.841811 -0.0488301 1.15849 0.14649 1.35379L3.29302 4.49999L0.14649 7.64621C-0.0488301 7.84153 -0.0488301 8.15821 0.14649 8.35351C0.341811 8.54881 0.658485 8.54883 0.85379 8.35351L3.99999 5.20696L7.14619 8.35351C7.34151 8.54883 7.65819 8.54883 7.85349 8.35351C8.04881 8.15819 8.04881 7.84151 7.85349 7.64621L4.70696 4.49999Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_523">
                        <rect width={8} height={8} fill="white" transform="translate(0 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
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
        <div className='overflow-scroll w-full h-full flex flex-col items-center'>
          <LanguageSelector />
          <Description />
          <div className='flex flex-row flex-wrap gap-10 mt-10 justify-center max-w-100'>
            {projects.map((project, index) => {
              return <div key={`navigator-${index}`} >
                <Separator />
                <div className="flex flex-col gap-8">
                  <ProjectContent  project={project} index={index} />
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigator