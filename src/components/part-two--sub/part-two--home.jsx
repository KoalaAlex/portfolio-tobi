import React from 'react'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'
import VideoPlayer from '../VideoPlayer'

import { RowColStretch } from '../../styles/grid/grid-styles'
import { Headline, SubHeadline, Content } from '../../styles/general'

const VideoPlayerFlex = styled(VideoPlayer)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`

const videoJsOptions = {
  autoplay: false,
  controls: true,
  fluid: true,
  sources: [{
    src: 'https://ak8.picdn.net/shutterstock/videos/31621018/preview/stock-footage-hyperlapse-timelapse-of-night-city-traffic-on-way-stop-street-intersection-circle-roundabout-in.mp4',
    type: 'video/mp4'
  }]
}

export const PartTwoHome = () => {
  return (
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
        <VideoPlayerFlex { ...videoJsOptions } />
      </RowColStretch>
    </>
  )
}
