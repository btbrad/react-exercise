import { useState, useTransition } from 'react'

const Index: React.FC<unknown> = () => {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState('')
  const [list, setList] = useState<string[]>([])

  return (
    <>
      <div>UseTransition</div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
          startTransition(() => {
            const res: string[] = []
            for (let i = 0; i < 10000; i++) {
              res.push(e.target.value)
            }
            setList(res)
          })
        }}
      />
      {isPending ? (
        <div>加载中...</div>
      ) : (
        list.map((item, index) => <div key={index}>{item}</div>)
      )}
    </>
  )
}

export default Index
