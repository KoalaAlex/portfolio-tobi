import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Imagemd } from '../components/imagemd'
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'

const Wrapper = styled.ul`
  position: absolute;
  display: grid;
  height: 100%;
  width: 500%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 100vh);
  transform: translate3d(${props => props.activeIndex * -20}%,0,0);
  transition: transform 1.2s ease-in-out;
  will-change: transform;
  z-index: -2;
`

const Container = styled.div`
  position: absolute;
  display: block;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
`

const BGItem = styled.li`
  grid-column: ${props => props.position}/${props => props.position + 1} ;
  grid-row-start: 1;
  justify-items: stretch;
  z-index: -1;
`

const BGSlider = React.memo((props) => {
    // never draw images again
    const memoImages = useMemo(() => (
      props.data && props.data.allMarkdownRemark && props.data.allMarkdownRemark.edges.map(({ node }, index) => (
        <BGItem
          key={index}
          position={index + 1}>
            <Imagemd
              key={index}
              imageQ={node.frontmatter.image} />
        </BGItem>
      ))
    ), () => {return true});
    return (
      <Container>
        <Wrapper
        className={props.className}
          activeIndex={props.activeIndex}
          >
          {memoImages}
        </Wrapper>
      </Container>
    );
});

export default props => (
  <StaticQuery
    query={graphql`
      query SliderQuery{
        allMarkdownRemark(
          filter : {
             frontmatter: {
               tags: {
                 in: "background"
               }
             }
           }
        sort : {
          fields: [frontmatter___title],
          order: ASC
        }) {
          edges {
            node {
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 90, cropFocus: CENTER, duotone: {
                      highlight: "#000000",
                      shadow: "#000000",
                      opacity: 30
                    }) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BGSlider data={data} {...props} />}
  />
)

BGSlider.propTypes = {
  className: PropTypes.string,
  activeIndex: PropTypes.number.isRequired
}
