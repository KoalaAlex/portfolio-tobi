import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'

import carbonIconsSVG from '../../../node_modules/carbon-icons/dist/carbon-icons.svg'

const menuIcon = carbonIconsSVG + "#icon--menu"
const closeIcon = carbonIconsSVG + "#icon--close"

const Icon = styled.svg`
  width: 1.6em;
  height: 1.6em;
  fill: white;
  transform: translate3d(-0.2em, 0.2em, 0);
`

const ButtonIcon = styled.button`
  position: absolute;
  display: inline-block;
  width: 2em;
  height: 2em;
  transform: translate3d(-2em, 4vh,0);
`

const ButtonIconMenu = styled(ButtonIcon)`
  top: 0;
`

const constIconMenu = (
  <>
    <title><FormattedMessage id="menu-icon-title" />n</title>
    <use xlinkHref={menuIcon}></use>
  </>
)

const constIconClose = (
  <>
    <title><FormattedMessage id="menu-icon-close" />n</title>
    <use xlinkHref={closeIcon}></use>
  </>
)

export const MenuButton = React.memo((props) => {
  return (
  <ButtonIconMenu onClick={() => props.buttonClick(!props.isCloseButton)}>
    <Icon>
      {props.isCloseButton ? (
        constIconClose
      ) : (
        constIconMenu
      )}
    </Icon>
  </ButtonIconMenu>
  )
});

MenuButton.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  isCloseButton: PropTypes.bool.isRequired,
}
