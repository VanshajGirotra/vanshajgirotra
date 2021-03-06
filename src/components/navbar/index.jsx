import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { ThemeContext } from '../../context/themeContext'
import { FaSun, FaRegMoon, FaTerminal } from 'react-icons/fa'
import { themes } from '../../contants/theme'
import ScrollHelper from './scrollHelper'


const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const is_dark = theme === themes.dark;
  const nav_background = is_dark ? 'dark-background' : 'light-background'

  return (
    <>
      <div className={`flex px-5 justify-between py-5 fixed w-full z-10 border-gray-500 border-b ${nav_background}`}>
        <div>
          <span>
            <Link to="/"><FaTerminal className="text-2xl text-gray-500" /></Link>
          </span>
          <span>

          </span>
        </div>
        <div className="flex">
          {/* <Link to="/blog" className="">Blog</Link> */}
          <span onClick={toggleTheme}>{is_dark ? <FaRegMoon className="text-2xl md:text-3xl text-gray-500" /> : <FaSun className="text-2xl md:text-3xl text-gray-500" />}</span>
        </div>
      </div>
      <ScrollHelper />
    </>
  )
}

export { Navbar }