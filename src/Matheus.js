import React, { useState } from "react"

export default function Matheus({ children, initialState }) {
  const [soma, setSoma] = useState(initialState ?? 0)
  return (
    <>
      <p>{soma}</p>
      <p>
        <button
          onClick={() => {
            setSoma(soma + 1)
          }}
        >
          inclementa
        </button>
      </p>
      {children}
    </>
  )
}
