import { useSyncExternalStore } from 'react'
import { combineReducers, createStore } from '@reduxjs/toolkit'

const reducer = (state: number = 1, action: { type: 'ADD' | 'DEL' }) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'DEL':
      return state - 1
    default:
      return state
  }
}

/* 注册reducer,并创建store */
const rootReducer = combineReducers({ count: reducer })
// @ts-expect-error 报错，因为createStore返回的store类型是any，需要指定类型
const store = createStore(rootReducer, { count: 1 })

const Index: React.FC<unknown> = () => {
  //订阅
  const state = useSyncExternalStore(
    store.subscribe,
    () => store.getState().count
  )

  return (
    <>
      <div>useSyncExternalStore</div>
      <div>数据源： {state}</div>
      <button onClick={() => store.dispatch({ type: 'ADD' })}>加1</button>
      <button
        style={{ marginLeft: 8 }}
        onClick={() => store.dispatch({ type: 'DEL' })}
      >
        减1
      </button>
    </>
  )
}

export default Index
