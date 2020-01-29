import React from "react"
import { useIntl } from "gatsby-plugin-intl"

export function ContactButton() {
  const intl = useIntl()
  return (
    <a
      href="mailto:zorig.ganbold@gmail.com"
      className="text-cyan bg-transparent border py-4 px-5 border-indigo-800 rounded-lg border-solid hover:border-cyan"
    >
      {intl.formatMessage({ id: "getInTouch" })}
    </a>
  )
}

export default ContactButton
