import React from "react"

const Email = () => (
  <div className="social-links z-10 hidden md:block">
    <div className="email flex flex-col items-center text-indigo-500">
      <a
        href="mailto:zorig.ganbold@gmail.com"
        className="link p-10 my-5 tracking-widest"
      >
        zorig.ganbold@gmail.com
      </a>
    </div>
    <style jsx>
      {`
        div.social-links {
          width: 40px;
          position: fixed;
          bottom: 0;
          left: auto;
          right: 40px;
        }
        div.social-links > .email {
        }
        div.social-links > .email::after {
          content: "";
          display: block;
          width: 1px;
          height: 90px;
          background-color: cyan;
          margin: 0 auto;
        }
        a {
          padding: 10px;
          writing-mode: vertical-rl;
        }
        a:hover,
        a:focus {
          color: cyan;
        }
      `}
    </style>
  </div>
)

export default Email
