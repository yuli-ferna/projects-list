import { useTranslation } from "react-i18next";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Linkedin = ({ width = 54, height = 54, color = "#474164" }: Props) => {
  const { t } = useTranslation()
  return (
    <a href={t("contact.links.linkedin.link")} target="_blank">
      <svg
        width={width}
        height={height}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clipPath="url(#clip0_77_279)">
          <path d="M51.418 5.14685H53.9998V48.8531H51.418V5.14685Z" fill={color} />
          <path d="M48.853 48.8531H51.418V51.435H48.853V48.8531Z" fill={color} />
          <path d="M48.853 2.565H51.418V5.14688H48.853V2.565Z" fill={color} />
          <path d="M46.2715 7.71185H48.8534V46.2881H46.2715V7.71185Z" fill={color} />
          <path d="M5.12988 51.435H48.853V54H5.12988V51.435Z" fill={color} />
          <path d="M7.71191 46.2881H46.2713V48.8531H7.71191V46.2881Z" fill={color} />
          <path
            d="M38.5595 25.7175H35.9945V23.1356H30.8476V25.7175H28.2826V23.1356H23.1357V38.5762H28.2826V30.8644H30.8476V28.2825H33.4295V30.8644H35.9945V38.5762H41.1414V28.2825H38.5595V25.7175Z"
            fill={color}
          />
          <path d="M12.8418 23.1356H17.9887V38.5762H12.8418V23.1356Z" fill={color} />
          <path d="M12.8418 15.4238H17.9887V20.5706H12.8418V15.4238Z" fill={color} />
          <path d="M7.71191 5.14685H46.2713V7.71185H7.71191V5.14685Z" fill={color} />
          <path d="M5.12988 0H48.853V2.565H5.12988V0Z" fill={color} />
          <path d="M5.12988 7.71185H7.71176V46.2881H5.12988V7.71185Z" fill={color} />
          <path d="M2.56494 48.8531H5.12994V51.435H2.56494V48.8531Z" fill={color} />
          <path d="M2.56494 2.565H5.12994V5.14688H2.56494V2.565Z" fill={color} />
          <path d="M0 5.14685H2.565V48.8531H0V5.14685Z" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0_77_279">
            <rect width={54} height={54} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  )
}

export default Linkedin