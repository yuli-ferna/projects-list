import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import i18next from 'i18next'
import ChatMessage from 'components/ChatMessage'

const getLocaleDisplayName = (locale: string, displayLocale?: string) => {
  const displayName = new Intl.DisplayNames([displayLocale || locale], {
    type: 'language',
  }).of(locale)!
  return displayName.charAt(0).toLocaleUpperCase() + displayName.slice(1)
}

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const languageChanged = useCallback(async (locale: any) => {
    i18next.changeLanguage(locale)
  }, [])

  const handleChange = () => {
    const lang = currentLanguage === "en" ? "es" : "en";
    languageChanged(lang)
  }

  const { resolvedLanguage: currentLanguage } = i18n

  return (<>
    <div
      className="hidden lg:flex justify-center items-center relative gap-2.5 p-2.5 rounded-tl-xl rounded-tr-xl rounded-bl-[10px] rounded-br-xl bg-[#fef7c3] border border-[#21242a] w-12 h-12 cursor-pointer justify-self-end m-5 retro-shadow"
      onClick={handleChange}
    >
      <p className="text-3xl text-left text-[#21242a]">{currentLanguage}</p>
    </div> 
      <span
        className='lg:hidden'
        onClick={handleChange}
      >
        <ChatMessage text={currentLanguage ? getLocaleDisplayName(currentLanguage) : ""} bold />
      </span>
  </>)
}

export { LanguageSelector }
