import React from 'react'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'

import { RowColStretch } from '../../styles/grid/grid-styles'
import { Headline, SubHeadline, Content} from '../../styles/general'

export const PartTwoAboutMe = () => {
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
    </>
  )
}
