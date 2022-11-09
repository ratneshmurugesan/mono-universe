import { useParams } from 'react-router-dom'

export const PrototypeAX = () => {
  const params = useParams()
  console.log({ params })
  return <div>Prototype A{params['prototypeAX']}</div>
}
