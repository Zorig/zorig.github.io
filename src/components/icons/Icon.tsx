import React from "react"

import { LinkName } from "@types"

import IconGithub from "./github"
import IconTwitter from "./twitter"
import IconLinkedin from "./linkedin"

export const Icon = ({ name }: LinkName) => {
  switch (name) {
    case "github":
      return <IconGithub />
    case "twitter":
      return <IconTwitter />
    case "linkedin":
      return <IconLinkedin />
    default:
      return <IconGithub />
  }
}

export default Icon
