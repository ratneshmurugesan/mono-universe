import { TTableRow } from '../../../types'

export const CustomImage = ({ rowObj }: { rowObj: TTableRow }) => {
  const { thumbnailUrl, title } = rowObj
  return <img src={thumbnailUrl} alt={title} width="50px" />
}
