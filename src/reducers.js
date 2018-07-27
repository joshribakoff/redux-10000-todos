import * as actions from "./actions"

export default (state = {}, action) => {
  switch(action.type) {
    case actions.LOAD:
      return new Array(10000)
        .fill(null)
        .map((_, id) => ({
          id,
          name: `card ${id}`,
          done: id % 2
        }))
    case actions.ADD: {
      const { card } = action
      return {
        ...state,
        [card.id]: card
      }
    }
    case actions.TOGGLE: {
      const { cardId } = action
      const card = state[cardId]
      return {
        ...state,
        [cardId]: {
          ...card,
          done: !card.done
        }
      }
    }
    default: return state
  }
}