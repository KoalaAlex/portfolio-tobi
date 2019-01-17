import React from 'react'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'
import { Context } from './context'
import { css } from '@emotion/core'

const LanguageButton = ({ className }) => (
  <div className={className}>
    <Context.Consumer>
        {({ lang, setLanguage }) => (
          <>
              <Button type="button" onClick={() => setLanguage('en')} isActive={lang && lang==='en'}>
                <FormattedMessage id="first-language" />
              </Button>
              <span>|</span>
              <Button type="button" onClick={() => setLanguage('de')} isActive={lang && lang==='de' }>
                <FormattedMessage id="second-language" />
              </Button>
          </>
        )}
    </Context.Consumer>
  </div>
)

// We recommend moving the style down below to a separate file

const Button = styled.button`
    color: #fff;
    padding: 0.4em;
    text-transform: uppercase;
    letter-spacing: .025em;
    text-decoration: none;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    ${({ isActive }) => isActive && css`
      font-weight: bold;
    `}
`

export { LanguageButton }
