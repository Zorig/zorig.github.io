import React from "react"

import { LinkType } from "../types"
import { socialLinks as SOCIAL_LINKS } from "../config"

import Icon from "./icons/Icon"

const Social = ({ className }: { className?: string }) => (
  <div className={`social-links z-10 ${className}`}>
    <ul className="flex flex-col items-center text-indigo-500 visible">
      {SOCIAL_LINKS.map((link: LinkType) => (
        <li key={link.name}>
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
    <style jsx>
      {`
        div.social-links {
          position: fixed;
          left: 40px;
          right: auto;
          bottom: 0px;
          color: white;
        }
        div.social-links > ul::after {
          content: "";
          display: block;
          width: 1px;
          height: 90px;
          background-color: cyan;
          margin: 0 auto;
        }
        a {
          padding: 10px;
        }
        a:hover,
        a:focus {
          color: cyan;
        }
      `}
    </style>
  </div>
)

export default Social
