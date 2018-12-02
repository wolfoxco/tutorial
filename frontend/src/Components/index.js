import h from 'hyperapp-style' // eslint-disable-line

const Header = (props, children) => (
  <h1 style={{ ...props.style, fontFamily: 'Roboto Slab' }}>{children}</h1>
)

const Flex = (props, children) => (
  <div style={{ ...props.style, display: 'flex' }}>{children}</div>
)

export { Header, Flex }
