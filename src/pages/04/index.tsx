import React, { useEffect, useState } from 'react'
import useLatest from './hooks/useLatest'
import TestUnmountComp from './components/TestUnmountComp'
const Index: React.FC<unknown> = () => {
  const [count, setCount] = useState<number>(0)
  const [flag, setFlag] = useState<boolean>(false)

  const ref = useLatest(count)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('count:', count)
      console.log('ref:', ref)
      setCount(ref.current + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div>我是04页面</div>
      <div>count: {count}</div>
      {flag && <TestUnmountComp />}
      <button onClick={() => setFlag(!flag)}>{flag ? '卸载' : '挂载'}</button>
    </>
  )
}

export default Index
