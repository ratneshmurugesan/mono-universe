import styled from 'styled-components'
import { Table } from 'react-virtualized'
import { InputNumber } from './components/atoms/input-number'

export const StyledTh = styled.th<{
  width: number | string
}>`
  border: 1px solid #ddd;
  padding: 8px;
  width: ${({ width }) => width};
`

export const StyledTd = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: ${({ align }) => align};
`

export const StyledTr = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
`

export const StyledTbody = styled.tbody`
  /* display: block;
  height: 50px;
  overflow: auto;
  ${StyledTr} */
`

export const StyledTable = styled(Table)`
  border-collapse: collapse;
  max-width: 900px;
  width: 100%;
  margin: 2rem auto;
  font-family: 'ratnesh-roboto';

  ${StyledTh}
  ${StyledTd}
  ${StyledTr}
`

export const StyledHeaderCell = styled.div<{
  width: number
}>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: ${({ width }) => `${width}px`};
`

export const StyledTooltip = styled.div<{
  width: number
}>`
  border-radius: 5%;
  background-color: white;
  display: none;
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  padding: 20px;
  width: ${({ width }) => `${width}px`};
  ${StyledHeaderCell}:hover & {
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  &:hover {
    display: flex;
  }
`

export const StyledButtonGroup = styled.div`
  content: '';
  clear: both;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledInputNumber = styled(InputNumber)`
  width: 50px;
`

export const StyledCellDiv = styled.div<{
  align: string
}>`
  text-align: ${({ align }) => align};
`

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledButton = styled.button`
  background-color: lightgoldenrodyellow;
`
