import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`

const Wrapper = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #191A1F;
  backdrop-filter: blur(1em);
  top: 0;
  animation: ${fadeIn} 0.5s ease-in;
  opacity: 0.5;
  backdrop-filter: blur(0.5em);
  z-index: -1;
`

export const MenuBackground = () => {
  return (
    <Wrapper />
  )
};
