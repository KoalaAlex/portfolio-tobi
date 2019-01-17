import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

 const ImgContain = styled(Img)`
   width: 100%;
   height: 100%;
 `;

export const Imagemd = React.memo((props) => {
  return (
    <ImgContain fluid={props.imageQ.childImageSharp.fluid} />
  )
});

Imagemd.propTypes = {
  imageQ: PropTypes.object
}
