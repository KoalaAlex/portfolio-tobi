import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { Context } from '../context'

const Provider = ({ children, lang, setLanguage }) => (
    <Context.Provider value={
        { lang, setLanguage: (setTo) => setLanguage(setTo) }
    }>
        {children}
    </Context.Provider>
)

const en = 'en'
const de = 'de'
const lang = 'lang'

const enhance = compose(
    withState(lang, 'handleLanguage', en),
    withHandlers({
        setLanguage: ({lang, handleLanguage, setTo }) => (setTo) => {
            if(setTo === de){
              if (lang === en) {
                  handleLanguage(de)
                  localStorage.setItem(lang, de)
              }
            } else {
              if (lang === de) {
                  handleLanguage(en)
                  localStorage.setItem(lang, en)
              }
            }
        }
    }),
    lifecycle({
        componentDidMount() {
            const localLang = localStorage.getItem(lang)
            if (localLang) {
                this.props.handleLanguage(localLang)
            } else {
                this.props.handleLanguage(navigator.language.split('-')[0])
            }
        }
    })
)

export default enhance(Provider)
