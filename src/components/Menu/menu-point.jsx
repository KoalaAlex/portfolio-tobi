import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'

import { Button } from '../../styles/general'

const MenuPointButton = styled(Button)`
  display: block;
  margin: 0 auto;
  font-size: 1.5em;
`

export const MenuPoint = React.memo((props) => {
  return(
    <li className={props.className}>
      <MenuPointButton onClick={() => {props.onClick(props.index)}} isActive={!(props.activeIndex%props.maxPageIndex)}>
        <h2>
          <FormattedMessage id={props.languageID} />
        </h2>
      </MenuPointButton>
    </li>
  )
});

MenuPoint.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  languageID: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  maxPageIndex: PropTypes.number.isRequired,
}
