import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import ContactButton from "../ContactButton"

export function GetInTouch() {
  const intl = useIntl()
  return (
    <section className="flex flex-col  items-center justify-center px-4 pb-20 sm:px-1 sm:py-20 mx-1 section">
      <div className="flex flex-col content-center w-full lg:w-2/3 sm:w-full">
        <h3 className="flex items-center mt-4 mr-0 mb-6 heading text-indigo-400 whitespace-no-wrap text-2xl">
          {intl.formatMessage({ id: "whatsnext" })}
        </h3>
        <div className="flex flex-col md:flex-row content-between items-start">
          <div className="w-full text-indigo-300 text-center">
            <h2 className="text-5xl font-bold">
              {intl.formatMessage({ id: "getInTouch" })}
            </h2>
            <p className="my-10">{intl.formatMessage({ id: "contactText" })}</p>
            <div className="button-wrapper mt-20">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
