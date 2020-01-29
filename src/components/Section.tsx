import React from "react"

export const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="flex flex-col  items-center justify-center px-4 pb-20 sm:px-1 sm:py-20 mx-1 section">
    <div className="flex flex-col content-center w-full lg:w-2/3 sm:w-full">
      {children}
    </div>
  </section>
)

export default Section
