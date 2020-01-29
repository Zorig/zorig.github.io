import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageNames = {
  mn: "Mongolian",
  en: "English",
}

export function Switcher() {
  return (
    <ul className="self-end px-1">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <li
              key={language}
              className={currentLocale === language && "active"}
              onClick={() => changeLocale(language)}
              title={languageNames[language]}
            >
              {language}
            </li>
          ))
        }
      </IntlContextConsumer>
      <style jsx>
        {`
          li {
            text-transform: uppercase;
            cursor: pointer;
          }
          li.active {
            text-decoration: underline;
            color: cyan;
          }
        `}
      </style>
    </ul>
  )
}

export default Switcher
