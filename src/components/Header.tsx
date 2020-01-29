import React from "react"

import { useIntl, Link } from "gatsby-plugin-intl"

import LanguagSwitcher from "./Switcher"

const MENU_LINKS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Projects",
    to: "/projects",
  },
]

const Header = ({ toggle }: { toggle: () => void }) => {
  const intl = useIntl()
  return (
    <>
      <header
        className="cd-header px-2 w-full md:w-11/12"
        onBlur={() => toggle}
      >
        <div className="header-wrapper flex justify-between">
          <div className="nav-but-wrap">
            <div className="menu-icon hover-target" onClick={toggle}>
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
          <LanguagSwitcher />
        </div>
      </header>

      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            {MENU_LINKS.map(menu => (
              <li className="nav__list-item" key={menu.text}>
                <Link
                  to={menu.to}
                  className="hover-target"
                  activeClassName="active-nav"
                >
                  {intl.formatMessage({ id: menu.text })}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
