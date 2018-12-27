import React from 'react'
import Image from '../components/image'
import Imagemd from '../components/imagemd'
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

// css
import '../styles/global';

const FullWindowGrid = styled.ul`
  height: 400vh;
  display: grid;
  grid-template-columns: 3% repeat(12, 1fr) 3%;
  grid-template-rows: repeat(4, 25%);
  column-gap: 10px;
  @media (min-width: 768px) {
  grid-template-columns: 5% repeat(12, 1fr) 5%;
    column-gap: 20px;
  }
  list-style-type: none;
`;

const ItemBG = styled.li`
  grid-column-start: 1;
  grid-column-end: span end;
  grid-row-start: 1;
  justify-items: stretch;
  z-index: -1;
`;

const ItemCol2 = styled.li`
  grid-column-start: 2;
  grid-row-start: 1;
  justify-items: stretch;
  background-color: red;
`;

const ItemCol12 = styled.li`
  grid-column-start: 12;
  justify-items: stretch;
  background-color: red;
`;

const Text = styled.p`
  transform: translate3d(0,5vh,0);
  margin-block-start: 0;
  margin-block-end: 0;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <FullWindowGrid>
          <ItemBG>
            {this.props.data.allMarkdownRemark.edges.map(({ node }, index) => (
              <Imagemd imageQ={node.frontmatter.image} />
            ))}
          </ItemBG>
          <ItemCol2>
            <Text>ENG | DE</Text>
          </ItemCol2>
          <ItemCol12>
          </ItemCol12>
        </FullWindowGrid>
        <div style={{ maxWidth: '2000px', marginBottom: '1.45rem' }}>
          <Image />
          {this.props.data.allMarkdownRemark.edges.map(({ node }, index) => (
            <Imagemd key={index} imageQ={node.frontmatter.image} />
          ))}
      </div>
      </React.Fragment>
    );
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
`;
