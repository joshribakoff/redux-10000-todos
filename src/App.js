import React, { Component } from "react"
import { connect } from "react-redux"
import v4 from "uuid"
import { ADD, TOGGLE, LOAD } from "./actions"
import Card from "./Card"
import "./App.css";

class App extends Component {
  componentDidMount = () => this.props.load()

  handleAdd = columnIndex => {
    const name = window.prompt('Name?')
    if(!name) return
    const card = { name, id: v4() }
    this.props.add(card)
  }

  render() {
    const {cards, toggle, add} = this.props
    if(!cards.length) return null
    return (
      <div className="App">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            toggle={() => toggle(card.id)}
          />
        ))}
        <button onClick={add}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const cardIds = Object.keys(state)
  const cards = cardIds.map(id => state[id])
  return { cards }
}

const mapDispatchToProps = (dispatch) => ({
  add: card => dispatch({type: ADD, card}),
  toggle: cardId => dispatch({type: TOGGLE, cardId}),
  load: () => dispatch({type: LOAD}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
