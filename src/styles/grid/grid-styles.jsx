import React from 'react'
import styled from '@emotion/styled'

export const ProjectGrid = styled.ul`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: max-content;
  column-gap: 20px;
  row-gap: 20px;
  align-items: start;
  align-content: start;
  overflow-y: auto;
`

export const FullWindowGrid = styled.ul`
  height: 200vh;
  display: grid;
  margin: 0 3%;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 50%);
  column-gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    margin: 0 5%;
    column-gap: 20px;
  }
`

const Row1 = styled.li`
  grid-row-start: 1;
`

const Row2 = styled.li`
  grid-row-start: 2;
`

export const RowCol = styled.li`
  grid-row-start: ${props => props.row};
  grid-column: ${props => props.column};
`

export const RowColStretch = styled(RowCol)`
  justify-items: stretch;
`

export const RowColSpan = styled.li`
  grid-row-start: ${props => props.row};
  grid-column: 1/-1;
`

export const RowColEnd = styled.li`
  grid-row-start: ${props => props.row};
  grid-column: -2/-1;
`

export const ItemCol2 = styled.li`
  grid-column-start: 1;
  justify-items: stretch;
`

export const ItemColCenter = styled.li`
  grid-column: 6/8;
  justify-items: stretch;
  margin: 0 auto;
`

export const ItemSpanColl = styled.li`
  grid-column: 1/-1;
  justify-items: stretch;
  justify-self: center;
  align-self: center;
`

export const ItemColEndCenter = styled.li`
  grid-column: -2/-1;
  justify-items: stretch;
  align-self: center;
  text-align: right;
`

export const ItemColMinus1 = styled.li`
  grid-column: -3/-2;
  justify-items: stretch;
  text-align: right;
`
