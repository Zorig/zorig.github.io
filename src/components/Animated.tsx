import React from "react"
import { useSpring, animated } from "react-spring"

export default function Animated({ delay = 0, ...props }) {
  const animatedProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    flex: 1,
    from: { opacity: 0, transform: "translateY(30px)" },
    delay,
  })
  return <animated.div style={animatedProps} {...props} />
}
