import { useState, useEffect, createContext, useContext } from 'react'
import ReducerComp from './components/ReducerComp'
import UseMemoComp from './components/UseMemoComp'
import UseCallbackComp from './components/UseCallbackComp'
import UseRefComp from './components/UseRefComp'

const CountContext = createContext(0)

const Index: React.FC<unknown> = () => {
  const [count, setCount] = useState<number>(0)

  const [numObj, setNumObj] = useState<{ num: number }>({ num: 0 })

  const [flag, setFlag] = useState<boolean>(false)

  useEffect(() => {
    console.log('count改变会执行！')
  }, [count])

  const increment = () => {
    numObj.num += 1
    setNumObj(numObj)
  }

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>第一种方式+1</button>
      <button
        style={{ marginLeft: '20px' }}
        onClick={() => setCount((v) => v + 1)}
      >
        第一种方式+1
      </button>
      <div>对象形式：{numObj.num}</div>
      <button onClick={increment}>第一种方式+1</button>
      <br />
      <button onClick={() => setFlag((v) => !v)}>
        {flag ? '卸载' : '挂载'}
      </button>
      {flag && <Child />}
      <CountContext.Provider value={count}>
        <Son />
      </CountContext.Provider>
      <br />
      <ReducerComp />
      <br />
      <UseMemoComp />
      <br />
      <UseCallbackComp />
      <br />
      <UseRefComp />
    </>
  )
}

const Child: React.FC<unknown> = () => {
  useEffect(() => {
    console.log('挂载')
    return () => {
      console.log('卸载')
    }
  }, [])

  return <div>我是Child组件</div>
}

const Son: React.FC<unknown> = () => {
  const count = useContext(CountContext)

  return (
    <div style={{ border: '1px solid red', padding: '20px' }}>
      <div>我是Son组件</div>
      <div>父组件的count: {count}</div>
      <GrandSon />
    </div>
  )
}

const GrandSon: React.FC<unknown> = () => {
  const count = useContext(CountContext)

  return (
    <div style={{ border: '1px solid red', padding: '20px' }}>
      <div>我是GrandSon组件</div>
      <div>爷组件的count: {count}</div>
    </div>
  )
}

export default Index
