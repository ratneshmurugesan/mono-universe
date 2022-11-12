import styled from 'styled-components'

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

export const StyledTable = styled.table`
  border-collapse: collapse;
  max-width: 900px;
  width: 100%;
  margin: 2rem auto;
  font-family: 'ratnesh-roboto';

  ${StyledTh}
  ${StyledTd}
  ${StyledTr}
`
