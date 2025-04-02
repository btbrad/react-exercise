import useUnmount from '../hooks/useUnmount'
import useMount from '../hooks/useMount'
import useUnmountedRef from '../hooks/useUnmountedRef'

const TestUnmountComp: React.FC<unknown> = () => {
  const unmountedRef = useUnmountedRef()

  useMount(() => {
    console.log('组件挂载了！', unmountedRef.current)
  })

  useUnmount(() => {
    console.log('组件卸载了', unmountedRef.current)
  })

  return <div>TestUnmountComp</div>
}

export default TestUnmountComp
