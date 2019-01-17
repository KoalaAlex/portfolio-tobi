import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.84;
  }
`

const Wrapper = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #6e33ff;
  top: 0;
  animation: ${fadeIn} 1.2s ease;
  opacity: 0.84;
  z-index: -1;
`

export const MenuBackground = () => {
  return (
    <Wrapper />
  )
};
