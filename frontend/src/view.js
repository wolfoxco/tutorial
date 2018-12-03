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

const Title = (props, children) => ({
  tag: 'Title',
  content: children
})

const Link  = props => ({
  tag: 'Link',
  ...props
})

const createLink = elem => (
  <li style={{ padding: `${styles.tiny} 0`}}>
    <a href={elem.href} target='_blank' rel='noopener noreferrer' style={{
      textDecoration: 'none'
    }}>
      {elem.name}
    </a>
  </li>
)

const LinkList = (props, children) => {
  const title = children.find(elem => elem.tag === 'Title')
  const links = children.filter(elem => elem.tag === 'Link')
  return (
    <div style={{ padding: '0 48px' }}>
      {title ? <h2>{title.content}</h2> : <None/>}
      <ul style={{ margin: `0 -${styles.medium}`}}>
        {links.map(createLink)}
      </ul>
    </div>
  )
}

const FrontendLinks = () => (
  <LinkList>
    <Title>Frontend</Title>
    <Link href='https://github.com/jorgebucaran/hyperapp' name='HyperApp'/>
    <Link href='https://hyperappjs.herokuapp.com/' name='HyperApp Slack'/>
    <Link href='https://codepen.io/search/pens/?q=hyperapp' name='HyperApp Examples'/>
    <Link href='https://www.reddit.com/r/hyperapp' name='HyperApp Reddit'/>
  </LinkList>
)

const BackendLinks = () => (
  <LinkList>
    <Title>Backend</Title>
    <Link href='https://frenchpastries.org' name='French Pastries'/>
    <Link href='https://join.slack.com/t/frenchpastries/shared_invite/enQtNDg4NTYwNjYzNzc4LTJmOTI4MDYyZGY5YzVkOWJlMzViZTEwNzQ2NjgyYzI1NzE2MDA0NDI1NWYyZDBhZmUzYjZkODA0YjMyMzY2ZmM' name='French Pastries Slack'/>
    <Link href='https://github.com/FrenchPastries/millefeuille' name='MilleFeuille'/>
    <Link href='https://github.com/FrenchPastries/assemble' name='Assemble'/>
  </LinkList>
)

const MoreInfo = () => (
  <div style={styles.verticalCenter}>
    <h2 style={{ padding: `${styles.medium} ${styles.large}` }}>
      Want more info?
    </h2>
    <Flex>
      <FrontendLinks/>
      <BackendLinks/>
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
