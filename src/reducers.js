import * as actions from "./actions"

function createCards() {
  return new Array(10000)
    .fill(null)
    .map((_, id) => ({
      id,
      name: `card ${id}`,
      done: id % 2
    }))
}

export default (state = {
  cardIds: []
}, action) => {
  switch(action.type) {
    case actions.LOAD:
      const cards = createCards()
      return {
        cardsById: cards,
        cardIds: Object.keys(cards).map(i => cards[i].id)
      }
    case actions.ADD: {
      const { card } = action
      return {
        ...state,
        cardIds: [card.id, state.cardIds],
        cardsById: {
          ...state.cardsById,
          [card.id]: card
        }
      }
    }
    case actions.TOGGLE: {
      const { id } = action
      const card = state.cardsById[id]
      return {
        ...state,
        cardsById: {
          ...state.cardsById,
          [id]: {
            ...card,
            done: !card.done
          }
        }
      }
    }
    default: return state
  }
}