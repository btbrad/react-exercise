import React, { useState } from 'react'

const Index: React.FC<unknown> = () => {
  const [flag, setFlag] = useState<boolean>(true)
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount((v) => v + 1)
  }

  return (
    <>
      <div>我是父组件</div>
      <div>count: {count}</div>
      <button onClick={() => setFlag((v) => !v)}>切换状态</button>
      <Child flag={flag} increment={increment}>
        学习HOOKS
      </Child>
    </>
  )
}

interface ChildProps {
  flag: boolean
  children: React.ReactNode
  increment: () => void
}

const Child: React.FC<ChildProps> = (props) => {
  const { flag, children, increment } = props
  return (
    <div style={{ border: '1px solid #000', padding: 20 }}>
      <div>我是子组件</div>
      <div>父组件传递的flag：{JSON.stringify(flag)}</div>
      <div>父组件传递的children：{children}</div>
      <button onClick={() => increment()}>increment</button>
    </div>
  )
}

export default Index
