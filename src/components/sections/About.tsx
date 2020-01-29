import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"

import Image from "../Image"
import Section from "../Section"

export function About() {
  const intl = useIntl()

  return (
    <Section>
      <h3 className="flex items-center mt-4 mr-0 mb-6 heading text-indigo-400 whitespace-no-wrap text-2xl">
        {intl.formatMessage({ id: "aboutMe" })}
      </h3>
      <div className="about flex flex-col md:flex-row content-between items-start">
        <div className="about-description md:w-3/5 w-full text-indigo-300 mb-20 mr-1">
          <div>
            <p className="mb-2">
              {intl.formatMessage({ id: "about-description-1" })}
            </p>
            <p className="mb-2">
              {intl.formatMessage({ id: "about-description-2" })}{" "}
              <a
                href="https://anchor.fm/devnote"
                className="text-cyan text-strong underline"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Dev Note Podcast"
              >
                Dev Note Podcast
              </a>
            </p>
            <p>
              {intl.formatMessage({ id: "getMoreInfo" })}{" "}
              <Link to="/about">{intl.formatMessage({ id: "here" })}</Link>
            </p>
            <p className="mb-2">{intl.formatMessage({ id: "technologies" })}</p>
          </div>
          <ul className="p-0 mt-5">
            <li className="stack relative mb-4">Python</li>
            <li className="stack relative mb-4">Django</li>
            <li className="stack relative mb-4">JavaScript(ES6+)</li>
            <li className="stack relative mb-4">Reactjs</li>
            <li className="stack relative mb-4">Emberjs</li>
          </ul>
        </div>
        <div className="about-avatar flex justify-center w-full md:w-2/5">
          <div className="avatar mx-auto w-full">
            <Image />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .avatar:hover .avatar-image,
          .avatar:focus .avatar-image {
            filter: none;
            mix-blend-mode: normal;
          }
          a {
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
          }
          .about ul {
            display: grid;
            grid-template-columns: repeat(2, minmax(140px, 200px));
            overflow: hidden;
          }
          li.stack::before {
            content: "▹";
            margin-right: 12px;
          }
        `}
      </style>
    </Section>
  )
}

export default About
