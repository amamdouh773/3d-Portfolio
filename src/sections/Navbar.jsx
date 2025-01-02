import { useState } from 'react'
import { navLinks } from '../constants'

const NavItems = () => {
  return (
    <ul className='nav-ul'>
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a' onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(prevIsOpen => !prevIsOpen)
  return (
    <header className='top-0 right-0 left-0 z-50 fixed bg-black/90'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex justify-between items-center mx-auto py-5 c-space'>
          <a href='/'>
            <img src='assets/Ahmed-logo.png' alt='logo' className='w-12 h-12' />
            <p className='text-white'>Ahmed</p>
          </a>
          <button
            onClick={toggleMenu}
            className='flex sm:hidden focus:outline-none'
            aria-label='Toggle Menu'
          >
            <img
              src={`${isOpen ? 'assets/close.svg' : 'assets/menu.svg'}`}
              alt='toggleMenu'
              className='w-6 h-6'
            />
          </button>
          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
