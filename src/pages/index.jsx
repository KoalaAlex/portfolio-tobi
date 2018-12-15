import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import Imagemd from '../components/imagemd'
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

const FullWindowGrid = styled.div`
  height: 400vh;
  display: grid;
  grid-template-columns: 3% repeat(12, auto) 3%;
  grid-template-rows: repeat(4, 25%);
  column-gap: 10px;
  @media (min-width: 768px) {
  grid-template-columns: 5% repeat(12, auto) 5%;
    column-gap: 20px;
  }
  background-color: blue;
`;

const ItemBG = styled.div`
  grid-column-start: 1;
  grid-column-end: span end;
  grid-row-start: 1;
  justify-items: stretch;
`;

const ItemCol2 = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  justify-items: stretch;
  background-color: red;
`;

const ItemCol12 = styled.div`
  grid-column-start: 12;
  justify-items: stretch;
  background-color: red;
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
            <Image />
          </ItemBG>
          <ItemCol2>
          </ItemCol2>
          <ItemCol12>
          </ItemCol12>
        </FullWindowGrid>
        <div style={{ maxWidth: '2000px', marginBottom: '1.45rem' }}>
          <Image />
          <Imagemd imageQ={this.props.data.allMarkdownRemark.edges[0].node.frontmatter.image} />
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
