import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import { getOS } from '../Utils'

const url = 'https://s3-ap-southeast-1.amazonaws.com/genetica.asia/wp-content/uploads/2019/08/logo-genetica-2019-10-Custom.png'

const getWidth = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DefaultLayout extends Component {
  state = {}
  constructor(props) {
    super(props)
    this.state = {
      fixed: true,
      activeItem: ''
    }
  }

  onLogout() {
    localStorage.clear()
    this.props.history.push('/')
    // window.reload()
  }

  render() {
    const { children } = this.props
    const { fixed } = this.state
    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyComputer.maxWidth}
      >
        <Sidebar.Pushable as={Segment} style={{ height: '100vh' }}>
          <Sidebar
            as={Menu}
            // icon='labeled'
            inverted
            vertical={getOS() === 'left'}
            visible={fixed}
            animation='push'
            size='large'
            direction={getOS()}
          >
            <Menu.Item as='a' className='logo-home'>
              <img src={url} />
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Notification</Menu.Item>
            <Menu.Item as='a'>Settings</Menu.Item>
            <Menu.Item as='a' onClick={() => this.onLogout()}>Logout</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic >
              <Header as='h4' className='hamburger' onClick={() => this.setState({ fixed: !fixed })}>
                <Icon name='sidebar' />
              </Header>
              {children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}
export default withRouter(DefaultLayout)
