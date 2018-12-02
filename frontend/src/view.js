import h from 'hyperapp-style' // eslint-disable-line
import styles from './styles'
import logo from './images/wolfox-logo.png'
import { Header, Flex, Page } from './Components'

const NavBar = () => (
  <nav style={styles.navBar}>
    <div style={{ padding: styles.medium }}>
      <img src={logo} alt='Wolfox logo' style={{ height: '60px' }}/>
    </div>
    <Header>Wolfox Stack</Header>
  </nav>
)

const Congratulations = () => (
  <Header style={{ textAlign: 'center' }}>
    Congratulations for using the Wolfox Stack!
  </Header>
)

const Link = (props, children) => (
  <a style={{ padding: styles.medium }} href={props.href}>{children}</a>
)

const MoreInfo = () => (
  <div style={styles.verticalCenter}>
    <h2 style={{ padding: `${styles.medium} ${styles.large}` }}>
      Want more info?
    </h2>
    <Flex>
      <Link href='https://github.com/jorgebucaran/hyperapp'>
        Frontend Documentation
      </Link>
      <Link href='https://frenchpastries.org'>
        Backend Documentation
      </Link>
    </Flex>
  </div>
)

// eslint-disable-next-line
const view = (state, actions) => (
  <div id='app' style={{ minHeight: '100vh', ...styles.verticalCenter }}>
    <NavBar/>
    <Page width={700} style={{ padding: styles.large }}>
      <Congratulations/>
      <MoreInfo/>
    </Page>
  </div>
)

export default view
