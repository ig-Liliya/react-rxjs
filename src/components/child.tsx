import {FC, memo, useEffect, useState} from 'react'
interface Props {
  num: number
}

export const useStatus = (num: number) => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    console.log(num)
    if (num <= 0 ) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [num])
  return isOpen
}
export const ChildMemo = memo<Props>(({num}) => {
  useEffect(() => {
    console.log('memo儿子生成')
    return () => {
      console.log('memo儿子销毁')
    }
  })
  return (
    <>
      <div>我是子组件{num}</div>
    </>
  )
})

export const Child: FC<Props> = ({num}) => {
  const isOpen = useStatus(num)
  useEffect(() => {
    console.log('普通儿子生成')
    return () => {
      console.log('普通儿子销毁')
    }
  },[])
  return (
    <div>我是普通儿子{isOpen ? 'true': 'false'}</div>
  )
}

