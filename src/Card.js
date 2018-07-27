import React, { Component } from "react"
import { connect } from "react-redux"
import { TOGGLE } from "./actions"

const Card = ({
  card,
  toggle
}) => (
  <div className="card" style={{
    color: card.done ? 'green' : 'red'
  }}>
    <span className="title">{card.name}</span>
    <button onClick={() => toggle(card.id)}>Toggle</button>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  const { cardId } = ownProps
  const card = state.cardsById[cardId]
  return { card }
}

const mapDispatchToProps = (dispatch) => ({
  toggle: id => dispatch({type: TOGGLE, id}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
