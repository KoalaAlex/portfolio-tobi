import React from 'react'
import { Global } from "@emotion/core"
import styled from '@emotion/styled'
import de from 'react-intl/locale-data/de'
import en from 'react-intl/locale-data/en'
import { addLocaleData, IntlProvider } from 'react-intl'
import localEN from '../../localize/en.json'
import localDE from '../../localize/de.json'
import { Context } from '../context'
import Provider from './provider'

// css string
import GlobalString from '../../styles/global'

addLocaleData(de, en)

const Layout = ({ children }) => (
  <>
    <Global
       styles={GlobalString}
     />
      <Provider>
          <Context.Consumer>
              {({ lang }) => (
                  <IntlProvider locale={lang} messages={lang === 'en' ? localEN : localDE}>
                    <>
                      {children}
                    </>
                  </IntlProvider>
              )}
          </Context.Consumer>
      </Provider>
  </>
)

export { Layout }
