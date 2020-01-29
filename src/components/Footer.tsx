import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import { socialLinks } from "../config"
import { LinkType } from "../types"
import Icon from "./icons/Icon"

export function Footer() {
  const intl = useIntl()
  return (
    <footer className="flex justify-center items-center flex-col mx-auto text-indigo-400 bg-gray-900 z-0 rounded">
      <div className="mb-2 mx-auto  md:hidden">
        <ul className="flex justify-around items-center p-0 m-0">
          {socialLinks.map((link: LinkType) => (
            <li key={link.link} className="mx-2">
              <a
                href={link.link}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={link.name}
              >
                <Icon name={link.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        © {new Date().getFullYear()}, {intl.formatMessage({ id: "builtWith" })}
        {``}
        <a href="https://www.gatsbyjs.org"> Gatsby</a>
      </div>
      <style jsx>
        {`
          footer {
            width: 100%;
            bottom: 0;
            padding: 15px;
          }
        `}
      </style>
    </footer>
  )
}

export default Footer
