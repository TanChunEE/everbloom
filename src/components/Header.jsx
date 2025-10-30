import Magnet from '../reactbits.dev/Magnet'
import NavBtn from './NavBtn'
import { Menu, Phone } from 'lucide-react'

const Header = () => {

  return (
    <header className='fixed border-b border-b-zinc-300 bg-white/50 backdrop-blur-lg min-w-full py-6 lg:py-7 px-4 sm:px-8 max-w-7xl overflow-x-clip z-99'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='text-3xl impact relative uppercase tracking-tight text-zinc-900'>
          Everbloom <sup className='absolute font-thin text-xs'>TM</sup>
        </div>

        {/* Desktop nav */}
        <nav className='hidden lg:flex items-center space-x-8'>
          <NavBtn hoverText='Home' active>Home</NavBtn>
          <NavBtn hoverText='About'>About</NavBtn>
          <NavBtn hoverText='Gallery'>Gallery</NavBtn>
          <NavBtn hoverText='Service'>Service</NavBtn>

          <button className='flex items-center space-x-2 bg-zinc-900 text-white text-sm py-4 px-6 rounded-full cursor-pointer transition-all duration-150 ease-in ml-4 hover:bg-transparent border border-zinc-900 hover:text-zinc-900 hover:animate-wiggle'>
            <Phone size={16} />
            <span>Contact Us</span>
          </button>
        </nav>

        {/* Mobile menu */}
        <div className='lg:hidden'>
          <Menu className='size-10 text-zinc-900' />
        </div>

      </div>
    </header>
  )
}

export default Header