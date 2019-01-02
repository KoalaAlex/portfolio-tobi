import React from 'react'
import Imagemd from '../components/imagemd'
import { FormattedMessage } from 'react-intl'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Layout } from '../components/Layout/layout'
import { LanguageButton } from '../components/LanguageButton'

//import svgIcons from '../images/carbon-icons.svg'
import carbonIconsSVG from '../../node_modules/carbon-icons/dist/carbon-icons.svg'

const FullWindowGrid = styled.ul`
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
  list-style-type: none;
`

const BGSlider = styled.ul`
  position: absolute;
  display: grid;
  height: 100vh;
  width: 500%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 100vh);
  list-style-type: none;
  transform: translate3d(${props => props.activeIndex * -20}%,0,0);
  transition: transform 1.2s ease-in-out;
  will-change: transform;
  z-index: -1;
`

const BGItem = styled.li`
  grid-column: ${props => props.position}/${props => props.position + 1} ;
  grid-row-start: 1;
  justify-items: stretch;
  z-index: -1;
`

const ItemCol2 = styled.li`
  grid-column-start: 1;
  grid-row-start: 1;
  justify-items: stretch;
  background-color: red;
`

const ItemSpanColl = styled.li`
  grid-column: 1/-1;
  grid-row-start: 1;
  justify-items: stretch;
  justify-self: center;
  align-self: center;
`

const ItemColRight= styled.li`
  grid-column: -2/-1;
  grid-row-start: 1;
  justify-items: stretch;
  align-self: center;
  text-align: right;
`

const Hedline = styled.h1`
  font-family: 'Feather-Script';
  font-size: 8em;
  font-style: italic;
  font-weight: lighter;
`

const Icon = styled.svg`
  position: absolute;
  width: 16px;
  height: 16px;
  fill: white;
`

// Buttons
const ButtonList= styled.ul`
  list-style-type: none;
`

const Button = styled.button`
  background-color: unset;
  border: none;
  color: white;
  font-size: 20px;
  &:focus{
    outline:0;
  }
  ${({ isActive }) => isActive && css`
    font-weight: bold;
  `}
`

const SecondRow = styled.div`
  grid-row-start: 2;
  grid-column: 1/-1;
  background-color: white;
`

const StyledLanguageButton = styled(LanguageButton)`
  position: absolute;
  transform: translate3d(0, 5vh,0);
`

const searchIcon = carbonIconsSVG + "#icon--header--search"

class Index extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
     activeIndex: 0,
    }
    this.changeActiveIndex = this.changeActiveIndex.bind(this)
  }

  changeActiveIndex(index){
    this.setState({activeIndex: index})
  }

  render() {
    return (
      <Layout>
        <BGSlider activeIndex={this.state.activeIndex}>
          {this.props.data && this.props.data.allMarkdownRemark && this.props.data.allMarkdownRemark.edges.map(({ node }, index) => (
            <BGItem key={index} position={index + 1}>
                <Imagemd key={index} imageQ={node.frontmatter.image} />
            </BGItem>
          ))}
        </BGSlider>
        <FullWindowGrid>
          <ItemCol2>
            <StyledLanguageButton />
            <Icon>
              <title><FormattedMessage id="search-title" />n</title>
              <use xlinkHref={searchIcon}></use>
            </Icon>
          </ItemCol2>
          <ItemColRight>
            <ButtonList>
              <li>
                <Button onClick={() => {this.changeActiveIndex(0)}} isActive={!(this.state.activeIndex%5)}>
                  <p>01</p>
                </Button>
              </li>
              <li>
                <Button onClick={() => {this.changeActiveIndex(1)}} isActive={!((this.state.activeIndex-1)%5)}>
                  <p>02</p>
                </Button>
              </li>
              <li>
                <Button onClick={() => {this.changeActiveIndex(2)}} isActive={!((this.state.activeIndex-2)%5)}>
                  <p>03</p>
                </Button>
              </li>
              <li>
                <Button onClick={() => {this.changeActiveIndex(3)}} isActive={!((this.state.activeIndex-3)%5)}>
                  <p>04</p>
                </Button>
              </li>
              <li>
                <Button onClick={() => {this.changeActiveIndex(4)}} isActive={!((this.state.activeIndex-4)%5)}>
                  <p>05</p>
                </Button>
              </li>
            </ButtonList>
          </ItemColRight>
          <ItemSpanColl>
            <Hedline>
              <FormattedMessage id="portfolio" />
            </Hedline>
          </ItemSpanColl>
          <SecondRow>
          </SecondRow>
        </FullWindowGrid>
      </Layout>
    )
  }
}

export default Index

export const query = graphql`
query IndexQuery{
  allMarkdownRemark(sort : {
    fields: [frontmatter___title],
    order: ASC
  }) {
    edges {
      node {
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 90, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`
