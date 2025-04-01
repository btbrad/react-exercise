import { useReducer } from 'react'

const ReducerComp: React.FC<unknown> = () => {
  const [count, dispatch] = useReducer(
    (
      state: number,
      action: { type: 'increment' | 'decrement'; payload: number }
    ) => {
      switch (action.type) {
        case 'increment':
          return state + action.payload
        case 'decrement':
          return state - action.payload
        default:
          return state
      }
    },
    0
  )

  return (
    <>
      <div>Reducer组件</div>
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        -1
      </button>
    </>
  )
}

export default ReducerComp
