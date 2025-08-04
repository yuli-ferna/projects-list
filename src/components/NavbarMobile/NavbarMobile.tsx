import Github from 'components/Icons/Github'
import Linkedin from 'components/Icons/Linkedin'
import Mail from 'components/Icons/Mail'

type Props = {}

const NavbarMobile = (props: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center w-fit mx-auto mb-2 backdrop-blur-2xl items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-[40px] px-3 py-1.5 bg-white/10 border-2 border-black">
      <Linkedin />
      <Github />
      <Mail />
    </div>
  )
}

export default NavbarMobile