import * as motion from "motion/react-client"
import { useTranslation } from 'react-i18next';
import '../styles/global.css'
import ChatMessage from './ChatMessage';
import Description from './Description/Description';
import { LanguageSelector } from './LanguageSelector';
import MobileBar from './MobileBar/MobileBar';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import ProjectItemMobile from './ProjectItemMobile/ProjectItemMobile';
import Separator from './Separator/Separator';
import Title from './Title/Title';
import Loading from './Loading/Loading';
import Navigator from './Navigator/Navigator';

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useEffect, useRef } from 'react';
import Menu from './Menu/Menu';
import QuickAccess from './QuickAccess/QuickAccess';
import { loadingDuration } from "utils";
gsap.registerPlugin(Draggable);

const flower = <svg className='absolute -top-[30px] right-[224px] z-2' width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_77_47)">
    <path d="M52.0148 28.2424C51.4901 28.2966 50.9713 28.3976 50.4645 28.544C50.7698 28.1138 51.036 27.6572 51.26 27.1796C51.6985 26.2227 51.9442 25.1887 51.9831 24.1368C52.022 23.0848 51.8533 22.0355 51.4867 21.0488C51.1201 20.062 50.5627 19.1572 49.8464 18.3858C49.1301 17.6145 48.2688 16.9918 47.3119 16.5533C46.3549 16.1148 45.3209 15.8691 44.269 15.8302C43.2171 15.7913 42.1678 15.96 41.181 16.3266C40.1943 16.6932 39.2894 17.2506 38.5181 17.9669C37.7467 18.6832 37.124 19.5445 36.6855 20.5014C36.4718 20.9832 36.3001 21.4825 36.1724 21.9939C35.9513 21.5151 35.6889 21.0566 35.388 20.6235C34.1571 18.8902 32.288 17.717 30.192 17.3618C28.096 17.0067 25.9448 17.4987 24.2115 18.7297C22.4783 19.9606 21.3051 21.8297 20.9499 23.9257C20.5948 26.0217 21.0868 28.1729 22.3178 29.9062C22.6276 30.3329 22.9741 30.7317 23.3532 31.0982C22.8284 31.0503 22.3004 31.0479 21.7751 31.091C19.6585 31.2905 17.7079 32.3226 16.3523 33.9603C14.9968 35.5979 14.3473 37.707 14.5467 39.8236C14.7462 41.9401 15.7783 43.8907 17.4159 45.2463C19.0536 46.6019 21.1627 47.2514 23.2793 47.0519C23.804 46.9978 24.3228 46.8968 24.8296 46.7504C24.5243 47.1806 24.2581 47.6372 24.0341 48.1148C23.3732 49.5561 23.1547 51.161 23.4061 52.7265C23.6575 54.292 24.3676 55.7478 25.4465 56.9097C26.5254 58.0717 27.9246 58.8875 29.4673 59.2541C31.0099 59.6206 32.6266 59.5214 34.1129 58.969C34.7738 58.7233 35.3999 58.3926 35.9754 57.9851C37.1188 57.1713 38.0271 56.0702 38.6085 54.793C38.8223 54.3112 38.994 53.8119 39.1216 53.3005C39.3428 53.7793 39.6052 54.2378 39.906 54.6709C41.137 56.4042 43.0061 57.5774 45.1021 57.9325C47.1981 58.2877 49.3493 57.7957 51.0825 56.5647C52.8158 55.3338 53.989 53.4647 54.3442 51.3687C54.6993 49.2727 54.2073 47.1214 52.9763 45.3882C52.6665 44.9615 52.32 44.5626 51.9408 44.1961C52.4657 44.2441 52.9937 44.2465 53.519 44.2034C54.916 44.0736 56.254 43.5776 57.3979 42.7654C57.9722 42.3562 58.4908 41.874 58.9405 41.3309C59.9517 40.1096 60.5779 38.6158 60.74 37.0385C60.9021 35.4613 60.5928 33.8713 59.8511 32.4699C59.1095 31.0684 57.9689 29.9184 56.5736 29.1653C55.1783 28.4122 53.5909 28.0899 52.0124 28.239L52.0148 28.2424ZM38.9864 21.5554C39.2702 20.8768 39.6876 20.2621 40.2137 19.7481C40.7399 19.234 41.3641 18.8311 42.0492 18.5632C42.7343 18.2953 43.4663 18.168 44.2016 18.1888C44.9369 18.2096 45.6605 18.3781 46.3293 18.6843C46.9981 18.9905 47.5985 19.4282 48.0948 19.9712C48.591 20.5142 48.973 21.1514 49.2179 21.8451C49.4628 22.5387 49.5656 23.2745 49.5203 24.0087C49.475 24.7429 49.2825 25.4605 48.9542 26.1187C48.4698 27.1743 47.1395 28.9988 43.6066 31.8493L43.3492 32.0115C41.9717 30.6219 40.1335 29.7842 38.1811 29.6562L38.1346 29.3503C37.9899 24.8116 38.5032 22.6127 38.9864 21.5554ZM40.8227 42.1186C39.9383 42.7467 38.8876 43.0984 37.8033 43.1293C36.7191 43.1603 35.65 42.8689 34.7313 42.2923C33.8126 41.7156 33.0855 40.8794 32.642 39.8895C32.1985 38.8996 32.0585 37.8004 32.2397 36.731C32.421 35.6615 32.9152 34.6698 33.6601 33.8812C34.4049 33.0927 35.3668 32.5427 36.4242 32.3009C37.4816 32.059 38.587 32.1362 39.6006 32.5225C40.6141 32.9089 41.4904 33.5872 42.1185 34.4715C42.9607 35.6574 43.2973 37.1293 43.0543 38.5634C42.8113 39.9975 42.0086 41.2764 40.8227 42.1186ZM25.6772 20.7934C26.8631 19.9512 28.335 19.6145 29.7691 19.8575C31.2032 20.1005 32.4821 20.9033 33.3243 22.0892C33.9973 23.0368 34.9123 25.101 35.6149 29.5875C35.6191 29.6881 35.6215 29.7898 35.6269 29.8921C33.7265 30.3837 32.0737 31.5576 30.9835 33.1899L30.6986 33.0766C26.7021 30.932 25.0545 29.3881 24.3815 28.4405C23.5392 27.2546 23.2026 25.7827 23.4456 24.3486C23.6886 22.9145 24.4913 21.6356 25.6772 20.7934ZM23.0421 44.5323C21.6218 44.618 20.2237 44.1484 19.1431 43.2226C18.0626 42.2968 17.3842 40.9873 17.2511 39.5706C17.1181 38.1539 17.5409 36.741 18.4302 35.6302C19.3195 34.5194 20.6057 33.7978 22.0172 33.6176C23.1746 33.5097 25.4198 33.7494 29.6541 35.3836L29.9276 35.5283C29.4068 37.4163 29.5952 39.4296 30.4572 41.1882L30.2193 41.3779C26.3592 43.7676 24.1983 44.4226 23.0421 44.5323ZM36.3076 53.739C35.6726 55.0123 34.5675 55.989 33.2257 56.4627C31.884 56.9364 30.4107 56.8702 29.1169 56.2778C27.8231 55.6855 26.8102 54.6136 26.292 53.2884C25.7738 51.9632 25.791 50.4884 26.3399 49.1756C26.8243 48.1201 28.1546 46.2956 31.6875 43.445L31.9449 43.2829C33.3224 44.6724 35.1606 45.5101 37.113 45.6382L37.1595 45.9441C37.3041 50.4828 36.7909 52.6817 36.3076 53.739ZM49.6168 54.501C49.0296 54.918 48.3661 55.2153 47.664 55.3759C46.9619 55.5365 46.235 55.5572 45.5249 55.4369C44.8148 55.3165 44.1354 55.0575 43.5254 54.6746C42.9154 54.2917 42.3868 53.7924 41.9698 53.2052C41.2968 52.2576 40.3818 50.1934 39.6792 45.7069C39.675 45.6063 39.6726 45.5046 39.6672 45.4023C41.5675 44.9107 43.2204 43.7368 44.3106 42.1045L44.5955 42.2178C48.592 44.3624 50.2396 45.9063 50.9126 46.8539C51.3296 47.4411 51.6269 48.1047 51.7875 48.8068C51.9481 49.5089 51.9688 50.2357 51.8485 50.9458C51.7282 51.6559 51.4691 52.3353 51.0862 52.9453C50.7033 53.5553 50.204 54.084 49.6168 54.501ZM58.2277 35.708C58.2954 36.4251 58.2211 37.1486 58.0092 37.837C57.7973 38.5255 57.4518 39.1654 56.9925 39.7203C56.5333 40.2752 55.9692 40.7342 55.3325 41.0711C54.6958 41.408 53.999 41.6161 53.2818 41.6837C52.1244 41.7916 49.8791 41.5519 45.6448 39.9176L45.3713 39.7729C45.8922 37.885 45.7038 35.8716 44.8418 34.113L45.087 33.9156C48.9423 31.519 51.1032 30.864 52.2594 30.7543C52.9765 30.6877 53.6998 30.7629 54.3878 30.9758C55.0759 31.1887 55.7153 31.535 56.2695 31.995C56.8237 32.455 57.2819 33.0197 57.6179 33.6568C57.9539 34.2938 58.1611 34.9908 58.2277 35.708Z" fill="#FEF7C3" />
  </g>
  <defs>
    <filter id="filter0_d_77_47" x="0" y="0" width="77.2942" height="77.2942" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dx="2" dy="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_77_47" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_77_47" result="shape" />
    </filter>
  </defs>
</svg>;
const mail = <svg className='absolute top-[94px] right-0' width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_77_19)">
    <g filter="url(#filter0_d_77_19)">
      <path d="M55.9912 40.8491L53.6852 39.9639L52.7942 42.2851L55.1002 43.1702L48.0014 61.6633L50.3225 62.5543L60.0826 37.1282L57.7615 36.2372L55.9912 40.8491Z" fill="#FEF7C3" />
      <path d="M45.6953 60.7781L48.0013 61.6632L47.1161 63.9692L44.8101 63.084L45.6953 60.7781Z" fill="#FEF7C3" />
      <path d="M56.3464 33.031L58.6524 33.9162L57.7614 36.2373L55.4554 35.3521L56.3464 33.031Z" fill="#FEF7C3" />
      <path d="M43.3895 59.8929L41.0684 59.0019L40.1832 61.3079L10.1301 49.7716L11.0152 47.4656L8.7093 46.5804L7.82413 48.8864L5.50301 47.9954L4.61202 50.3165L43.9193 65.4051L44.8103 63.084L42.5043 62.1989L43.3895 59.8929Z" fill="#FEF7C3" />
      <path d="M39.6533 55.7957L41.9593 56.6808L41.0683 59.0019L38.7623 58.1168L39.6533 55.7957Z" fill="#FEF7C3" />
      <path d="M38.2175 52.5986L40.5386 53.4896L39.6535 55.7956L37.3324 54.9046L38.2175 52.5986Z" fill="#FEF7C3" />
      <path d="M42.655 41.0386L47.2821 42.8147L46.3911 45.1359L41.764 43.3597L42.655 41.0386Z" fill="#FEF7C3" />
      <path d="M36.7966 49.4077L39.1026 50.2929L38.2174 52.5988L35.9115 51.7137L36.7966 49.4077Z" fill="#FEF7C3" />
      <path d="M35.3818 46.2014L37.6878 47.0866L36.7968 49.4077L34.4908 48.5225L35.3818 46.2014Z" fill="#FEF7C3" />
      <path d="M37.1521 41.5894L41.764 43.3597L40.8788 45.6656L36.2669 43.8953L37.1521 41.5894Z" fill="#FEF7C3" />
      <path d="M47.8032 13.8423L50.1092 14.7275L49.224 17.0334L46.9181 16.1482L47.8032 13.8423Z" fill="#FEF7C3" />
      <path d="M42.4805 27.7084L37.8535 25.9322L36.9625 28.2533L34.6565 27.3682L35.5475 25.047L30.9205 23.2709L30.0295 25.592L27.7084 24.701L25.938 29.3129L28.2591 30.2039L27.3682 32.525L29.6741 33.4102L28.7889 35.7161L31.11 36.6071L30.2191 38.9282L32.525 39.8134L33.416 37.4923L35.7219 38.3774L36.6071 36.0715L38.9282 36.9625L39.8192 34.6414L42.1252 35.5265L43.8955 30.9146L41.5895 30.0295L42.4805 27.7084Z" fill="#FEF7C3" />
      <path d="M24.7068 39.458L36.2668 43.8955L35.3817 46.2014L23.8216 41.7639L24.7068 39.458Z" fill="#FEF7C3" />
      <path d="M37.1284 7.09888L48.6885 11.5364L47.8033 13.8423L36.2432 9.40482L37.1284 7.09888Z" fill="#FEF7C3" />
      <path d="M21.5005 40.8728L23.8216 41.7638L22.9306 44.0849L20.6095 43.1939L21.5005 40.8728Z" fill="#FEF7C3" />
      <path d="M20.9648 35.3757L25.5919 37.1519L24.7067 39.4578L20.0797 37.6817L20.9648 35.3757Z" fill="#FEF7C3" />
      <path d="M33.9221 8.51367L36.2432 9.40466L35.3581 11.7106L33.037 10.8196L33.9221 8.51367Z" fill="#FEF7C3" />
      <path d="M18.3037 42.3088L20.6097 43.194L19.7245 45.5L17.4185 44.6148L18.3037 42.3088Z" fill="#FEF7C3" />
      <path d="M15.1125 43.7295L17.4185 44.6147L16.5333 46.9206L14.2274 46.0354L15.1125 43.7295Z" fill="#FEF7C3" />
      <path d="M17.2288 31.2786L21.8558 33.0547L20.9648 35.3758L16.3378 33.5997L17.2288 31.2786Z" fill="#FEF7C3" />
      <path d="M11.9062 45.1445L14.2274 46.0355L13.3364 48.3566L11.0153 47.4656L11.9062 45.1445Z" fill="#FEF7C3" />
      <path d="M15.8081 28.0875L13.487 27.1965L12.6018 29.5024L17.2289 31.2786L24.3277 12.7855L54.3808 24.3219L47.282 42.8149L51.9091 44.5911L52.7942 42.2851L50.4883 41.4L54.0406 32.1458L56.3466 33.031L57.2317 30.7251L54.9258 29.8399L57.5871 22.9069L50.6389 20.2398L51.5299 17.9186L49.224 17.0335L48.333 19.3546L32.1459 13.1409L33.0369 10.8198L30.7309 9.93465L29.8399 12.2558L22.9069 9.59443L20.2456 16.5274L17.9245 15.6364L17.0393 17.9424L19.3604 18.8334L15.8081 28.0875Z" fill="#FEF7C3" />
      <path d="M4.08228 44.8042L6.38822 45.6894L5.50305 47.9953L3.19711 47.1101L4.08228 44.8042Z" fill="#FEF7C3" />
      <path d="M14.7334 17.0571L17.0393 17.9423L16.1483 20.2634L13.8424 19.3782L14.7334 17.0571Z" fill="#FEF7C3" />
      <path d="M11.181 26.3113L13.4869 27.1965L14.3779 24.8754L12.072 23.9902L13.8423 19.3783L11.5364 18.4932L1.77623 43.9192L4.08217 44.8044L11.181 26.3113Z" fill="#FEF7C3" />
    </g>
  </g>
  <defs>
    <filter id="filter0_d_77_19" x="1.77612" y="7.09888" width="58.3064" height="60.3062" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_77_19" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_77_19" result="shape" />
    </filter>
    <clipPath id="clip0_77_19">
      <rect width="52" height="52" fill="white" transform="translate(18.6353) rotate(21)" />
    </clipPath>
  </defs>
</svg>;

function App() {
  const { t } = useTranslation();
  const constraintsRef = useRef<HTMLDivElement>(null)

  const projects = t("projects.list", { returnObjects: true }) as any[];

  useEffect(() => {
    Draggable.create(".navigator", {
      type: "x,y",
      bounds: constraintsRef.current,
      edgeResistance: 1,
      inertia: false,
      dragClickables: false
    });
  }, [constraintsRef]);
  return (<>
    {/* Background */}
    <div className='background-home fixed top-0 w-screen h-screen' />
    {/* Mobile */}
    <div className="flex flex-col gap-5 px-2 pb-20 justify-center items-center relative lg:hidden">
      {/* {t("underConstruction.project")} */}
      <MobileBar />
      <Title />
      <div className="flex flex-col gap-y-4 w-full max-w-[350px] relative w-max-[360px]">
        <div className='relative'>
          {flower}
          <ChatMessage messageType='send' text={t("projects.hi")} />
        </div>
        <a href={t("contact.links.gmail.link")} target='_blank'>
          <ChatMessage messageType='received' text={t("projects.contactMe")} bold />
        </a>
        {mail}
        <ChatMessage messageType='received' text={t("projects.changeLang")} />
        <LanguageSelector />
      </div>
      <Separator />
      <Loading />
      <motion.div
        className="hidden flex-col flex-wrap gap-10 justify-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          display: "flex"
        }}
        transition={{ delay: loadingDuration, repeat: 0 }}
      >
        <Description />
        <Separator />

        <motion.div
          className='flex flex-row flex-wrap gap-10 justify-center'>
          {projects.map((project, index) => <ProjectItemMobile key={index} project={project} index={index} />)}
        </motion.div>
      </motion.div>
      <NavbarMobile />
      {/* <UnderConstruction /> */}
    </div>
    {/* Desktop */}
    <div ref={constraintsRef} className='hidden lg:block relative w-full h-screen'>
      <div className='flex justify-around items-start pt-[7px]'>
        <div className='flex flex-col justify-center items-center'>
          <Title />
          <div className='flex flex-row flex-wrap justify-center max-w-[200px] gap-10'>
            <QuickAccess name='Portfolio' icon='./icons/book.svg' href={t("projects.portfolio")} />
            <QuickAccess name='Portfolio' icon='./icons/arcade.svg' href={t("projects.portfolio")} />
            <QuickAccess name='Portfolio' icon='./icons/gift.svg' href={t("projects.portfolio")} />
            <QuickAccess name='Portfolio' icon='./icons/file.svg' href={t("projects.portfolio")} />
          </div>
        </div>
        <Navigator projects={projects} />
        <div className='absolute bottom-0 w-full'>
          <Menu />
        </div>
      </div>
    </div>
  </>)
}

export default App
