import { useState, memo, useCallback } from 'react'

const UseCallbackComp: React.FC<unknown> = () => {
  const [flag, setFlag] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    <>
      <div>UseCallbackComp</div>
      <div>count: {count}</div>
      <TestButton onClick={() => setCount(count + 1)}>普通点击</TestButton>
      <TestButton onClick={handleClick}>callback点击</TestButton>
      <button onClick={() => setFlag(!flag)}>切换</button>
      <div>flag: {JSON.stringify(flag)}</div>
    </>
  )
}

interface TestButtonProps {
  children: React.ReactNode
  onClick: () => void
}

const TestButton = memo(({ children, onClick }: TestButtonProps) => {
  console.log(children)
  return <button onClick={onClick}>{children}</button>
})

export default UseCallbackComp
