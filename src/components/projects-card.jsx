import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { ProjectCardHeadline }  from '../styles/general'

import { Imagemd } from '../components/imagemd'

const Button = styled.button`
  display: none;
  ${({ isVisible }) => isVisible && css`
      display: block;
  `}
  margin: 0;
  border: unset;
  outline:0;
`

const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`

export const ProjectsCard = React.memo((props) => {
  return (
    <Button className={props.className} isVisible={props.isVisible}>
      <Imagemd imageQ={props.imageQ} />
      <ProjectCardHeadline>
        {props.name}
      </ProjectCardHeadline>
    </Button>
  )
});

ProjectsCard.propTypes = {
  className: PropTypes.string,
  imageQ: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired
}
