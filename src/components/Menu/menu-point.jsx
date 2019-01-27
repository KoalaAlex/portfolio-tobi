import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { FormattedMessage } from 'react-intl'

import { Button } from '../../styles/general'

const MenuPointButton = styled(Button)`
  font-weight: normal;
  font-family: 'FeatherScript';
  display: block;
  margin: 0 auto;
  ${props => props.isActive ? css`
    opacity: 1;
    font-size: 4em;
    @media (max-width: 1200px) {
      font-size: 3em;
    }
    @media (max-width: 600px) {
      font-size: 2em;
    }
    `: css`
    opacity: 0.6;
    font-size: 3em;
    @media (max-width: 1200px) {
      font-size: 2em;
    }
    @media (max-width: 600px) {
      font-size: 1em;
    }
  `}
  transition: font-size 0.75s ease-in, opacity 0.5s ease-in;
`

export function MenuPoint(props){
  const active = !((props.activeIndex-props.index)%props.maxPageIndex)
  return(
    <li className={props.className}>
      <MenuPointButton onClick={() => {props.onClick(props.index)}} isActive={active}>
        <FormattedMessage id={props.languageID} />
      </MenuPointButton>
    </li>
  )
}

MenuPoint.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  languageID: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  maxPageIndex: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
}
