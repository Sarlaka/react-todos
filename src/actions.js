// // action 类型
// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOE_ACTIVE: 'SHOE_ACTIVE'
// }
// // action 创建函数
// export function addTodo(text) {
//     return {
//         type: ADD_TODO,
//         text
//     }
// }

// export function toggleTodo(index) {
//     return {
//         type: TOGGLE_TODO,
//         index
//     }
// }

// export function setVisibilityFilter(filter) {
//     return {
//         type: SET_VISIBILITY_FILTER,
//         filter
//     }
// }

let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})