import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GalleryModal from './GalleryModal'
import { Button } from 'semantic-ui-react'
import DefaultLayout from '../DefaultLayout'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  onLogOut() {
    localStorage.clear()
    this.props.history.push('/')
  }

  render() {
    const { open } = this.state
    const user = localStorage.getItem('user');
    return user ? (
      <DefaultLayout>
        <div>
          <h1>My React App!</h1>
          <Button primary onClick={() => this.setState({ open: !open })}>Open Gallery Modal</Button>
          <div>
            <Button style={{ marginTop: 20 }} primary onClick={() => this.onLogOut()}>Logout</Button>
          </div>
          <GalleryModal
            open={open}
            onClose={() => this.setState({ open: false })}
          />
        </div >
      </DefaultLayout>
    ) : <Redirect to="/login" />;
  }
}

export default App;