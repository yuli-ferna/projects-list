import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import i18next from 'i18next'
import { useIsMobile } from 'hook/useMediaQuerie'
import ChatMessage from 'components/ChatMessage'

const getLocaleDisplayName = (locale: string, displayLocale?: string) => {
  const displayName = new Intl.DisplayNames([displayLocale || locale], {
    type: 'language',
  }).of(locale)!
  return displayName.charAt(0).toLocaleUpperCase() + displayName.slice(1)
}

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const isMobile = useIsMobile()
  // const localesAndNames = useMemo(() => {
  //   return LANGUAGES.map((locale) => ({
  //     locale,
  //     name: getLocaleDisplayName(locale),
  //   }))
  // }, [])

  const languageChanged = useCallback(async (locale: any) => {
    i18next.changeLanguage(locale)
  }, [])

  const handleChange = () => {
    const lang = currentLanguage === "en" ? "es" : "en";
    languageChanged(lang)
  }

  const { resolvedLanguage: currentLanguage } = i18n

  return (<>
    {!isMobile ? <div
      className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-tl-xl rounded-tr-xl rounded-bl-[10px] rounded-br-xl bg-[#fef7c3] border border-[#21242a] w-15 h-15 cursor-pointer justify-self-end m-5 retro-shadow"
      onClick={handleChange}
    >
      <p className="flex-grow-0 flex-shrink-0 text-4xl text-left text-[#21242a] uppercase">{isMobile ? currentLanguage && getLocaleDisplayName(currentLanguage) : currentLanguage}</p>
    </div> :
      <span
        onClick={handleChange}
      >
        <ChatMessage text={currentLanguage ? getLocaleDisplayName(currentLanguage) : ""} bold />
      </span>
    }
  </>)
}

export { LanguageSelector }
