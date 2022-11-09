import { useParams } from 'react-router-dom'

export const PrototypeX = () => {
  const params = useParams()
  console.log({ params })
  return <div>Prototype X{params['prototypeX']}</div>
}
