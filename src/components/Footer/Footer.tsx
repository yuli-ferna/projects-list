import { useTranslation } from 'react-i18next'

type Props = {}

const Footer = (props: Props) => {
  const { t } = useTranslation()
  return (
    <footer>
      <div className="text-[22px] text-left text-black">
        <p className='mb-4'>
          <span>
            {t("footer.builtWith")} <a className='underline' href="https://vitejs.dev/" target='_blank'>Vite</a>
          </span>
          <br />
          <span>
            {t("footer.styledWith")} <a className='underline' href="https://tailwindcss.com/" target='_blank'>TailwindCSS</a>
          </span>
          <br />
          <span>
            {t("footer.iconsFrom")}&nbsp;<a className='underline' href="https://streamlinehq.com/" target='_blank'>Streamlinehq.com</a>&nbsp;
          </span>
          <br />
          <span>
            {t("footer.licensedUnder")} <a className='underline' href="https://creativecommons.org/licenses/by/4.0/" target='_blank'>CC BY 4.0</a>
          </span>
        </p>
        <p>
          © {new Date().getFullYear()} {t("projects.title")}. {t("footer.allRightsReserved")}.
        </p>
      </div>
    </footer>
  )
}

export default Footer