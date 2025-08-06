import { useTranslation } from "react-i18next";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Mail = ({ width = 54, height = 54, color = "#474164" }: Props) => {
  const { t } = useTranslation()
  return (
    <a href={t("contact.links.gmail.link")} target="_blank">
      <svg
        width={width}
        height={height}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clipPath="url(#clip0_77_281)">
          <path
            d="M51.435 20.5706V18.0056H48.8531V15.4238H46.2881V10.2938H43.7231V30.8644H46.2881V28.2825H48.8531V25.7175H51.435V48.8531H54V20.5706H51.435Z"
            fill={color}
          />
          <path d="M48.853 48.8531H51.4349V51.435H48.853V48.8531Z" fill={color} />
          <path d="M5.14697 51.435H48.8532V54H5.14697V51.435Z" fill={color} />
          <path d="M41.1411 30.8644H43.723V33.4294H41.1411V30.8644Z" fill={color} />
          <path d="M38.5762 43.7231H41.1412V46.2881H38.5762V43.7231Z" fill={color} />
          <path d="M38.5762 33.4294H41.1412V35.9944H38.5762V33.4294Z" fill={color} />
          <path d="M35.9941 41.1412H38.576V43.7231H35.9941V41.1412Z" fill={color} />
          <path d="M35.9941 35.9944H38.576V38.5763H35.9941V35.9944Z" fill={color} />
          <path d="M35.9941 18.0056H38.576V25.7175H35.9941V18.0056Z" fill={color} />
          <path d="M33.4292 15.4238H35.9942V18.0056H33.4292V15.4238Z" fill={color} />
          <path d="M18.0059 38.5762H35.9946V41.1412H18.0059V38.5762Z" fill={color} />
          <path d="M30.8643 25.7175H35.9943V28.2825H30.8643V25.7175Z" fill={color} />
          <path d="M30.8642 18.0056H23.1523V20.5706H28.2823V25.7175H30.8642V18.0056Z" fill={color} />
          <path d="M23.1523 25.7175H28.2823V28.2825H23.1523V25.7175Z" fill={color} />
          <path d="M20.5708 12.8588H33.4296V15.4238H20.5708V12.8588Z" fill={color} />
          <path d="M20.5708 30.8644H33.4296V33.4294H20.5708V30.8644Z" fill={color} />
          <path d="M20.5708 20.5706H23.1527V25.7175H20.5708V20.5706Z" fill={color} />
          <path d="M18.0059 28.2825H20.5709V30.8643H18.0059V28.2825Z" fill={color} />
          <path d="M18.0059 15.4238H20.5709V18.0056H18.0059V15.4238Z" fill={color} />
          <path d="M15.4238 41.1412H18.0057V43.7231H15.4238V41.1412Z" fill={color} />
          <path d="M15.4238 35.9944H18.0057V38.5763H15.4238V35.9944Z" fill={color} />
          <path d="M15.4238 18.0056H18.0057V28.2825H15.4238V18.0056Z" fill={color} />
          <path d="M12.8589 43.7231H15.4239V46.2881H12.8589V43.7231Z" fill={color} />
          <path d="M12.8589 33.4294H15.4239V35.9944H12.8589V33.4294Z" fill={color} />
          <path
            d="M43.7233 10.2937V7.71187H38.5764V5.14687H35.9946V2.565H33.4296V0H20.5708V2.565H18.0058V5.14687H15.4239V7.71187H10.2939V10.2937H43.7233Z"
            fill={color}
          />
          <path d="M10.2939 30.8644H12.8589V33.4294H10.2939V30.8644Z" fill={color} />
          <path d="M2.56494 48.8531H5.14682V51.435H2.56494V48.8531Z" fill={color} />
          <path
            d="M2.565 25.7175H5.14687V28.2825H7.71187V30.8644H10.2937V10.2938H7.71187V15.4238H5.14687V18.0056H2.565V20.5706H0V48.8531H2.565V25.7175Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_77_281">
            <rect width={54} height={54} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  )
}

export default Mail