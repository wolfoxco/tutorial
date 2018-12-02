import { app as program } from 'hyperapp'
import h from 'hyperapp-style' // eslint-disable-line
import normalize from './styles/normalize'
import foundations from './styles/foundations'
import { state, actions, view } from './app'

function onceLoaded() {
  return new Promise(resolve =>
    window.addEventListener('DOMContentLoaded', () => resolve())
  )
}

function init() {
  const stylesheets = document.getElementsByTagName('style')
  if (stylesheets.length === 0) {
    const head = document.getElementsByTagName('head')[0]
    if (head) {
      const fonts = document.createElement('link')
      fonts.href = 'https://fonts.googleapis.com/css?family=Raleway|Roboto+Slab'
      fonts.rel = 'stylesheet'
      const normalizeStylesheet = normalize()
      const foundationsStylesheet = foundations()
      head.appendChild(normalizeStylesheet)
      head.appendChild(foundationsStylesheet)
      head.appendChild(fonts)
    }
  }
  return true
}

function activateDevTools() {
  if (process.env.NODE_ENV !== 'production') { // eslint-disable-line
    return import('hyperapp-redux-devtools')
      .then(({ default: devtools }) =>
        devtools(program)(state, actions, view, document.body)
      )
  } else {
    return Promise.resolve(
      program(state, actions, view, document.body)
    )
  }
}

function main() {
  return onceLoaded()
    .then(init)
    .then(activateDevTools)
    .then(console.log('Program Launched'))
    .catch(error => console.error(error))
}

main()
