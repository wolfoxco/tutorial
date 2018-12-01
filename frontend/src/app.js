import h from 'hyperapp-style' // eslint-disable-line

const state = {}

const actions = {
  messaging: {
    down: value => state => ({ value: state.value - value }),
    up: value => state => ({ value: state.value + value })
  }
}

const verticalCenter = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const Congratulations = () => (
  <div style={{ padding: '24px' }}>
    <h1>Congratulations for using the Wolfox Stack!</h1>
  </div>
)

const Link = (props, children) => (
  <a style={{ padding: '12px' }} href={props.href}>{children}</a>
)

const MoreInfo = () => (
  <div style={verticalCenter}>
    <h2 style={{ padding: '12px 24px' }}>Want more info?</h2>
    <div style={{ display: 'flex' }}>
      <Link href='https://github.com/jorgebucaran/hyperapp'>Frontend Documentation</Link>
      <Link href='https://frenchpastries.org'>Backend Documentation</Link>
    </div>
  </div>
)

const view = (state, actions) => (
  <div id='app' style={{
    minHeight: '100vh',
    ...verticalCenter
  }}>
    <Congratulations/>
    <MoreInfo/>
  </div>
)

export { state, actions, view }
