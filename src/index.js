// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import todoApp from './reducers';
// import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'
// import App from './App';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

import './index.css';

let store = createStore(todoApp)

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

console.log(store.getState());

//使用subscribe来注册一个事件，返回的是一个函数
// 运行这个函数就会注销这个事件
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


// 发起一系列 action
// console.log(todoApp)
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// 停止监听 state 更新
unsubscribe();