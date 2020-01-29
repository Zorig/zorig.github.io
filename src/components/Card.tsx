import React from "react"

export function Card() {
  return (
    <div className="max-w-sm w-1/2 rounded overflow-hidden shadow-lg">
      <img src="//placehold.it/300" alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Project Title</div>
      </div>
    </div>
  )
}

export default Card
