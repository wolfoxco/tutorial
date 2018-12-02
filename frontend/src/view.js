import h from 'hyperapp-style' // eslint-disable-line
import styles from './styles'
import logo from './images/wolfox-logo.png'
import { Header, Flex, Page, None } from './Components'

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

const Title = (props, children) => ({ tag: 'Title', content: children })
const Link  = props => ({ tag: 'Link', ...props })
const LinkList = (props, children) => {
  const title = children.find(elem => elem.tag === 'Title')
  const links = children.filter(elem => elem.tag === 'Link')
  return (
    <div style={{ padding: '0 48px' }}>
      {title ? <h2>{title.content}</h2> : <None/>}
      {links.map(elem => <a href={elem.href}>{elem.name}</a>)}
    </div>
  )
}

const BackendLinks = () => (
  <LinkList>
    <Title>Backend</Title>
    <Link href='https://github.com/jorgebucaran/hyperapp' name='HyperApp'/>
  </LinkList>
)

const FrontendLinks = () => (
  <LinkList>
    <Title>Frontend</Title>
    <Link href='https://frenchpastries.org' name='French Pastries'/>
  </LinkList>
)

const MoreInfo = () => (
  <div style={styles.verticalCenter}>
    <h2 style={{ padding: `${styles.medium} ${styles.large}` }}>
      Want more info?
    </h2>
    <Flex>
      <BackendLinks/>
      <FrontendLinks/>
    </Flex>
  </div>
)

// eslint-disable-next-line
const view = (state, actions) => (
  <div id='app' style={{ minHeight: '100vh', ...styles.verticalCenter }}>
    <NavBar/>
    <Page width={600} style={{ padding: styles.large }}>
      <Congratulations/>
      <MoreInfo/>
    </Page>
  </div>
)

export default view
