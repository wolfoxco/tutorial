import h from 'hyperapp-style' // eslint-disable-line
import view from './view'

const state = {}

const actions = {
  messaging: {
    down: value => state => ({ value: state.value - value }),
    up: value => state => ({ value: state.value + value })
  }
}

export { state, actions, view }
