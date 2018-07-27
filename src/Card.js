import React from "react"

export default ({
  card,
  toggle
}) => (
  <div className="card" style={{
    color: card.done ? 'green' : 'red'
  }}>
    <span className="title">{card.name}</span>
    <button onClick={toggle}>Toggle</button>
  </div>
)
