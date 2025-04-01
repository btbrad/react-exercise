import { useState, useMemo } from 'react'

const usePow = (list: number[]) => {
  return useMemo(() => {
    return list.map((item: number) => {
      console.log('我是usePow')
      return Math.pow(item, 2)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

const UseMemoComp: React.FC<unknown> = () => {
  const [flag, setFlag] = useState<boolean>(false)

  const data = usePow([1, 2, 3, 4, 5])

  return (
    <>
      <div>UseMemoComp</div>
      <div>数字集合：{JSON.stringify(data)}</div>
      <button onClick={() => setFlag(!flag)}>切换</button>
      <div>flag: {JSON.stringify(flag)}</div>
    </>
  )
}

export default UseMemoComp
