import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'

import { RowColStretch, ProjectGrid } from '../../styles/grid/grid-styles'
import { FilterButton } from '../filter-button'
import { ProjectsCard } from '../projects-card'

const filterLib = {
  none: 'none',
  all: 'all',
  application: 'application',
  webpage: 'webpage',
  grafics: 'grafics',
  industry: 'industry',
  consumer: 'consumer',
  enterprise: 'enterprise',
  custom: 'custom'
}

const FilterButtonAll = styled(FilterButton)`
  margin-top: 10vh;
`

const FirstFilterIndustry = styled(FilterButton)`
  margin-top: 5vh;
`

const RowColStretchPadding = styled(RowColStretch)`
  padding-top: 5vh;
`

const PartTwoProjects = React.memo((props) => {
  const [filter, setFilter] = useState(filterLib.none);
  const [filterLibState, setFilterLibState] = useState(false);

  useEffect(() => {
    if(!filterLibState){
      let arrayEnum = {};
      for (var i = 0; i < props.data.allMarkdownRemark.edges.length; i++) {
        for (var key in filterLib) {
          if(!(key in arrayEnum)){
            arrayEnum[key] = {};
          }
          if(key === filterLib.all || props.data.allMarkdownRemark.edges[i].node.frontmatter.tags.includes(key)){
            arrayEnum[key][props.data.allMarkdownRemark.edges[i].node.frontmatter.title] = true;
          }
          else{
            arrayEnum[key][props.data.allMarkdownRemark.edges[i].node.frontmatter.title] = false;
          }
        }
      }
      setFilterLibState(arrayEnum)
      setFilter(filterLib.all)
    }
   }, [props.data]
  );


  const filterButtons =  (
    <>
      <FilterButtonAll
        activeFilter={filter}
        languageID={"page-4--all"}
        filterClick={setFilter}
        filterType={filterLib.all}
        >
      </FilterButtonAll>
      <FilterButton
        activeFilter={filter}
        languageID={"page-4--application"}
        filterClick={setFilter}
        filterType={filterLib.application}
        >
      </FilterButton>
      <FilterButton
        activeFilter={filter}
        languageID={"page-4--webpage"}
        filterClick={setFilter}
        filterType={filterLib.webpage}
        >
      </FilterButton>
      <FilterButton
        activeFilter={filter}
        languageID={"page-4--grafics"}
        filterClick={setFilter}
        filterType={filterLib.grafics}
        >
      </FilterButton>
      <FirstFilterIndustry
        activeFilter={filter}
        languageID={"page-4--industry"}
        filterClick={setFilter}
        filterType={filterLib.industry}
        >
      </FirstFilterIndustry>
      <FilterButton
        activeFilter={filter}
        languageID={"page-4--consumer"}
        filterClick={setFilter}
        filterType={filterLib.consumer}
        >
      </FilterButton>
      <FilterButton
        activeFilter={filter}
        languageID={"page-4--enterprise"}
        filterClick={setFilter}
        filterType={filterLib.enterprise}
        >
      </FilterButton>
      <FilterButton
        activeFilter={filter}
        languageID={"page-4--custom"}
        filterClick={setFilter}
        filterType={filterLib.custom}
        >
      </FilterButton>
    </>
  )

  return (
    <>
      <RowColStretch row={2} column={"1/4"}>
        {filterButtons}
      </RowColStretch>
      <RowColStretchPadding row={2} column={"5/-1"}>
        <ProjectGrid activeFilter={filter}>
          {props.data && props.data.allMarkdownRemark && props.data.allMarkdownRemark.edges.map(({ node }, index) => (
            <ProjectsCard
              key={index}
              isVisible={filterLibState && filterLibState[filter][node.frontmatter.title]}
              name={node.frontmatter.title}
              imageQ={node.frontmatter.image} />
          ))}
        </ProjectGrid>
      </RowColStretchPadding>
    </>
  )
});

export default props => (
  <StaticQuery
    query={graphql`
      query ProjectQuery{
        allMarkdownRemark(
          filter : {
             frontmatter: {
               tags: {
                 in: ["project", "card"]
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
                tags
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
    `}
    render={data => <PartTwoProjects data={data} {...props} />}
  />
)
