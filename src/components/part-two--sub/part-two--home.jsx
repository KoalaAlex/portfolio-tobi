import React from 'react'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'
import VideoPlayer from '../VideoPlayer'
import Media from 'react-media';
import { css } from '@emotion/core'

import { RowColStretch } from '../../styles/grid/grid-styles'
import { Headline, SubHeadline, Content } from '../../styles/general'

const VideoPlayerFlex = styled(VideoPlayer)`
  display: flex;
  margin: 10%;
  ${props => props.isMax && css`
    margin; 0;
    height: 100%;
    width: 100%;
  `}
  align-items: center;
`

const videoJsOptions = {
  autoplay: false,
  controls: true,
  fluid: true,
  sources: [{
    src: 'https://app.coverr.co/s3/mp4/Mock-up.mp4',
    type: 'video/mp4'
  },
  {
    src: 'https://app.coverr.co/s3/mp4/Mock-up.webm',
    type: 'video/webm'
  }
]
}

export const PartTwoHome = () => {
  return (
  <Media query={{ minWidth: 600 }}>
        {matches =>
          matches ? (
            <>
              <RowColStretch row={2} column={"1/4"}>
                <Headline>
                  <FormattedMessage id="page-1--headline" />
                </Headline>
                <SubHeadline>
                  <FormattedMessage id="page-1--subheadline" />
                </SubHeadline>
                <Content>
                  <FormattedMessage id="page-1--content" />
                </Content>
              </RowColStretch>
              <RowColStretch row={2} column={"4/-1"}>
                <VideoPlayerFlex isMax={true} { ...videoJsOptions } />
              </RowColStretch>
            </>
          ) : (
            <>
              <RowColStretch row={2} column={"1/-1"}>
                <Headline>
                  <FormattedMessage id="page-1--headline" />
                </Headline>
                <SubHeadline>
                  <FormattedMessage id="page-1--subheadline" />
                </SubHeadline>
                <Content>
                  <FormattedMessage id="page-1--content" />
                </Content>
                <VideoPlayerFlex { ...videoJsOptions } />
              </RowColStretch>
            </>
          )
        }
    </Media>
  )
}
