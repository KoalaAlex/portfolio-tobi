import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'
import { css , keyframes } from '@emotion/core'
import { LanguageButton } from './LanguageButton'
import { MenuButton } from './Menu/menu-button'
import { MenuPoint } from './Menu/menu-point'
import { Button } from '../styles/general'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

import { RowColMouse, RowColStretch, RowColSpan, RowColEnd } from '../styles/grid/grid-styles'
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

const fadeInHeadline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const HeadlineBig = styled.h1`
  position: absolute;
  display: flex;
  width: 94%;
  height: 100%;
  font-family: 'FeatherScript';
  font-size: 8em;
  @media (max-width: 1200px) {
    font-size: 4em;
  }
  @media (max-width: 600px) {
    font-size: 2em;
  }
  @media (min-width: 768px) {
      width: 90%;
  }
  font-style: italic;
  font-weight: lighter;
  overflow: hidden;
  text-align: center;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  &.changed-enter {
    opacity: 1;
    animation: ${fadeInHeadline} 0.8s ease-in;
  }
  &.changed-leave {
    opacity: 0;
    animation: ${fadeInHeadline} 0.8s ease-in;
    animation-direction: alternate-reverse;
  }
`

const RowColStretchCenter = styled(RowColStretch)`
  margin: 0 auto;
`

const RowColSpanCenter = styled(RowColSpan)`
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
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

const MenuFlex = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`

export const PartOne = React.memo((props) => {
  function ReturnHeadlineText(){
    let headline
    switch(props.activeIndex){
      case 0:
        headline = <HeadlineBig key={0} ><FormattedMessage id="page-1" /></HeadlineBig>
        break
      case 1:
        headline = <HeadlineBig key={1} ><FormattedMessage id="page-2" /></HeadlineBig>
        break
      case 2:
        headline = <HeadlineBig key={2} ><FormattedMessage id="page-3" /></HeadlineBig>
        break;
      case 3:
        headline = <HeadlineBig key={3} ><FormattedMessage id="page-4" /></HeadlineBig>
        break;
      case 4:
        headline = <HeadlineBig key={4} ><FormattedMessage id="page-5" /></HeadlineBig>
        break;
      default:
        headline = <HeadlineBig key={5} ><FormattedMessage id="page-1" /></HeadlineBig>
        break;
    }
    return headline
  }
  return (
    <>
      <RowColSpanCenter row={1}>
      {props.isMenuActive ? (
        <MenuFlex>
          <MenuPointStyled languageID={"page-1"} index={0} maxPageIndex={maxPageIndex} onClick={props.changeActiveIndex} activeIndex={props.activeIndex} activeIndexRef={props.activeIndexRef}/>
          <MenuPointStyled languageID={"page-2"} index={1} maxPageIndex={maxPageIndex} onClick={props.changeActiveIndex} activeIndex={props.activeIndex} activeIndexRef={props.activeIndexRef}/>
          <MenuPointStyled languageID={"page-3"} index={2} maxPageIndex={maxPageIndex} onClick={props.changeActiveIndex} activeIndex={props.activeIndex} activeIndexRef={props.activeIndexRef}/>
          <MenuPointStyled languageID={"page-4"} index={3} maxPageIndex={maxPageIndex} onClick={props.changeActiveIndex} activeIndex={props.activeIndex} activeIndexRef={props.activeIndexRef}/>
          <MenuPointStyled languageID={"page-5"} index={4} maxPageIndex={maxPageIndex} onClick={props.changeActiveIndex} activeIndex={props.activeIndex} activeIndexRef={props.activeIndexRef}/>
        </MenuFlex>
        )
        : (
          <ReactCSSTransitionGroup
            transitionName="changed"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            {ReturnHeadlineText()}
          </ReactCSSTransitionGroup>
        )
      }
      </RowColSpanCenter>
      <RowColStretch row={1} column={1}>
        <StyledLanguageButton />
      </RowColStretch>
      <RowColMouse row={1}>
        <MouseWrapper>
          <MouseOutside>
            <MouseInside />
          </MouseOutside>
          <MouseText>
            <FormattedMessage id="scroll-down" />
          </MouseText>
        </MouseWrapper>
      </RowColMouse>
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
            <Button onClick={() => {props.changeActiveIndex(props.activeIndexRef, 0)}} isActive={!(props.activeIndex%maxPageIndex)}>
              <p>01</p>
            </Button>
          </li>
          <li>
            <Button onClick={() => {props.changeActiveIndex(props.activeIndexRef, 1)}} isActive={!((props.activeIndex-1)%maxPageIndex)}>
              <p>02</p>
            </Button>
          </li>
          <li>
            <Button onClick={() => {props.changeActiveIndex(props.activeIndexRef, 2)}} isActive={!((props.activeIndex-2)%maxPageIndex)}>
              <p>03</p>
            </Button>
          </li>
          <li>
            <Button onClick={() => {props.changeActiveIndex(props.activeIndexRef, 3)}} isActive={!((props.activeIndex-3)%maxPageIndex)}>
              <p>04</p>
            </Button>
          </li>
          <li>
            <Button onClick={() => {props.changeActiveIndex(props.activeIndexRef, 4)}} isActive={!((props.activeIndex-4)%maxPageIndex)}>
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
  activeIndexRef: PropTypes.object,
}
