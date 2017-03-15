import { combineReducers } from 'redux'
// import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER,VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

// function todos(state = [], action) {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }
//             ]
//         case 'TOGGLE_TODO':
//             return state.map((todo, index) => {
//                 if (index === action.index) {
//                     return Object.assign({}, todo, {
//                         completed: !todo.completed
//                     })
//                 }
//                 return todo
//             })
//         default:
//             return state
//     }
// }
// 少写
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})
// 两种写法等价
/*
export default function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
*/
export default todoApp