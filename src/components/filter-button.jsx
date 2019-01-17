import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { FormattedMessage } from 'react-intl'

import { FilterText } from '../styles/general'

const Button = styled.button`
  display: block;
  margin: 0;
  border: unset;
  outline:0;
`

export const FilterButton = React.memo((props) => {
  return (
    <Button className={props.className} onClick={() => props.filterClick(props.filterType)}>
      <FilterText
        isActive={props.activeFilter === props.filterType}>
        <FormattedMessage id={props.languageID} />
      </FilterText>
    </Button>
  )
});

FilterButton.propTypes = {
  className: PropTypes.string,
  activeFilter: PropTypes.string.isRequired,
  filterClick: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
  languageID: PropTypes.string.isRequired
}
