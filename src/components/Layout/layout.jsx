import React from 'react'
import { Global } from "@emotion/core"
import de from 'react-intl/locale-data/de'
import en from 'react-intl/locale-data/en'
import { addLocaleData, IntlProvider } from 'react-intl'
import localEN from '../../localize/en.json'
import localDE from '../../localize/de.json'
import { Context } from '../context'
import Provider from './provider'
import { Seo } from '../seo'

import { createGlobalStyle } from "styled-components";

import fontFiles from '../../fonts/fonts';

// css string
import GlobalString from '../../styles/global'

addLocaleData(de, en)

const GlobalFontFace = createGlobalStyle`
  font-family: 'FeatherScript';
  src: local('FeatherScript') local('FeatherScript'),
     url(${fontFiles.FeatherScriptWOFF}) format('woff'), /* Moder Browser */
     url(${fontFiles.FeatherScriptTTF}) format('truetype'), /* Safari, Android, iOS */
     url(${fontFiles.FeatherScriptOTF}) format('opentype');
`;

const Layout = ({ children }) => (
  <>
    <Global
       styles={GlobalString}
     />
    <Seo />
    <GlobalFontFace />
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
