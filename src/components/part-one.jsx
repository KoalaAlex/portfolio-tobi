import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'
import { css } from '@emotion/core'
import { LanguageButton } from './LanguageButton'
import { MenuButton } from './Menu/menu-button'
import { MenuPoint } from './Menu/menu-point'
import { Button } from '../styles/general'

import { RowColStretch, RowColSpan, RowColEnd } from '../styles/grid/grid-styles'
import { MouseInside, MouseOutside } from '../styles/mouse'

import carbonIconsSVG from '../../node_modules/carbon-icons/dist/carbon-icons.svg'
const searchIcon = carbonIconsSVG + "#icon--header--search"

const Icon = styled.svg`
  width: 1.6em;
  height: 1.6em;
  fill: white;
  transform: translate3d(-0.2em, 0.2em, 0);
`

const ButtonIcon = styled.div`
  position: absolute;
  display: inline-block;
  width: 2em;
  height: 2em;
  transform: translate3d(-2em, 4vh,0);
`

const ButtonList= styled.ul`
  list-style-type: none;
`

const HeadlineBig = styled.h1`
  font-family: 'Feather-Script';
  font-size: 8em;
  font-style: italic;
  font-weight: lighter;
`

const RowColStretchCenter = styled(RowColStretch)`
  margin: 0 auto;
`

const RowColSpanCenter = styled(RowColSpan)`
  justify-self: center;
  align-self: center;
`

const RowColEndCenter = styled(RowColEnd)`
  justify-items: stretch;
  align-self: center;
  text-align: right;
`

const RowColStretchTextAlign = styled(RowColStretch)`
  text-align: right;
`

const StyledLanguageButton = styled(LanguageButton)`
  position: absolute;
  transform: translate3d(0, 4vh,0);
`

const MouseText = styled.h6`
  display: block;
  font-size: 0.8em;
  margin: 0.5em;
`

const MouseWrapper = styled.div`
  position: absolute;
  display: block;
  bottom: 0;
  transform: translate3d(-50%,-4vh,0)
`

const maxPageIndex = 5

const MenuPointStyled = styled(MenuPoint)`
  margin: 1em;
`

export const PartOne = React.memo((props) => {
  return (
    <>
      <RowColSpanCenter row={1}>
      {props.isMenuActive ? (
        <ul>
          <MenuPointStyled languageID={"page-1"} index={0} maxPageIndex={maxPageIndex} onClick={props.changeActiveIndex}/>
          <MenuPointStyled languageID={"page-2"} index={1} maxPageIndex={maxPageIndex} onClick={props.changeActiveIndex}/>
          <MenuPointStyled languageID={"page-3"} index={2} maxPageIndex={maxPageIndex} onClick={props.changeActiveIndex}/>
          <MenuPointStyled languageID={"page-4"} index={3} maxPageIndex={maxPageIndex} onClick={props.changeActiveIndex} />
          <MenuPointStyled languageID={"page-5"} index={4} maxPageIndex={maxPageIndex} onClick={props.changeActiveIndex}/>
        </ul>
        )
        : (
          <HeadlineBig>
            <FormattedMessage id="portfolio" />
          </HeadlineBig>
        )
      }
      </RowColSpanCenter>
      <RowColStretch row={1} column={1}>
        <StyledLanguageButton />
      </RowColStretch>
      <RowColStretchCenter row={1} column={"6/8"}>
        <MouseWrapper>
          <MouseOutside>
            <MouseInside />
          </MouseOutside>
          <MouseText>
            <FormattedMessage id="scroll-down" />
          </MouseText>
        </MouseWrapper>
      </RowColStretchCenter>
      <RowColStretchTextAlign row={1} column={"-3/-2"} >
        <ButtonIcon>
          <Icon>
            <title><FormattedMessage id="search-title" />n</title>
            <use xlinkHref={searchIcon}></use>
          </Icon>
        </ButtonIcon>
      </RowColStretchTextAlign>
      <RowColEndCenter row={1}>
        <MenuButton buttonClick={props.menuToggle} isCloseButton={props.isMenuActive}/>
        <ButtonList>
          <li>
            <Button onClick={() => {props.changeActiveIndex(0)}} isActive={!(props.activeIndex%maxPageIndex)}>
              <p>01</p>
            </Button>
          </li>
          <li>
            <Button onClick={() => {props.changeActiveIndex(1)}} isActive={!((props.activeIndex-1)%maxPageIndex)}>
              <p>02</p>
            </Button>
          </li>
          <li>
            <Button onClick={() => {props.changeActiveIndex(2)}} isActive={!((props.activeIndex-2)%maxPageIndex)}>
              <p>03</p>
            </Button>
          </li>
          <li>
            <Button onClick={() => {props.changeActiveIndex(3)}} isActive={!((props.activeIndex-3)%maxPageIndex)}>
              <p>04</p>
            </Button>
          </li>
          <li>
            <Button onClick={() => {props.changeActiveIndex(4)}} isActive={!((props.activeIndex-4)%maxPageIndex)}>
              <p>05</p>
            </Button>
          </li>
        </ButtonList>
      </RowColEndCenter>
    </>
  )
});

PartOne.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  menuToggle: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  changeActiveIndex: PropTypes.func.isRequired,
}
