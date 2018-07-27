import React, { Component } from "react"
import { connect } from "react-redux"
import v4 from "uuid"
import { ADD, LOAD } from "./actions"
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
    const {cardIds, toggle, add} = this.props
    
    return (
      <div className="App">
        {cardIds.map((cardId) => (
          <Card
            key={cardId}
            cardId={cardId}
          />
        ))}
        <button onClick={add}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const cardIds = state.cardIds
  return { cardIds }
}

const mapDispatchToProps = (dispatch) => ({
  add: card => dispatch({type: ADD, card}),
  load: () => dispatch({type: LOAD}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
