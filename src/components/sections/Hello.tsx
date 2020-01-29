import React from "react"

import { useIntl } from "gatsby-plugin-intl"

import ContactButton from "../ContactButton"
import Section from "../Section"

export function Hello() {
  const intl = useIntl()
  return (
    <Section>
      <h1 className="greeting text-cyan text-xl lg:text-2xl mb-5">
        {intl.formatMessage({ id: "Hi" })}
      </h1>
      <h1 className="name text-5xl lg:text-6xl font-black tracking-wider text-indigo-300">
        {intl.formatMessage({ id: "Zorig." })}
      </h1>
      <h1 className="subtitle text-4xl lg:text-5xl text-indigo-400 tracking-wide mb-5">
        {intl.formatMessage({ id: "subtitle" })}
      </h1>
      <div className="description w-full text-indigo-300 max-w-md mt-3">
        <p className="text-xl lg:text-xl">
          {intl.formatMessage({ id: "description" })}
        </p>
      </div>
      <div className="button-wrapper mt-10">
        <ContactButton />
      </div>
      <style jsx>
        {`
          .name {
            transition-delay: 100ms;
            line-height: 1.1;
          }
          .subtitle {
            transition-delay: 300ms;
          }
          .description {
            transition-delay: 400ms;
          }
          .button-wrapper {
            transition-delay: 500ms;
          }
        `}
      </style>
    </Section>
  )
}

export default Hello
