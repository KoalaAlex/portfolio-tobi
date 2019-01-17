import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Headline = styled.h1`
  font-size: 2em;
  color: #232D3C;
  margin-top: 4vh;
`

export const SubHeadline = styled.h2`
  font-size: 1.5em;
  color: #232D3C;
  margin: 2vh;
`

export const Content = styled.p`
  font-size: 1em;
  color: #232D3C;
  margin: 2vh;
`

export const FilterText = styled.p`
  font-size: 1.2em;
  color: #232D3C;
  margin: 2vh;
  text-transform: uppercase;
  ${({ isActive }) => isActive && css`
    font-weight: bold;
  `}
`

export const ProjectCardHeadline = styled.h3`
  font-size: 1.2em;
  color: #232D3C;
  text-transform: uppercase;
  text-align: start;
  margin: 10px;
  letter-spacing: 0.2em;
`

export const Button = styled.button`
  color: white;
  font-size: 1.2em;
  margin: 1em 0;
  &:focus{
    outline:0;
  }
  ${({ isActive }) => isActive && css`
    font-weight: bold;
  `}
`
